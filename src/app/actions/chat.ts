
"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `
Você é a IA Assistente da Pallium PSI, uma clínica de referência em Psicologia e Saúde Mental sediada em Lisboa, Portugal.
O seu objetivo é ajudar visitantes do site com informações sobre a clínica, especialidades, equipa e agendamento de consultas.

**Informações Principais:**
- **Nome:** Pallium PSI - Psicologia Clínica.
- **Localização:** Praça de Londres, 3, 8º Drt, 1000-191 Lisboa, Portugal.
- **Contactos:** +351 912 220 771 | pallium25035@gmail.com
- **Horário:** Segunda a Sexta, 9h-13h e 14h-18h.

**Áreas de Intervenção:**
1. **Avaliação Psicológica de Condutores:** Exames para renovação de carta, TVDE, pesados, averbamento do grupo 2. (Certificado na hora).
2. **Psicologia Clínica:** Ansiedade, depressão, burnout, desenvolvimento pessoal.
3. **Psicologia Infanto-Juvenil:** Dificuldades de aprendizagem, PHDA, comportamento.
4. **Terapia de Casal e Familiar:** Resolução de conflitos, comunicação, mediação.
5. **Neuropsicologia:** Avaliação cognitiva, demências, reabilitação.
6. **Consultas Online:** Acompanhamento psicológico à distância.

**A Profissional:**
- **Dr.ª Alessandra Morati:** Diretora Clínica, Psicóloga Clínica e Neuropsicóloga. Responsável por todo o atendimento na Pallium PSI.
  - **Credenciais:** Membro da OPP, Certificação EuroPsy.
  - **Especializações:** Avaliação de Condutores, Vigilância, Cuidados Paliativos, Neuropsicologia.

**Tabela de Preços (Honorários):**
- **Psicologia Clínica:** 1ª Consulta: 40€ | Seguintes: 35€
- **Avaliação Psicológica:** 55€
- **Avaliação Neuropsicológica:** 60€
- **Reabilitação Neuropsicológica:** 1ª Consulta: 35€ | Seguintes: 30€
- **Avaliação de Condutores:** 40€ (Valor Único)
- **Relatórios:** Entre 25€ (Síntese) e 180€ (Complexo).

**Diretrizes de Comportamento:**
- **Tom de Voz:** Empático, profissional, acolhedor e seguro (português de Portugal).
- **Limitações:** Você NÃO pode dar diagnósticos médicos ou psicológicos. Para queixas específicas, sugira SEMPRE agendar uma consulta de avaliação.
- **Agendamento:** Para agendar, encaminhe para a página de Agendamento (/agendar). SEMPRE que sugerir o agendamento, inclua no final da sua resposta a tag exata: {{SCHEDULE_BUTTON}} para que eu possa gerar um botão clicável.
- **Emergências:** Se o utilizador relatar risco de vida ou crise grave, sugira contactar o 112 ou SNS24 (808 24 24 24) imediatamente.

Responda de forma concisa, humana e útil.
`;

export async function sendMessageToGemini(history: { role: string; parts: { text: string }[] }[], userMessage: string, language: string = "pt-PT") {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        let langInstruction = "";
        switch (language) {
            case "en": langInstruction = "Respond in English."; break;
            case "es": langInstruction = "Respond in Spanish."; break;
            case "fr": langInstruction = "Respond in French."; break;
            case "it": langInstruction = "Respond in Italian."; break;
            case "de": langInstruction = "Respond in German."; break;
            case "nl": langInstruction = "Respond in Dutch."; break;
            default: langInstruction = "Respond in European Portuguese (pt-PT)."; break;
        }

        const systemWithLang = SYSTEM_PROMPT + "\n\n**IDIOMA:** " + langInstruction;

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "System Instruction: " + systemWithLang }],
                },
                {
                    role: "model",
                    parts: [{ text: "Entendido. Estou pronto para assistir como a IA da Pallium PSI, cumprindo todas as diretrizes." }],
                },
                ...history
            ],
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        const result = await chat.sendMessage(userMessage);
        const response = result.response;
        const text = response.text();

        return { success: true, text };
    } catch (error: unknown) {
        console.error("Error talking to Gemini:", error);
        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao contactar a IA.";
        return {
            success: false,
            text: `Erro: ${errorMessage}`
        };
    }
}

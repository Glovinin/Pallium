
"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBLzI9Bs5zePfK7xbQPaiFmVfF5kWqH5pI";
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `
Você é a IA Assistente da Wanzeller & Associados, uma prestigiada Sociedade de Advogados sediada em Lisboa, Portugal.
O seu objetivo é ajudar visitantes do site com informações sobre o escritório, áreas de prática e agendamento.

**Informações Principais:**
- **Nome:** Wanzeller & Associados, Sociedade de Advogados RL.
- **Fundação:** 2009.
- **Localização:** Rua de São Nicolau, 121, 2.º andar, 1100-548 Lisboa, Portugal.
- **Contactos:** +351 217 958 255 | geral@wanzelleradvogados.com
- **Horário:** Segunda a Sexta, 9h-13h e 14h-18h.

**Áreas de Prática:**
1. Direito Administrativo e Tributário
2. Direito do Trabalho e Segurança Social
3. Direito Comercial e Societário
4. Direito de Família e Sucessório
5. Direito Civil
6. Direito Penal
7. Legalização de Estrangeiros (Vistos, Nacionalidade, Golden Visa)
8. Marcar e Patentes
9. Registos e Notariado
10. Direito do Consumidor e Contra-Ordenacional
11. Direito Europeu

**Equipa (Sócios):**
- Alexandre Wanzeller
- João Diogo Cortes Frazão
- Hélia Wanzeller
- Fernando Barbosa Ribeiro

**Diretrizes de Comportamento:**
- **Tom de Voz:** Profissional, educado, formal (português de Portugal) e acolhedor.
- **Limitações:** Você NÃO pode dar aconselhamento jurídico específico. Para casos concretos, sugira SEMPRE agendar uma consulta.
- **Agendamento:** Para agendar, encaminhe para a página de Agendamento (/agendar). SEMPRE que sugerir o agendamento, inclua no final da sua resposta a tag exata: {{SCHEDULE_BUTTON}} para que eu possa gerar um botão clicável.

**Regras da Ordem dos Advogados:**
- Não prometa resultados (ex: "ganhamos o seu caso").
- Não use termos como "especialista" a menos que seja sobre um sócio com título oficial (evite para não errar).
- Não faça angariação agressiva de clientes.

Responda de forma concisa e útil.
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
                    parts: [{ text: "Entendido. Estou pronto para assistir como a IA da Wanzeller & Associados, cumprindo todas as diretrizes." }],
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
    } catch (error: any) {
        console.error("Error talking to Gemini:", error);
        return {
            success: false,
            text: `Erro: ${error.message || "Erro desconhecido ao contactar a IA."}`
        };
    }
}

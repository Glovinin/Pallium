
import {
    Users,
    FileText,
    Brain,
    Globe2,
    Car,
    Shield,
    ClipboardCheck
} from "lucide-react";

export const areas = [
    {
        id: "clinica-saude",
        title: "Psicologia Clínica e da Saúde",
        icon: Users,
        category: "psicologia-clinica",
        description: "Acompanhamento psicológico para questões como ansiedade, depressão e bem-estar.",
        fullDescription: "Acompanhamento psicológico especializado para adultos, focado na compreensão e resolução de dificuldades emocionais e comportamentais. Intervimos na promoção da saúde mental e na adaptação a doenças crónicas, visando o equilíbrio e a qualidade de vida.",
        items: [
            {
                title: "Perturbações de Ansiedade e Humor",
                description: "Intervenção em depressão, ataques de pânico, fobias e ansiedade generalizada."
            },
            {
                title: "Gestão de Stress e Burnout",
                description: "Estratégias de coping para esgotamento profissional e pressão quotidiana."
            },
            {
                title: "Perturbações do Sono",
                description: "Avaliação e intervenção em insónias e higiene do sono."
            },
            {
                title: "Luto e Trauma",
                description: "Apoio no processamento de perdas significativas e experiências traumáticas."
            },
            {
                title: "Doença Crónica e Dor",
                description: "Acompanhamento na adaptação a condições de saúde física prolongadas."
            }
        ],
        size: "large"
    },
    {
        id: "avaliacao-psicologica",
        title: "Avaliação Psicológica",
        icon: ClipboardCheck,
        category: "psicologia-clinica",
        description: "Entrevistas e testes para compreender o funcionamento emocional e cognitivo.",
        fullDescription: "Avaliação rigorosa e abrangente através de entrevistas clínicas e testes psicométricos padronizados. O objetivo é compreender o perfil de funcionamento do indivíduo, permitindo um diagnóstico diferencial preciso e o delineamento de um plano terapêutico eficaz.",
        items: [
            {
                title: "Diagnóstico Clínico",
                description: "Identificação de psicopatologias e necessidades terapêuticas específicas."
            },
            {
                title: "Avaliação da Personalidade",
                description: "Estudo dos traços de personalidade e padrões comportamentais."
            },
            {
                title: "Avaliação de Inteligência (QI)",
                description: "Provas de avaliação intelectual para contextos clínicos ou educacionais."
            },
            {
                title: "Relatórios Periciais",
                description: "Avaliação psicológica para fins legais ou administrativos."
            }
        ],
        size: "normal"
    },
    {
        id: "neuropsicologia-clinica",
        title: "Neuropsicologia Clínica",
        icon: Brain,
        category: "neuropsicologia",
        description: "Avaliação e intervenção em memória, atenção e funções executivas.",
        fullDescription: "Especialidade dedicada à relação entre o cérebro e o comportamento. Realizamos avaliação e reabilitação de funções cognitivas (memória, atenção, linguagem) afetadas por lesões adquiridas, processos degenerativos ou perturbações do desenvolvimento.",
        items: [
            {
                title: "Reabilitação Cognitiva",
                description: "Programas personalizados pós-AVC, Traumatismo Cranioencefálico (TCE) ou Tumores."
            },
            {
                title: "Estimulação Cognitiva",
                description: "Intervenção no Envelhecimento Normal e Declínio Cognitivo Ligeiro (DCL)."
            },
            {
                title: "PHDA no Adulto",
                description: "Avaliação e estratégias de gestão para Défice de Atenção em adultos."
            }
        ],
        size: "normal"
    },
    {
        id: "avaliacao-neuropsicologica",
        title: "Avaliação Neuropsicológica",
        icon: FileText,
        category: "neuropsicologia",
        description: "Exame aprofundado para dificuldades de memória e suspeita de alterações.",
        fullDescription: "Exame detalhado das funções mentais superiores. É fundamental para o diagnóstico diferencial entre envelhecimento normativo e patológico, bem como para caraterizar o impacto cognitivo de diversas condições neurológicas e psiquiátricas.",
        items: [
            {
                title: "Rastreio e Diagnóstico de Demências",
                description: "Avaliação precoce na Doença de Alzheimer, Parkinson e outras demências."
            },
            {
                title: "Queixas de Memória",
                description: "Diagnóstico diferencial de esquecimentos benignos vs. patológicos."
            },
            {
                title: "Capacidade de Decisão",
                description: "Pareceres sobre capacidade para gestão financeira e autonomia."
            }
        ],
        size: "normal"
    },
    {
        id: "consulta-imigrante",
        title: "Consulta do Imigrante",
        icon: Globe2,
        category: "psicologia-clinica",
        description: "Apoio especializado na migração e adaptação cultural.",
        fullDescription: "Serviço dedicado a quem atravessa o complexo processo de migração. Abordamos os desafios da aculturação, o sentimento de pertença e a gestão emocional da distância, promovendo uma integração saudável e resiliente.",
        items: [
            {
                title: "Choque Cultural e Adaptação",
                description: "Apoio na navegação de novas normas sociais e burocráticas."
            },
            {
                title: "Luto Migratório",
                description: "Processamento das perdas associadas à mudança de país (família, estatuto, língua)."
            },
            {
                title: "Identidade e Pertença",
                description: "Gestão de conflitos identitários e construção de novos vínculos."
            }
        ],
        size: "normal"
    },
    {
        id: "avaliacao-condutores",
        title: "Avaliação de Condutores",
        icon: Car,
        category: "psicologia-clinica",
        description: "Avaliação da aptidão psicológica para condução (Grupos 1 e 2).",
        fullDescription: "Avaliação psicológica de condutores regulamentada pelo IMT. Realizamos os testes psicotécnicos necessários para aferir as aptidões perceptivo-cognitivas e a estabilidade emocional exigidas para uma condução segura.",
        items: [
            {
                title: "Renovação e Obtenção de Carta",
                description: "Relatórios psicológicos para categorias de ligeiros e pesados."
            },
            {
                title: "Condutores Profissionais (Grupo 2)",
                description: "Avaliação específica para TVDE, táxis, pesados de mercadorias e passageiros, e instrutores."
            },
            {
                title: "Troca de Carta Estrangeira",
                description: "Avaliação necessária para averbamento de cartas internacionais."
            }
        ],
        size: "normal"
    },
    {
        id: "avaliacao-vigilantes",
        title: "Pessoal de Vigilância",
        icon: Shield,
        category: "psicologia-clinica",
        description: "Avaliação psicológica para segurança privada e vigilância.",
        fullDescription: "Avaliação psicológica obrigatória para admissão e renovação do cartão profissional de Vigilante de Segurança Privada. Seguimos rigorosamente os critérios definidos pela Direção Nacional da PSP.",
        items: [
            {
                title: "Admissão e Renovação de Cartão",
                description: "Avaliação de perfil e exclusão de psicopatologia para todas as especialidades."
            },
            {
                title: "Diretores de Segurança",
                description: "Avaliação de competências para cargos de direção na segurança privada."
            }
        ],
        size: "normal"
    }
];

// Helper to get areas by category
export const psicologiaClinicaAreas = areas.filter(a => a.category === "psicologia-clinica");
export const neuropsicologiaAreas = areas.filter(a => a.category === "neuropsicologia");

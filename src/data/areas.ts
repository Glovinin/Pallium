import {
    Building2,
    Briefcase,
    Users,
    FileText,
    Gavel,
    Globe2,
    Stamp,
    FileCheck,
    AlertCircle,
    Shield,
    Globe,
} from "lucide-react";

export const areas = [
    {
        id: "administrativo",
        title: "Direito Administrativo e Tributário",
        icon: Building2,
        description: "Reclamação e impugnação judicial de decisões da Autoridade Tributária.",
        fullDescription: "A área de Direito Administrativo e Tributário abrange a defesa dos interesses dos contribuintes perante a Administração Fiscal e os Tribunais Administrativos e Fiscais. Prestamos assessoria em matéria de impostos directos e indirectos, bem como em contencioso tributário e procedimentos de contratação pública.",
        items: [
            {
                title: "Impostos (IRS, IRC, IVA, Selo, Mais-valias, IMT, IMI)",
                description: "Assessoria e defesa em matéria de impostos sobre o rendimento, consumo e património."
            },
            {
                title: "Contencioso tributário",
                description: "Representação em processos de impugnação judicial e oposição à execução fiscal."
            },
            {
                title: "Contratação pública",
                description: "Assessoria em procedimentos concursais e contencioso pré-contratual."
            },
            {
                title: "Direito Constitucional",
                description: "Análise de conformidade constitucional e recursos para o Tribunal Constitucional."
            }
        ],
        size: "large"
    },
    {
        id: "trabalho",
        title: "Direito do Trabalho e Segurança Social",
        icon: Users,
        description: "Aconselhamento e elaboração de contratos de trabalho.",
        fullDescription: "A prática de Direito do Trabalho compreende a assessoria a empregadores e trabalhadores em todas as fases da relação laboral. Abrange desde a elaboração de contratos de trabalho até à condução de processos disciplinares, passando pela resolução de litígios laborais e questões relacionadas com a Segurança Social.",
        items: [
            {
                title: "Procedimentos disciplinares e processos de despedimento",
                description: "Condução de processos disciplinares e assessoria em cessação de contratos de trabalho."
            },
            {
                title: "Acidentes de trabalho",
                description: "Representação em processos de acidentes de trabalho e doenças profissionais."
            },
            {
                title: "Impugnação de decisões da Segurança Social",
                description: "Recurso de decisões administrativas em matéria de prestações sociais."
            },
            {
                title: "Função Pública",
                description: "Assessoria em questões de emprego público e respectivo contencioso."
            }
        ],
        size: "normal"
    },
    {
        id: "comercial",
        title: "Direito Comercial e Societário",
        icon: Briefcase,
        description: "Constituição, alteração, dissolução e liquidação de sociedades.",
        fullDescription: "O Direito Comercial e Societário engloba todas as questões relacionadas com a vida das empresas. Prestamos assessoria na constituição de sociedades, reestruturações empresariais, fusões e aquisições, bem como em processos de insolvência e recuperação de empresas. A área inclui ainda questões de Propriedade Industrial.",
        items: [
            {
                title: "Fusões e aquisições",
                description: "Assessoria em operações de concentração empresarial e compra e venda de participações sociais."
            },
            {
                title: "Insolvência e recuperação de empresas",
                description: "Apoio em processos de insolvência, PER e reestruturação de dívidas."
            },
            {
                title: "Direito da Concorrência",
                description: "Assessoria em matérias de práticas restritivas e controlo de concentrações."
            },
            {
                title: "Propriedade Industrial",
                description: "Protecção de marcas, patentes e outros direitos de propriedade industrial."
            }
        ],
        size: "normal"
    },
    {
        id: "penal",
        title: "Direito Penal",
        icon: Gavel,
        description: "Queixa-crime, abertura de instrução e contencioso penal.",
        fullDescription: "A área de Direito Penal abrange a representação de clientes em processos criminais, desde a fase de inquérito até ao julgamento e recurso. Inclui ainda a assessoria em matérias de Compliance e Corporate Governance, ajudando as empresas a prevenir a responsabilidade penal das pessoas colectivas.",
        items: [
            {
                title: "Compliance",
                description: "Implementação de programas de conformidade e prevenção de riscos legais."
            },
            {
                title: "Corporate Governance",
                description: "Assessoria em boas práticas de governo societário e responsabilidade de administradores."
            },
            {
                title: "Responsabilidade penal de pessoas colectivas",
                description: "Prevenção e defesa em processos de responsabilidade criminal empresarial."
            },
            {
                title: "Contencioso penal",
                description: "Representação em todas as fases do processo criminal, desde o inquérito ao recurso."
            }
        ],
        size: "large"
    },
    {
        id: "europeu",
        title: "Direito Europeu",
        icon: Globe,
        description: "Direitos Humanos e contencioso europeu.",
        fullDescription: "A prática de Direito Europeu centra-se na protecção dos direitos fundamentais e na representação perante instâncias europeias. Abrange questões relacionadas com a aplicação do direito da União Europeia e a defesa dos Direitos Humanos consagrados na Convenção Europeia.",
        items: [
            {
                title: "Direitos Humanos",
                description: "Defesa de direitos fundamentais consagrados na Convenção Europeia dos Direitos do Homem."
            },
            {
                title: "Contencioso europeu",
                description: "Representação perante o Tribunal de Justiça da UE e o Tribunal Europeu dos Direitos Humanos."
            }
        ],
        size: "large"
    },
    {
        id: "familia",
        title: "Direito de Família e Sucessório",
        icon: Users,
        description: "Divórcio, nacionalização e adopção.",
        fullDescription: "O Direito de Família e Sucessório trata das questões mais sensíveis da vida pessoal dos nossos clientes. Prestamos acompanhamento em processos de divórcio, regulação das responsabilidades parentais, partilhas de bens e questões sucessórias, procurando sempre soluções que protejam os interesses de todas as partes envolvidas.",
        items: [
            {
                title: "Responsabilidades parentais",
                description: "Regulação do exercício das responsabilidades parentais, guarda, visitas e alimentos."
            },
            {
                title: "Partilhas judiciais e extra-judiciais",
                description: "Condução de processos de partilha de bens comuns do casal ou de heranças."
            },
            {
                title: "Heranças",
                description: "Assessoria em habilitação de herdeiros, inventários e questões sucessórias."
            }
        ],
        size: "normal"
    },
    {
        id: "civil",
        title: "Direito Civil",
        icon: FileText,
        description: "Elaboração de contratos e contencioso civil.",
        fullDescription: "A área de Direito Civil abrange a redacção e negociação de contratos, bem como a resolução de litígios civis. Inclui questões de responsabilidade civil, direito de propriedade, propriedade horizontal e arrendamento urbano, oferecendo soluções tanto preventivas como contenciosas.",
        items: [
            {
                title: "Responsabilidade civil",
                description: "Acções de indemnização por danos patrimoniais e não patrimoniais."
            },
            {
                title: "Direito de propriedade e propriedade horizontal",
                description: "Questões relativas a imóveis, condomínios e direitos reais."
            },
            {
                title: "Arrendamento urbano e despejos",
                description: "Contratos de arrendamento, renovação, denúncia e acções de despejo."
            }
        ],
        size: "normal"
    },
    {
        id: "estrangeiros",
        title: "Legalização de Estrangeiros",
        icon: Globe2,
        description: "Visto e autorização de residência para trabalho, estudo ou pesquisa.",
        fullDescription: "A prática de Legalização de Estrangeiros presta apoio a cidadãos estrangeiros que pretendam residir, trabalhar ou investir em Portugal. Abrange os diversos tipos de vistos e autorizações de residência, incluindo o programa de Autorização de Residência para Actividade de Investimento (ARI/Golden Visa) e processos de reagrupamento familiar.",
        items: [
            {
                title: "Visto para empreendedores/startup",
                description: "Autorização de residência para actividade empresarial ou de inovação."
            },
            {
                title: "Reagrupamento familiar",
                description: "Pedidos de reunificação familiar para familiares de residentes legais."
            },
            {
                title: "ARI (Golden Visa)",
                description: "Autorização de residência através de investimento qualificado (mínimo €250.000)."
            },
            {
                title: "Estadia anual média de 7 dias",
                description: "Obrigação de permanência mínima em Portugal para manutenção do ARI."
            }
        ],
        size: "large"
    },
    {
        id: "notariado",
        title: "Registos e Notariado",
        icon: FileCheck,
        description: "Autenticação de documentos privados com plena validade jurídica.",
        fullDescription: "A área de Registos e Notariado oferece serviços de autenticação e certificação de documentos. Estes actos têm plena validade jurídica, idêntica aos realizados por notários, incluindo a autenticação de documentos de compra e venda de imóveis, reconhecimento de assinaturas e certificação de traduções.",
        items: [
            {
                title: "Reconhecimento de assinaturas",
                description: "Certificação da autenticidade de assinaturas em documentos particulares."
            },
            {
                title: "Certificação de tradução e fotocópias",
                description: "Confirmação de conformidade de traduções e cópias com os originais."
            },
            {
                title: "Autenticação de documentos de compra e venda de imóveis",
                description: "Actos de autenticação com valor equivalente a escritura pública."
            }
        ],
        size: "large"
    },
    {
        id: "marcas",
        title: "Marcas e Patentes",
        icon: Stamp,
        description: "Registo nacional, UE e internacional de marcas, patentes e designs.",
        fullDescription: "A prática de Marcas e Patentes assegura a protecção dos activos de propriedade industrial dos nossos clientes. Prestamos assessoria no registo e defesa de marcas, patentes e designs a nível nacional, europeu e internacional, garantindo a protecção adequada da propriedade intelectual.",
        items: [
            {
                title: "Registo de marcas",
                description: "Pedidos de registo de marcas em Portugal, na UE e internacionalmente."
            },
            {
                title: "Registo de patentes",
                description: "Protecção de invenções através de patentes nacionais e europeias."
            },
            {
                title: "Registo de designs",
                description: "Protecção de desenhos e modelos industriais."
            },
            {
                title: "Protecção de Marcas e de Patentes",
                description: "Defesa de direitos de propriedade industrial e acções de contrafacção."
            }
        ],
        size: "normal"
    },
    {
        id: "consumidor",
        title: "Direito do Consumidor",
        icon: Shield,
        description: "Provedor do consumo e garantias de bens de consumo.",
        fullDescription: "O Direito do Consumidor visa a protecção dos direitos dos consumidores nas suas relações com fornecedores de bens e prestadores de serviços. Abrange questões relacionadas com garantias, contratos de adesão e a resolução de conflitos de consumo através dos mecanismos legais disponíveis.",
        items: [
            {
                title: "Contratos de adesão",
                description: "Análise e impugnação de cláusulas contratuais gerais abusivas."
            },
            {
                title: "Garantias de bens de consumo",
                description: "Exercício de direitos de garantia em bens defeituosos ou não conformes."
            }
        ],
        size: "normal"
    },
    {
        id: "contraordenacional",
        title: "Direito Contra-Ordenacional",
        icon: AlertCircle,
        description: "Consulta jurídica para defesa em processos contra-ordenacionais.",
        fullDescription: "O Direito Contra-Ordenacional trata da defesa em processos sancionatórios que podem resultar na aplicação de coimas. Mesmo não sendo obrigatória, a consulta jurídica é importante para a defesa, permitindo verificar erros formais (prazos, notificações) e a correcta aplicação da lei, evitando custos desnecessários.",
        items: [
            {
                title: "Verificação de erros formais (prazos, notificações)",
                description: "Análise de vícios procedimentais que podem determinar a nulidade do processo."
            },
            {
                title: "Correcta aplicação da lei",
                description: "Verificação da legalidade da infracção imputada e da coima aplicada."
            },
            {
                title: "Defesa em processos contra-ordenacionais",
                description: "Representação em fase administrativa e recurso para os tribunais."
            }
        ],
        size: "large"
    }
];

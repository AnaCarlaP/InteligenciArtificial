const caixaPrincipal = document.querySelector(".caixa-princial");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResulado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Qual é o principal impacto da IA no processamento de grandes volumes de dados, como interações de clientes e registros de chamadas?",
        alternativas: [
            "Permite análise rápida e identificação de padrões complexos.",
            "Exige mais tempo para organizar e interpretar manualmente."
        ]
    },
    {
        enunciado: "Como a IA influencia a interação entre clientes e empresas, especialmente para suporte contínuo?",
        alternativas: [
            "Aumenta a necessidade de atendentes humanos para todas as consultas.",
            "Permite chatbots e assistentes virtuais para suporte 24/7."
        ]
    },
    {
        enunciado: "Qual a diferença na personalização de serviços e produtos para os usuários com e sem IA?",
        alternativas: [
            "Os serviços são genéricos e padronizados para todos.",
            "Oferece recomendações e experiências adaptadas individualmente."
        ]
    },
    {
        enunciado: "No desenvolvimento automotivo moderno, qual o papel crucial da IA na melhoria da segurança veicular?",
        alternativas: [
            "Habilita sistemas autônomos de frenagem e detecção de obstáculos.",
            "Aumenta a dependência exclusiva do motorista para evitar acidentes."
        ]
    },
    {
        enunciado: "Como a Inteligência Artificial impacta a criação de conteúdo e a inovação em diversas indústrias?",
        alternativas: [
            "Limita a capacidade de criar e inovar manualmente.",
            "Gera ideias originais e auxilia na otimização de processos criativos."
        ]
    },

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
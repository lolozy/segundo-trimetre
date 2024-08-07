const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta de viajar?",
        alternativas: [
            {
                texto: "Sim, eu adoro viajar!",
                afirmacao: "É uma ótima maneira de conhecer novas pessoas e culturas! "
            },
            {
                texto: "Não, viajar é entediante",
                afirmacao: "Prefiro ficar em casa onde me sinto mais confortável."
            }
        ]
    },
    {
        enunciado: " Você se sente confortável em climas muito frios e nevados?",
        alternativas: [
            {
                texto: "Sim, eu gosto de climas frios e nevados!",
                afirmacao: "É ótimo para um passeio e apreciar a paisagem tranquila."
            },
            {
                texto: "Não, eu prefiro climas mais moderados.",
                afirmacao: "Geralmente não me dou bem com temperaturas muito baixas."
            }
        ]
    },
    {
        enunciado: " Você já visitou a Europa?",
        alternativas: [
            {
                texto: " Sim, eu já estive na Europa!",
                afirmacao: "Fui a Paris, Londres e Roma."
            },
            {
                texto: "Não tenho interrese",
                afirmacao: "Lugare frios não me agradam."
            }
        ]
    },
    {
        enunciado: "Você gosta de viajar para destinos tropicais?",
        alternativas: [
            {
                texto: "Sim, eu adoro destinos tropicais!",
                afirmacao: "As praias e o clima quente são ótimos para relaxar."
            },
            {
                texto: "Não, prefiro lugares com climas mais temperados e atividades culturais.",
                afirmacao: " Os climas temperados proporcionam uma experiência de viagem mais confortável e versátil. "
            }
        ]
    },
   enunciado: " Você já ficou em um hostel durante suas viagens?",
        alternativas: [
            {
                texto: "Sim, já fiquei em hostels",
                afirmacao: "Gostei da experiência de conhecer outros viajantes e economizar."
            },
            {
                texto: "Não gosto de ficar em hotel!",
                afirmacao: "Hotéis costumam ter preços mais altos, especialmente em locais turísticos ou durante a alta temporada. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

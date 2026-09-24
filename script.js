const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: [
          "No início ficou com medo do que essa tecnologia pode fazer. ",
          "Achou assustador pensar na velocidade na qual a tecnologia está avançando.",
        ],
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: [
          "Quis saber como usar IA no seu dia a dia.",
          "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia.",
        ],
      },
    ],
  },
  {
    enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      {
        texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
        afirmacao: ["Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."],
      },
      {
        texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao: ["Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas."],
      },
    ],
  },
  {
    enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      {
        texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao: ["Criar uma imagem utilizando uma plataforma de design como o Paint."],
      },
      {
        texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao: ["Criar uma imagem utilizando um gerador de imagem de IA."],
      },
    ],
  },
  {
    enunciado: " Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      {
        texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
        afirmacao: ["O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."],
      },
      {
        texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        afirmacao: ["Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro."],
      },
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// *** NOVA FUNÇÃO PARA GERAR AFIRMAÇÕES ALEATÓRIAS ***
function geraAfirmacao(afirmacoes) {
    // Math.random() gera um número entre 0 (inclusive) e 1 (exclusive)
    // Multiplicamos pelo tamanho do array para ter um número entre 0 e o último índice
    // Math.floor() arredonda para baixo, garantindo um índice inteiro
    const indiceAleatorio = Math.floor(Math.random() * afirmacoes.length);
    return afirmacoes[indiceAleatorio];
}
// ***************************************************

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpa as alternativas anteriores
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function () {
            // Adiciona a afirmação aleatória à história final
            historiaFinal += geraAfirmacao(alternativa.afirmacao) + " ";
            
            atual++; // Avança para a próxima pergunta
            mostraPergunta(); // Mostra a próxima pergunta
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em um futuro próximo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; // Limpa as alternativas
    // Opcional: Esconder a caixa de alternativas se não for mais usada
    // caixaAlternativas.style.display = 'none';
}

// Inicia o quiz
mostraPergunta();
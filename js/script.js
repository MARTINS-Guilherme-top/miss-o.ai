const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



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
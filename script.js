let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Boreal é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    correta      : "Norte",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Austral é o mesmo que...",
    alternativaA : "Oeste",
    alternativaB : "Sul",
    alternativaC : "Norte",
    correta      : "Sul",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Leste",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Norte",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Oeste",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "América",
}
/*Usando CommonJS, crie um módulo que contém funções matemáticas básicas (soma, subtração, multiplicação, divisão) 
e exponenciação.  Em seguida, utilize essas funções em outro arquivo.*/

// mathOperations.js (CommonJS)
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return b !== 0 ? a / b : "Erro: divisão por zero";
}

function exponenciacao(a, b) {
  return a ** b;
}

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  exponenciacao
};
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let maxTentativas = 10;
let acertou = false;

console.log("Questão: Bem-vindo ao jogo de adivinhação!");
console.log("Questão: Tente adivinhar o número entre 1 e 100. Você tem até 10 tentativas.");

while (tentativas < maxTentativas && !acertou) {
  let palpite = Number(prompt("Tentativa " + (tentativas + 1) + ": Digite seu palpite:"));

  // validação antes de contar tentativa
  if (isNaN(palpite)) {
    console.log("Questão: Por favor, digite um número válido.");
    continue; // volta ao início do loop sem contar tentativa
  }
  if (palpite < 1 || palpite > 100) {
    console.log("Questão: O número deve estar entre 1 e 100.");
    continue; // também não conta como tentativa
  }

  tentativas++; // conta tentativa válida

  if (palpite === numeroSecreto) {
    console.log("Questão: Parabéns! Você acertou o número " + numeroSecreto + " em " + tentativas + " tentativa(s)!");
    acertou = true;
  } else if (palpite < numeroSecreto) {
    console.log("Questão: Seu palpite é menor que o número secreto.");
  } else {
    console.log("Questão: Seu palpite é maior que o número secreto.");
  }
}

if (!acertou) {
  console.log("Questão: Suas tentativas acabaram! O número secreto era " + numeroSecreto + ".");
}
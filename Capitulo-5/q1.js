const numero = parseInt(prompt("Digite um número:"));
if (isNaN(numero)) {
  console.log("Por favor, digite um número válido.");
  console.log("Questão 1: Por favor, digite um número válido.");

} else if (numero % 2 === 0) {
  console.log("Questão 1: O número é par.");

} else {
  console.log("Questão 1: O número é ímpar.");
}
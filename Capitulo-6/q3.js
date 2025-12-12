export function calcularMedia(a, b, c) {
  let soma = a + b + c;
  let media = soma / 3;
  console.log("Questão 3: Média:", media.toFixed(2)); 
}
calcularMedia(
  parseFloat(prompt("Questão 3: Digite o primeiro número:")), 
  parseFloat(prompt("Questão 3: Digite o segundo número:")),
  parseFloat(prompt("Questão 3: Digite o terceiro número:"))
);
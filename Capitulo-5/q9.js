const peso = parseFloat(prompt("Digite seu peso (em kg):"));
const altura = parseFloat(prompt("Digite sua altura(em cm):"));
const imc = peso / (altura * altura);

if (imc < 18.5) {
  alert("Questão 9: Magreza");
} else if (imc >= 18.5 && imc < 25) {
  alert("Questão 9: Seu peso está normal");
} else if (imc >= 25 && imc < 30) {
  alert("Questão 9: Acima do peso");
} else {
  alert("Questão 9: Obesidade Mórbida");
}
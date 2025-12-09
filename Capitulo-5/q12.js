let numero = Number(prompt("Digite um número inteiro não negativo:"));
if (numero < 0) {
  console.log("Questão: Fatorial não definido para números negativos.");
} else if (numero === 0 || numero === 1) {
  console.log("Questão: O fatorial de " + numero + " é 1");
} else {
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  console.log("Questão: O fatorial de " + numero + " é " + fatorial);
}
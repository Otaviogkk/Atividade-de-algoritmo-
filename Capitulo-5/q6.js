console.log("\nQuestão 6 - Verificar múltiplos:");
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

if ((num2 !== 0 && num1 % num2 === 0) || (num1 !== 0 && num2 % num1 === 0)) {
  console.log("Questão 6: Pelo menos um dos números é múltiplo do outro.");
} else {
  console.log("Questão 6: Nenhum dos números é múltiplo do outro.");
}

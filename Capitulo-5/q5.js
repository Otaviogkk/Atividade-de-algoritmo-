
console.log("\nConversão de Temperatura:");
let opcao = prompt("Escolha a conversão:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius\n");

if (opcao === "1") {
  let celsius = parseFloat(prompt("Questão 5: Digite a temperatura em Celsius: "));
  let fahrenheit = (celsius * 9 / 5) + 32;
  console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`);
} else if (opcao === "2") {
  let fahrenheit = parseFloat(prompt("Questão 5: Digite a temperatura em Fahrenheit: "));
  let celsius = (fahrenheit - 32) * 5 / 9;
  console.log(`${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`);
} else {
  console.log("Questão 5: Opção inválida.");
}
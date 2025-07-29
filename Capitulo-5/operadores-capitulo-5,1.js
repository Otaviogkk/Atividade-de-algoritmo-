




// Questão 4 e Conversão de Temperatura

const prompt = require('prompt-sync')(); // importa o prompt-sync

// --- Função para verificar maioridade ---
/**
 * Verifica se a pessoa é maior de idade com base na data de nascimento.
 * @param {string} dataNascimento - Data no formato 'AAAA-MM-DD'.
 * @returns {string}
 */
function verificarMaioridade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);

  if (isNaN(nascimento.getTime())) {
    return "Data de nascimento inválida!";
  }

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();
  const mesNascimento = nascimento.getMonth();
  const diaNascimento = nascimento.getDate();

  if (
    mesAtual < mesNascimento ||
    (mesAtual === mesNascimento && diaAtual < diaNascimento)
  ) {
    idade--;
  }

  if (idade >= 18) {
    return "Questão 4: A pessoa é maior de idade.";
  } else {
    return "Questão 4: A pessoa é menor de idade.";
  }
}

// --- Executa a verificação de maioridade ---
const data = prompt("Questão 4: Digite a data de nascimento (AAAA-MM-DD): ");
console.log(verificarMaioridade(data));

// Questão 5
/**
 * Converte temperatura entre Celsius e Fahrenheit.
 * Solicita ao usuário a escolha da conversão e o valor da temperatura.
 *Exibe o resultado da conversão no console.
 */
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

/* Questão 6 - explicação 
Nesta questão, o objetivo é verificar se pelo menos um dos dois números digitados pelo usuário é múltiplo do outro.
Para isso, o programa solicita dois números inteiros ao usuário. 
Em seguida, utiliza o operador de módulo (%) para verificar se o resto da divisão entre eles é igual a zero.
Se num1 dividido por num2 tiver resto zero, significa que num1 é múltiplo de num2.
Se num2 dividido por num1 tiver resto zero, significa que num2 é múltiplo de num1.
Se qualquer uma dessas condições for verdadeira, o programa informa que pelo menos um dos números é múltiplo do outro.
Caso contrário, exibe que nenhum dos números é múltiplo do outro.
*/

console.log("\nQuestão 6 - Verificar múltiplos:");
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

if ((num2 !== 0 && num1 % num2 === 0) || (num1 !== 0 && num2 % num1 === 0)) {
  console.log("Questão 6: Pelo menos um dos números é múltiplo do outro.");
} else {
  console.log("Questão 6: Nenhum dos números é múltiplo do outro.");
}


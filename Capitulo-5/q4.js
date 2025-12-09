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
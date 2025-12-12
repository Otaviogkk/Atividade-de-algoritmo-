/*Crie um módulo que representa um banco de dados de usuários, armazenando informações como nome, e-mail e senha
 de usuários. Utilize uma lista para armazenar os dados privados do usuário e defina funções para adicionar, remover e
  atualizar informações dos usuários. Somente as funções devem ser visíveis por módulos externos. */

  // userDatabase.js
const users = []; // privado

function addUser(nome, email, senha) {
  users.push({ nome, email, senha });
}

function removeUser(email) {
  const index = users.findIndex(u => u.email === email);
  if (index !== -1) users.splice(index, 1);
}

function updateUser(email, novoNome, novaSenha) {
  const user = users.find(u => u.email === email);
  if (user) {
    if (novoNome) user.nome = novoNome;
    if (novaSenha) user.senha = novaSenha;
  }
}

function getUsers() {
  return [...users]; // cópia
}

module.exports = {
  addUser,
  removeUser,
  updateUser,
  getUsers
};
function coletarFilmes() {
  let filmes = [];
  for (let i = 0; i < 5; i++) {
    let filme = prompt("Digite o nome de um filme:");
    filmes.push(filme);
  }
  return filmes;
}
let listaFilmes = coletarFilmes();

console.log("Questão 15 - Filmes com for...of:");
for (let filme of listaFilmes) {
  console.log(filme);
}

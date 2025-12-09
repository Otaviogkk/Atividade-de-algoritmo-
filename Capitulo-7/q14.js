function coletarFilmes() {
  let filmes = [];
  for (let i = 0; i < 5; i++) {
    let filme = prompt("Digite o nome de um filme:");
    filmes.push(filme);
  }
  return filmes;
}
let listaFilmes = coletarFilmes();

console.log("Questão 14 - Filmes com for tradicional:");
for (let i = 0; i < listaFilmes.length; i++) {
  console.log(listaFilmes[i]);
}
function coletarFilmes() {
  let filmes = [];
  for (let i = 0; i < 5; i++) {
    let filme = prompt("Digite o nome de um filme:");
    filmes.push(filme);
  }
  return filmes;
}
let listaFilmes = coletarFilmes();
console.log("Os melhores filmes de todos os tempos:", listaFilmes);

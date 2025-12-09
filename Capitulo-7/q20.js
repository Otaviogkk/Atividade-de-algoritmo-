const pessoas = [
  { nome: "Ana", idade: 28 },
  { nome: "Carlos", idade: 35 },
  { nome: "Beatriz", idade: 17 },
  { nome: "Daniel", idade: 42 },
  { nome: "Juliana", idade: 16 },
  { nome: "Rafael", idade: 30 }
];

const primeiraMaiorDeIdade = pessoas.find(pessoa => pessoa.idade > 18);
console.log(primeiraMaiorDeIdade); 
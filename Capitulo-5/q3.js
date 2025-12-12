export function numero(){
  let numeros = [];
  for (let i = 0; i < 3; i++) {
  let num = prompt("Digite os numero");
   numeros.push(Number(num));
  }
  return numeros;
}
let numeros = numero()
let soma = numeros.reduce((media, valor) => media + valor, 0);
let divisão = soma / 3 
  if (divisão >= 7) {
 console.log("Questão 3: Aprovado");
  } else if (divisão >=7 ) {
 console.log("Questão 3: Recuperação");
  } else {
 console.log("Questão 3: Reprovado");
 }
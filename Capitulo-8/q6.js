/*Escreva um programa em JavaScript que utilize a biblioteca mathjs para calcular o logaritmo de um número 
fornecido pelo usuário.*/

import readline from "readline";
import { log } from "mathjs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número para calcular o logaritmo: ", (valor) => {
  const num = Number(valor);
  console.log("Logaritmo natural:", log(num));
  rl.close();
});
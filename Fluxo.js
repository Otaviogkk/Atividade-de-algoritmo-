/* questao 1 - explicação */
const numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
  console.log("Questão 1: Por favor, digite um número válido.");

} else if (numero % 2 === 0) {
  console.log("Questão 1: O número é par.");

} else {

  console.log("Questão 1: O número é ímpar.");

}


/* questao 7 - explicaçãob */
let a = Number(prompt("Lado 1:"));
let b = Number(prompt("Lado 2:"));
let c = Number(prompt("Lado 3:"));

if (a + b > c && a + c > b && b + c > a) {

  if (a === b && b === c) {

    console.log("Questão 7: Equilátero");

  } else if (a === b || a === c || b === c) {

    console.log("Questão 7: Isósceles");

  } else {

    console.log("Questão 7: Escaleno");

  }
} else {
  console.log("Questão 7: Inválido");
}

/* questao 10 - explicação
a sulitação para utilizao laço while para percorrer um array que começar do número 0 e exibir apenas os números pares.
foi feita a definir os possíveis números positivos dentro do array depois colocação de algumas variáveis para visualização como "Inicio" e "valor",
como uma condição separar-se os numero impares dos pares.*/
let numeros = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valor = "";
let Inicio = 0;
while (Inicio < numeros.length) {
    const par = numeros[Inicio];
    if (par % 2 === 0) {
        valor += par + " ";
    }
    Inicio++;
}
console.log("Questão 10:",valor);

/* questão 11 - explicação

/* questão 12 - explicação
um dia um aluno cansado de calcular fatorial na aulas do professor Wedson, 
solicitou criação de um programa para calcular o fatorial de um número fornecido pelo usuário.
para relizar foi presiso encrotar uma forma de escrever o fatorial de um número dentro do programa,
alguns códigos como readline e question, então foi laço for para calcular o fatorial do número fornecido pelo usuário.
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* Questão 12 - Fatorial
Um dia, um aluno, cansado de calcular fatorial nas aulas do professor Wedson, 
solicitou a criação de um programa para calcular o fatorial de um número fornecido pelo usuário.
Para realizar essa tarefa, foi preciso encontrar uma forma de escrever o cálculo do fatorial dentro do programa.
Alguns comandos, como readline e question, foram utilizados. Em seguida, foi usado um laço for para calcular o fatorial do número fornecido pelo usuário.
*/
function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

/* questão 13 - Jogo de Adivinhação
 Um dia, um aluno viciado, cansado de jogar jogos de adivinhação, decidiu criar o seu próprio jogo de adivinhação de números.
Assim, conseguiu montar uma casa de apostas e acabou ficando rico.

Nesse jogo, ele utilizou um número secreto gerado aleatoriamente entre 0 e 100, usando o comando Math.random().
No entanto, como ficou com pena dos jogadores, decidiu oferecer dicas e algumas chances.
Para isso, utilizou estruturas condicionais para verificar se o palpite do jogador estava correto, ou se era maior ou menor que o número secreto.*/
const numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 0;
const maxTentativas = 10;

function iniciarJogo() {
    console.log("\nJogo de Adivinhação: Descubra o número secreto entre 0 e 100!");

    function perguntarPalpite() {
        if (tentativas < maxTentativas) {
            rl.question(`Tentativa ${tentativas + 1}/${maxTentativas} - Questão 13: Seu palpite: `, (palpite) => {
                const numero = parseInt(palpite);

                if (isNaN(numero)) {
                    console.log("Você tem um cromossomo a menos?.");
                    perguntarPalpite();
                    return;
                }

                tentativas++;

                if (numero === numeroSecreto) {
                    console.log(`Parabéns! seu inutil a certo (${numeroSecreto}) em ${tentativas} tentativas.`);
                    rl.close();
                } else if (tentativas === maxTentativas) {
                    console.log(`você deveria ser matar! O número secreto era ${numeroSecreto}.`);
                    rl.close();
                } else if (numero < numeroSecreto) {
                    console.log("O número secreto é MAIOR.");
                    perguntarPalpite();
                } else {
                    console.log("O número secreto é MENOR.");
                    perguntarPalpite();
                }
            });
        }
    }

    perguntarPalpite();
}

// Fluxo: primeiro fatorial, depois jogo
rl.question("Questão 12: Digite um número para calcular o fatorial: ", (input) => {
    const numero = parseInt(input);
    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, digite um número inteiro positivo.");
        rl.close();
    } else {
        const resultado = calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é: ${resultado}`);
        iniciarJogo(); // chama o jogo após mostrar o fatorial
    }
});

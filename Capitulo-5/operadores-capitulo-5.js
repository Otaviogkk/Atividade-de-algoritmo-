/* grupo:
José otavio luciano Sousa Chagas
Ronalty Hauan
Gabriel de Sousa 
Jadson Carvalho - Burro
Caua Santos - Inuntil
*/

/* questao 1 - explicação */
// Pede ao usuário para digitar um número
// Converte o valor digitado para número inteiro
const numero = parseInt(prompt("Digite um número:"));

// Verifica se o valor digitado nao é um número válido
if (isNaN(numero)) {
  // Caso o usuário tenha digitado algo inválido mostra uma mensagem de erro
  console.log("Por favor, digite um número válido.");
  // Caso o usuário tenha digitado algo inválido mostra uma mensagem de erro
  console.log("Questão 1: Por favor, digite um número válido.");

} else if (numero % 2 === 0) {
  // Se o número for 
  // divisível por 2 sem resto, é par
  console.log("Questão 1: O número é par.");

} else {
  // Se não for par, então é ímpar
  console.log("Questão 1: O número é ímpar.");
}
/* questao 2 - explicação */
//Solicitar os números ao usuário
let num4 = parseFloat(prompt("Digite o primeiro número:")); 
let num5 = parseFloat(prompt("Digite o segundo número:"));
let num6 = parseFloat(prompt("Digite o terceiro número:"));

//  Qual número é o maior
let maior; // Variável para armazenar o maior número

if (num4 > num5 && num4 > num6) {
    maior = num4; // Se num4 for maior que num5 e num6, ele é o maior
} else if (num5 > num4 && num5 > num6) {
    maior = num5; // Se num5 for maior que num4 e num6, ele é o maior
} else {
    maior = num6; // Caso, num6 é o maior
}

// mostra qual o maior
console.log("Questão 2: O maior número é: " + maior); // Exibe o resultado no console
alert("Questão 2: O maior número é: " + maior); // Mostra o resultado em uma janela de alerta



/* questao 3 - explicação */
// ler o primeiro numero usando prompt()
 const entrada1 = prompt('Questão 3: Digite o primeiro número:');
  // Ler o segundo número usando o prompt()
  const entrada2 = prompt('Questão 3: Digite o segundo número:');
 // Ler o terceiro número usando o prompt()
  const entrada3 = prompt('Questão 3: Digite o terceiro número:');

 /* Converte entrada1 para número e armazena na variável num1 */
 const num1 = Number(entrada1);
 /* Converte entrada2 para número e armazena na variável num2 */
  const num2 = Number(entrada2);
  /* Converte entrada3 para número e armazena na variável num3 */

 
  const num3 = Number(entrada3);
 
  // Calcula a média e armazena na variável média
  const media = (num1 + num2 + num3) / 3;
 
  // Validar a média e exibir a mensagem correspondente
  if (media >= 7) {

 console.log("Questão 3: Aprovado");
  } else if (media >=7 ) {

 console.log("Questão 3: Recuperação");
  } else {

 console.log("Questão 3: Reprovado");
  }





/* questao 7 - explicação */
// Pede ao usuário para digitar o valor dos três lados do triângulo
let a = Number(prompt("Lado 1:"));
let b = Number(prompt("Lado 2:"));
let c = Number(prompt("Lado 3:"));

// Verifica se os três lados podem formar um triângulo válido
// a soma de dois lados deve ser maior que o terceiro
if (a + b > c && a + c > b && b + c > a) {

  // Se todos os lados forem iguais = Equilátero
  if (a === b && b === c) {
    console.log("Questão 7: Equilátero");

  // Se apenas dois lados forem iguais = Isósceles
  } else if (a === b || a === c || b === c) {
    console.log("Questão 7: Isósceles");

  // Se todos os lados forem diferentes = Escaleno
  } else {
    console.log("Questão 7: Escaleno");
  }

} else {
  // Se os lados não formarem um triângulo válido
  console.log("Questão 7: Inválido");
}
/* questao 8 - explicação*/
//pede ao usuario para digitar o nome de um prato

let prato = prompt("Questão 8: escolha pizza, hamburguer, salada ou macarrao"). toLowerCase ();

//switch verifica o prato que foi escolhido
switch (prato) { 
    case "pizza" :
        // se escolher pizza mostra essas informaçoes
        console.log("Questão 8: pizza - RS$25 - Mussarela com borda");
        break;

    case "hamburguer" :
        //se escolher hamburguer mostra isso
        console.log("Questão 8: hamburguer - RS$20 - artesabal com fritas");
        break;

        case "salada" : 
        //se escolher salada mostra isso
        console.log("Questão 8: salada - RS$15 - fresca com legumes");
        break;

        case "macarrao" : 
        // se escolher macarrao mostra isso
        console.log("Questão 8: macarrao - RS$18 - com molho");
        break;

    default:
        console.log("Questão 8: prato invalido");
}

/*questao 9 - explicação
*/

  function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Corrigido o if: faltavam operadores lógicos e parênteses
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
      return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade grau I";
    } else if (imc < 39.9) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III (obesidade mórbida)";
    }

    // Corrigido o uso de template string com backticks (`) para interpolar variáveis
    document.getElementById("Questão 9:resultado").innerHTML =
      `Seu IMC é: <strong>${imc.toFixed(2)}</strong><br>Classificação: <strong>${classificacao}</strong>`;
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

/* questão 11 - explicação */





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

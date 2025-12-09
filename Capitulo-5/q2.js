let num4 = parseFloat(prompt("Digite o primeiro número:")); 
let num5 = parseFloat(prompt("Digite o segundo número:"));
let num6 = parseFloat(prompt("Digite o terceiro número:"));
let maior; 
if (num4 > num5 && num4 > num6) {
    maior = num4; 
} else if (num5 > num4 && num5 > num6) {
    maior = num5; 
} else {
    maior = num6; 
}
console.log("Questão 2: O maior número é: " + maior);
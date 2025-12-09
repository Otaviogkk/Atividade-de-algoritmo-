let numeros1 = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valor1 = "";
let Inicio1 = 0;
while (Inicio1 < numeros1.length) {
    const impares = numeros1[Inicio1];
    if (impares % 2 !== 0) {
        valor1 += impares + " ";
    }
    Inicio1++;
}
console.log("Questão 11:",valor1);

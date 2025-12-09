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

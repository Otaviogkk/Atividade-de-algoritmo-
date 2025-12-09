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
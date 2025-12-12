

const numero_2 = () => 
  console.log(`Questão 9.2: O número é ${parseInt(prompt("Questão 9.2: Digite um número: ")) % 2 === 0 ? "par" : "ímpar"}.`);
numero_2();

export const calcularMedia2 = (a, b, c) => ((a + b + c) / 3).toFixed(3);

export const media = calcularMedia2(
  parseFloat(prompt("Questão 9.3: Digite o primeiro número:")),
  parseFloat(prompt("Questão 9.3: Digite o segundo número:")),
  parseFloat(prompt("Questão 9.3: Digite o terceiro número:"))
);
console.log("Questão 9.3: Média:", media);

export const mensagem = () => {
  console.log("Questão 9.4: Olá, mundo!");
};
mensagem();

export const media3_1 = (a, b, c) => {
  let m = (a + b + c) / 3;
  console.log("Questão 9.5: Média dos três números:", m);
}

export const quadrado_2 = (numero) => numero * numero;
console.log("Questão 9.6: O quadrado de", 5, "é", quadrado_2(5));

let g = "Sou Global";
const teste_2 = () => {
  let l = "Sou Local";
  console.log("Questão 9.7: Dentro da função:", g, l);
};
teste_2();
console.log("Questão 9.7: Fora da função:", g);

const bloco_2 = () => { 
  if (true) {
    let x = "Sou do bloco"; 
    console.log("Questão 9.8:", x);
  }
}
bloco_2();

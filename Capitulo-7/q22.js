export function imprimirPrimeiroEUltimoNome(nomeCompleto) {
    let partesDoNome = nomeCompleto.split(' ');
    let primeiroNome = partesDoNome[0];
    let ultimoNome = partesDoNome[partesDoNome.length - 1];
    console.log("Primeiro Nome:", primeiroNome);
    console.log("Último Nome:", ultimoNome);
}
imprimirPrimeiroEUltimoNome("Ana Maria da Silva");
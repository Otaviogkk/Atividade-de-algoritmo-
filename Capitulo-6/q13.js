export function calcularIMCs(pessoas) {
    console.log("=== QUESTÃO 13 - CALCULADORA DE IMC ===");
    console.log("Dados das pessoas:", pessoas);
    
    const calcularIMC = (peso, altura) => peso / (altura * altura);
    
    const classificarIMC = (imc) => {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc < 24.9) return "Peso normal";
        if (imc < 29.9) return "Sobrepeso";
        return "Obesidade";
    };
    
    const resultados = pessoas.map((pessoa, index) => {
        const imc = calcularIMC(pessoa.peso, pessoa.altura);
        const classificacao = classificarIMC(imc);
        
        console.log(`Pessoa ${index + 1}: ${pessoa.peso}kg, ${pessoa.altura}m`);
        console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
        
        return {
            ...pessoa,
            imc: parseFloat(imc.toFixed(2)),
            classificacao
        };
    });
    
    return {
        pessoas: resultados
    };
}
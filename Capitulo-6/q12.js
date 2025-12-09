export function executarConversorMoeda(valoresReais, taxaCambio) {
    console.log("=== QUESTÃO 12 - CONVERSOR DE MOEDA ===");
    console.log("Valores em Reais:", valoresReais);
    console.log("Taxa de câmbio:", taxaCambio);
    
    const conversoes = valoresReais.map(valor => {
        const valorDolar = valor / taxaCambio;
        
        console.log(`R$ ${valor.toFixed(2)} = US$ ${valorDolar.toFixed(2)}`);
        
        return {
            reais: valor,
            dolares: parseFloat(valorDolar.toFixed(2)),
            taxa: taxaCambio
        };
    });
    
    return {
        conversoes
    };
}
export function calcularMediaDoisNumeros(paresDeNumeros) {
    console.log("=== QUESTÃO 10 - MÉDIA DE DOIS NÚMEROS ===");
    console.log("Pares de números:", paresDeNumeros);
    
    const resultados = paresDeNumeros.map((par, index) => {
        const [n1, n2] = par;
        const media = (n1 + n2) / 2;
        
        console.log(`Par ${index + 1}: (${n1} + ${n2}) ÷ 2 = ${media.toFixed(2)}`);
        
        return {
            par: [n1, n2],
            media: parseFloat(media.toFixed(2))
        };
    });
    
    return {
        pares: paresDeNumeros,
        medias: resultados
    };
}
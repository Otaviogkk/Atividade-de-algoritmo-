export function executarJogoAdivinhacao(palpites) {
    console.log("=== QUESTÃO 14 - JOGO DA ADIVINHAÇÃO ===");
    console.log("Palpites:", palpites);
    
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let pontos = 100;
    let acertou = false;
    const historico = [];
    
    console.log("Número secreto gerado");
    console.log("Pontuação inicial: 100 pontos");
    
    for (let tentativa = 0; tentativa < palpites.length && !acertou && pontos > 0; tentativa++) {
        const palpite = palpites[tentativa];
        
        console.log(`Tentativa ${tentativa + 1}: ${palpite}`);
        
        if (palpite === numeroSecreto) {
            acertou = true;
            historico.push({ tentativa: tentativa + 1, palpite, resultado: "ACERTOU", pontos });
            console.log("ACERTOU!");
            console.log(`Pontuação final: ${pontos}`);
        } else {
            pontos -= 10;
            const dica = palpite < numeroSecreto ? "MAIOR" : "MENOR";
            historico.push({ tentativa: tentativa + 1, palpite, resultado: "ERROU", dica, pontos });
            console.log(`ERROU! Dica: número é ${dica}`);
            console.log(`Pontuação: ${pontos}`);
        }
    }
    
    if (!acertou) {
        console.log("GAME OVER!");
        console.log(`Número secreto: ${numeroSecreto}`);
    }
    
    return {
        numeroSecreto,
        acertou,
        pontuacaoFinal: acertou ? pontos : 0,
        historico
    };
}
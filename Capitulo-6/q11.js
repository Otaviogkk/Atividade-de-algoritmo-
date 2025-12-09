export function executarCalculadora(operacoes) {
    console.log("=== QUESTÃO 11 - CALCULADORA ===");
    console.log("Operações:", operacoes);
    
    // Funções reais de operação
    const adicao = (a, b) => a + b;
    const subtracao = (a, b) => a - b;
    const multiplicacao = (a, b) => a * b;
    const divisao = (a, b) => {
        if (b === 0) return "Erro: divisão por zero!";
        return a / b;
    };
    
    const resultados = operacoes.map((operacao, index) => {
        const { n1, n2, op } = operacao;
        let resultado;
        let operacaoNome;
        
        switch(op) {
            case "+":
                resultado = adicao(n1, n2);
                operacaoNome = "adição";
                break;
            case "-":
                resultado = subtracao(n1, n2);
                operacaoNome = "subtração";
                break;
            case "*":
                resultado = multiplicacao(n1, n2);
                operacaoNome = "multiplicação";
                break;
            case "/":
                resultado = divisao(n1, n2);
                operacaoNome = "divisão";
                break;
            default:
                resultado = "Operação inválida";
                operacaoNome = "inválida";
        }
        
        console.log(`${n1} ${op} ${n2} = ${resultado}`);
        
        return {
            ...operacao,
            resultado,
            operacaoNome
        };
    });
    
    return {
        operacoes: resultados
    };
}
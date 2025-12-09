let prato = prompt("Questão 8: escolha pizza, hamburguer, salada ou macarrao"). toLowerCase ();
switch (prato) { 
    case "pizza" :
        console.log("Questão 8: pizza - RS$25 - Mussarela com borda");
        break;
    case "hamburguer" :
        console.log("Questão 8: hamburguer - RS$20 - artesabal com fritas");
        break;
    case "salada" : 
        console.log("Questão 8: salada - RS$15 - fresca com legumes");
        break;
    case "macarrao" : 
        console.log("Questão 8: macarrao - RS$18 - com molho");
        break;
    default:
        console.log("Questão 8: prato invalido");
}

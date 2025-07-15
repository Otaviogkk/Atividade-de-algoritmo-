/* grupo:
José otavio luciano Sousa Chagas
Ronalty Hauan
Gabriel de Sousa 
Jadson Carvalho
Caua Santos

/* questão 1. aqui soma 25 + 17 usando o operador "+"*/
console.log("questão 1:",25 + 17);

/*questão 2. O código faz a subtração de 100 a partir de 250, resultando em 150. 
Esse valor é armazenado na variável subtracao e exibido com console.log.essa e a 2*/ 
let subtração = 250 - 100;
console.log("questão 2:",subtração);

/*questão 3. a Multiplica 9 por 6*/
let numero1 =  9;
let numero2 = 6;
let multipli = numero1 * numero2; 
console.log("questão 3:",multipli);

/*questao 4. aqui pra dividir usa o operador "/" */
console.log("questão 4:",144 / 12);

/*questão 5. O operador % calcula o resto da divisão de 55 por 6. Como 6 cabe 9 vezes em 55 (6×9 = 54), 
sobra 1. Esse valor é armazenado na variável restodadivisao e exibido no console.*/  
let Restodivisao=55%6;
console.log("questão 5:",Restodivisao);

/*questao 6,  A variavel x começa com 10, e o operador ++ adiciona 1 */
let x = 10;
x++;
console.log("questão 6:", x);

/*questão 7. Criamos y com 5 e diminuímos duas vezes, então y fica 3*/
let circo = 5;
circo--;
circo--;
console.log("questão 7:",circo);

/*questão 8. SO código multiplica 12 por 2 usando o operador *. 
O resultado da operação é 24, que é armazenado na variável multiplicacao e exibido com console.log. */
const questao8 = (10 + 5 - 3) * 2;
console.log("questão 8:",questao8);

/*questão 9.  A media é calculada pela soma e depois dividida por 3 */ 
let media = (8 + 7.5 +10) / 3;
console.log("questão 9:",media);

/*questão 10. Criei duas variáveis a e b usando o comando let e atribuí a elas os valores 20 e 5, ficando: let a = 20 e let b = 5. Depois, 
usei atribuição com adição para somar as duas variáveis.Para chegar ao resultado final, usei atribuição com multiplicação por 2 no resultado da soma.*/ 
let a = 20;
let b = 5;
a += b; 
a *= 2; 
console.log("questão 10:","a =",a,"b =",b);

/*questão 11, Retorna true se 10 for realmente maior que 7 */ 
let resultado = 10 > 7;
console.log("questão 11:",resultado);

/*questão 12. Verificamos se 5 é menor ou igual a 3, o que é falso */
const igualdade3 = 5 <= 3;
console.log("questão 12:",igualdade3);

/*questão 13, a vera um compração com diferetes tipos de iguals algums mais regitos em outros menos */
let numero3 = 7;
let numero4 = "7";
console.log("questão 13:","com ==",numero3 == numero4,"com ===",numero3 === numero4);

/*questão 14, no primero caso é True por ser number é diferente de string já sengundo é False por 10 é igual a 10)
 */ 
let operação1 = 10 !== "10";
let operação2 = 10 != "10";
console.log("questão 14," ,operação1 ,operação2 );

/*questão 15, Ambas as comparações ser tornarão verdadeiras*/

let variavei1 = (5 > 3);
let variavei2 = (8 < 10);
let combinacao = variavei1 && variavei2;
console.log("questão 15:",combinacao);

/*questão 16, A primeira parte é falsa, mas a segunda é verdadeira, então o resultado é true*/
const resultado16 = (5 < 3) || (8 === 8);
console.log("questão 16:",resultado16);

/*questão 17, 7 é maior que 2, mas negamos isso, então dá false*/
const resultado17 = !(7 > 2);
console.log("questão 17:",resultado17);

/*questão 18, a uma difereçã de resutado sendo soma2 é 14 e soma3 sendo 10  */

let soma2 = (4 + 3) * 2;
let soma3 = 4 + 3 * 2;
console.log("questão 18:",soma2 == soma3);

/*questão 19,O código define a base 2 e o expoente 4, e usa o operador ** para calcular a potência. O resultado de 2 ** 4 é 16, 
pois 2 × 2 × 2 × 2 = 16. O console.log(16) apenas exibe esse valor. */
let base =2; 
let expoente= 4;
let resultado1 = base**expoente; 
console.log("questão 19:",resultado);

/*questão 20,Calculamos ((10+2)/2)² e somamos com 4 mais 3 vezes 2, resultando em 46*/
const resultado20 = ((10 + 2) / 2) ** 2 + 4 + 3 * 2;
console.log("questão 20:",resultado20);


/*questão 21, Retorna true se as comparaçoes forem iguais, usando o operador === */ 

let resultado3 = (4 + 4) === (2 * 4);
console.log("questão 21:",resultado3);


/*questão 22, Para montar uma expressão com tres variáveis que resulte em false, primeiro criamos number1, number2, number3 
conforme as condições desejadas; depois igulamos number1 == number2 e juntamos com number3, que originalmente era true, transformando-o em false;*/
let number1 = (9<12);
let number2 = !(5)
let number3 = 8 == 10;
let igualdade = number1 == number2 && number3;  
console.log("questão 22:",igualdade);

/*questão 23, Para montar uma expressão com quatro variáveis que resulte em true, primeiro criamos number4, number5, number6 e number7 
conforme as condições desejadas; depois negamos o grupo (number4 == number5) || number6, que originalmente era false, transformando-o em true; 
por fim, comparamos esse resultado a !!number7 (também true) usando ==, de modo que toda a expressão retorne true.*/
let number4 = (9 < 12);
let number5 = !(5)
let number6 = 8 == 10;
let number7 = !(5) || 10;
let igualdade2 = !((number4 == number5) || number6) == !!number7;  
console.log("questão 23:",igualdade2);

/*questão 24, Elevamos 2 ao quadrado, multiplicamos por 3 e somamos 5, dando 17 */
const resultado24 = 5 + 3 * 2 ** 2;
console.log("questão 24:",resultado24)

/*questão 25. Criei uma variáveis r usando o comando let e atribuí a ela o valor 3, ficando: let r = 3;. Depois, 
usei atribuição com adição para somar a 2x4. Para chegar ao resultado final, usei atribuição com divisão por 2 no resultado da soma. */
let r = 3;
r += 2*4;
r /= 2;
console.log("questão 25:",r);

/*questão 26. nos colocar as "" para cria um espaço entre as palavras  */
let nome = "Ana";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;
console.log("questão 26:",nomeCompleto)

/*questão 27. "5" + 5 vira "55" como string, e == compara com coerção de tipo, então "55" == 55 é true*/
let equação = ("5" + 5) 
let numero6 = 55;
console.log("questão 27:",equação == numero6) 

/* Questão 28, sera false pois uma declaração só pode ser verdadeira caso ambas as afirmações também sejam */
let true_false = true && false || true;
console.log("questão 28:",true_false);

/*questão 29. O cálculo 3 + 2 = 5 é maior que 4, resultando em verdadeiro. 
A comparação 10 !== "10" também é verdadeira, já que os tipos são diferentes, mesmo que os valores sejam iguais.*/ 
let soma = 10 + 5;
let comparacao1 = soma > 12;
let subtracao = 8 - 3;
let comparacao2 = subtracao == 5;
let multiplicacao = 4 * 2;
let comparacao3 = multiplicacao < 10;
let negacao = !comparacao3;
let resultado2 = (comparacao1 && comparacao2) || negacao;

console.log("questão 29:",resultado2);

/*questão 30, negação quando é negado tem valor positivo, sendo assim, a afirmação é verdadeira */
let resultado4 = (10 + 5 * 2) > (30 / 2) && !false;
console.log("questão 30:",resultado4);

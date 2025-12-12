/* 
Escreva um programa em JavaScript que utilize a biblioteca convert 
para converter dias em minutos e gigabytes em bytes 
*/

import convert from "convert-units";

const dias = 3;
const gb = 5;

console.log(`${dias} dias = ${convert(dias).from("day").to("min")} minutos`);
console.log(`${gb} GB = ${convert(gb).from("GB").to("B")} bytes`);

const leia = require('readline-sync');

let a;
let b;
let c;
let d;

a = leia.questionFloat("Digite o salário bruto: ");
b = leia.questionFloat("Digite o adicional noturno: ");
c = leia.questionFloat("Digite as horas extras: ");
d = leia.questionFloat("Digite os descontos: ");
console.log("O Salário líquido é: "+ (a + b + (c * 5) - d).toFixed(2))

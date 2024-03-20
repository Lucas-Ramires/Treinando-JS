const leia = require('readline-sync');

let salario;
let abono; 

salario = leia.questionFloat("Digite seu salário: ");
abono = leia.questionFloat("Digite o abono: ");

console.log("Seu salário atual é: " ,(salario+abono).toFixed(2));
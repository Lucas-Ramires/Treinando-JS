const leia = require('readline-sync');

let numero1,numero2,operacao,resultado;

numero1 = leia.questionFloat("Digite o primeiro valor: ");
numero2 = leia.questionFloat("Digite o segundo valor: ");

console.log("\n");
console.log("1 - Soma");
console.log("2 - Subtracao");
console.log("3 - Multiplicacao");
console.log("4 - Divisao");
console.log("\n");

operacao = leia.questionInt("Digite o numero correspondente a operacao mmatematica: ")

switch(operacao){
    case 1:
        resultado = numero1 + numero2
        console.log(resultado.toFixed(1))
        break
    case 2:
        resultado = numero1 - numero2
        console.log(resultado.toFixed(1));
        break
    case 3:
        resultado = numero1*numero2
        console.log(resultado.toFixed(1));
        break
    case 4:
        resultado = numero1/numero2
        console.log(resultado.toFixed(1));
        break
        default:
            console.log("Operacao Invalida");            
}


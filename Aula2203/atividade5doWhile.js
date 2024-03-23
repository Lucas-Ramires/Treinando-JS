const leia = require('readline-sync');

let numeroInt,soma = 0;

do {
    numeroInt = leia.questionInt("Digite um numero para continuar e 0 para sair: ");

    if (numeroInt > 0) {
        soma += numeroInt
    }


} while (numeroInt !== 0);
console.log(`A soma dos numeros positivos e: ${soma}`);

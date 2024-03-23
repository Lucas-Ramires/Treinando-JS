const leia = require('readline-sync');

let numeroos,mediaMult,somaa = 0,contador = 0;

do{
    numeroos = leia.questionInt("Digite um numero para continuar e 0 para sair: ");
    if (numeroos !== 0 && numeroos % 3 === 0){
    somaa +=numeroos;
    contador++
    }
}while(numeroos !== 0)
    if(contador !== 0){
        mediaMult = somaa / contador;
        console.log(`A media dos numeros multiplos de 3 e: ${mediaMult.toFixed(2)}`);
    }else{
        console.log("Nenhum numero digitado e multiplo de 3");
    }
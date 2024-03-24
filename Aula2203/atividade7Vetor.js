const leia = require('readline-sync');

let vetorTeste = Array(10);
let pergunta;

for (let indice = 0; indice < vetorTeste.length; indice++) {
    vetorTeste[indice] = leia.questionInt("Digite um numero: ");
}

pergunta = leia.questionInt("Digite o numero que voce deseja encontrar: ");

let encontrado = false;
let posicao = -1;

for (let indice = 0; indice < vetorTeste.length; indice++) {
    if (pergunta === vetorTeste[indice]) {
        encontrado = true;
        posicao = indice;
    }
}
if (encontrado) {
    console.log(` ${pergunta} esta na posicao ${posicao}`);
} else {
    console.log(`${pergunta} nao foi encontrado`);
}

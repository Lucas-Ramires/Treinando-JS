const leia = require('readline-sync');

let idade, menorIdade = 0, maiorIdade = 0, pergunta, pergunta2;
pergunta = leia.question("Digite 'Sim' para adicionar uma idade: ");
while (pergunta === "Sim") {
    idade = leia.questionInt("Digite uma idade: ");
    if (idade < 21) {
        menorIdade++
    } else if (idade > 50) {
        maiorIdade++
    } else {
        ("Digite uma idade de entre 1 a 21 ou 50 para cima. ")
    }
    pergunta2 = leia.question("Deseja continuar ? ");
    if (pergunta2 === "Nao") {
        break;
    }
}
console.log("Total de Pessoas Menores de  21 anos de idade ", menorIdade);
console.log("Total de Pessoas Maiores de 50 anos maiorIdade ", maiorIdade); 




const leia = require('readline-sync');

let y;
let nome;
let doacao;

nome = leia.question("Digite seu nome: ");
y = leia.questionInt("Digite sua idade: ");
doacao = leia.keyInYN("E sua primeira doacao de sangue ? y para sim e n para nao: ")
if(y >= 18 && y <= 59){
    console.log(nome + " esta apto para doar sangue!");
}else if (y >= 60 && y <=69 && doacao == true){
    console.log(nome + " esta apto para doar");
}else if(y >= 60 && y <=69 && doacao == false){
    console.log(nome + "não está apto para doar");
}else {
    console.log("Não esta apto para doar");
}
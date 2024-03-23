const leia = require('readline-sync');

let fa,fe;

fa = leia.questionInt("Digite um valor: ");
fe = leia.questionInt("Digite um valor maior que o primeiro valor: ");

if (fa >= fe){
    console.log("Intervalo inválido")
}else{
console.log("Números múltiplos de 3 e 5 no intervalo ", fa,"e", fe);
for (let i = fa; i <= fe; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log (i, "É multiplo de 3 e 5");
        }      
    }
}
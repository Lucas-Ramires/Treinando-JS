const leia = require('readline-sync');

let a, b, c;

a = leia.questionInt("Digite o primeiro valor: ");
b = leia.questionInt("Digite o segundo valor: ");
c = leia.questionInt("Digite o terceiro valor: ");

if(a + b > c){
    console.log("A Soma de A + B é maior que C");
}else if(a + b < c){
    console.log("A Soma de A + B é menor que C");
}else{
    console.log("A + B é igual a c");
}

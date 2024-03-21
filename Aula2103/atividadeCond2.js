const leia = require('readline-sync');

let x;


x = leia.questionInt("\nDigite um numero: ")

if(x > 0 && x % 2 == 0){
    console.log(x + " É Par e positivo");
}else if (x < 0 && x % 2 == 0){
    console.log (x + " É Par e negativo");
}else if (x > 0 && x % 2 == 1 ){
    console.log(x + " É Ímpar e positivo");
}else{
    console.log(x + " É Ímpar e negativo");
}

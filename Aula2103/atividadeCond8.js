const leia = require('readline-sync');

let operacone,saldo,depositado,results,sacado;
saldo = leia.questionFloat("Digite seu saldo: ")
operacone = leia.questionInt("Digite 1 para saber o saldo, Digite 2 para sacar, 3 para depositar: ");

switch(operacone){
    case 1:
        results = saldo
        console.log("Seu saldo é: " + results.toFixed(2));
        break
    case 2:
        sacado = leia.questionFloat("Digite quando deseja sacar: ");
        if (sacado > saldo){
            console.log(" Operacao-Saque","\n","Saldo Insuficiente!")
        }else if(sacado < saldo){
                results = saldo - sacado
                console.log(" Operacao-Saque","\n","Novo Saldo: ", results.toFixed(2))
            }else{
                results = 0
                console.log(" Operacao-Saque","\n","Novo Saldo: ", results.toFixed(2))
            }
        break
        case 3:
            depositado = leia.questionFloat("Digite o valor a ser Depositado: ");
            results = depositado + saldo
            console.log(" Operacao - Deposito","\n","Novo Saldo: ", results.toFixed(2))
            break
        default:
            console.log(" Operacao Invalida!");    
}
const leia = require('readline-sync');

let h, inte, salarioo, novoSalario, reajuste;

h = leia.question("Digite seu nome: ");
console.log("Codigo do Cargo: ", "\n");
console.log("1 - Gerente, Percencentual do Reajuste 10%");
console.log("2 - Vendedor, Percencentual do Reajuste 7%");
console.log("3 - Supervisor, Percencentual do Reajuste 9%");
console.log("4 - Motorista, Percencentual do Reajuste 6%");
console.log("5 - Estoquista, Percencentual do Reajuste 5%");
console.log("6 - Tecnico de Ti, Percencentual do Reajuste 8%","\n");
inte = leia.questionInt("Digite o codigo do cargo do colaborador: ");
salarioo = leia.questionFloat("Digite seu salario: ");

 
switch(inte){
    case 1:
        novoSalario = salarioo + (salarioo * (10/100));
        console.log("\n Nome do Colaborador: ",h, "\n","Cargo: Gerente","\n",novoSalario.toFixed(2));
        break       
    case 2:
        novoSalario = salarioo + (salarioo * (7/100));
        console.log("\n Nome do Colaborador: ",h, "\n","Cargo: Vendedor","\n",novoSalario.toFixed(2));
        break       
    case 3:
        novoSalario = salarioo + (salarioo * (9/100));
        console.log("\n Nome do Colaborador: ",h, "\n","Cargo: Supervisor","\n",novoSalario.toFixed(2));
        break       
    case 4:
        novoSalario = salarioo + (salarioo * (6/100));
        console.log("\n Nome do Colaborador: ",h, "\n","Cargo: Motorista","\n",novoSalario.toFixed(2));
        break       
    case 5:
        novoSalario = salarioo + (salarioo * (5/100));
        console.log("\n Nome do Colaborador: ",h, "\n","Cargo: Estoquista","\n",novoSalario.toFixed(2));
        break       
    case 6:
        novoSalario = salarioo + (salarioo * (8/100));
        console.log("\n Nome do Colaborador: ",h, "\n","Cargo: Tecnico de Ti","\n",novoSalario.toFixed(2));
        break       
        
    default:
        console.log ("Digite um numero válido! ")     
}
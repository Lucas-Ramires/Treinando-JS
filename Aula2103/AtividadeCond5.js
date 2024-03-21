const leia = require('readline-sync');

let z;
let quantidade;
let total;
let produto;

console.log("1 - Cachorro-Quente  10 RS")
console.log("2 - X-Salada  15 RS")
console.log("3 - X-Bacon  18 RS")
console.log("4 - Bauru 12 RS")
console.log("5 - Refrigerante 8 RS")
console.log("6 - Suco de Laranja 13 RS")
z = leia.questionInt("\nDigite o codigo do produto: ")

switch(z){
    case 1:
        quantidade = leia.questionInt("Deseja Quantos Cachorros-Quentes ? ")
        total = quantidade * 10
        console.log("\nProduto: Cachorro-Quente","\n" + "Valor total: ", total)
        break
    case 2:
        quantidade = leia.questionInt("Deseja Quantos X-Saladas ? ")
        total = quantidade * 15
        console.log("\nProduto: X-Salada","\n" + "Valor total: ", total)
        break 
    case 3:  
        quantidade = leia.questionInt("Deseja Quantos X-Bacon ? ")
        total = quantidade * 18
        console.log("\nProduto: X-Bacon","\n" + "Valor total: ", total)
        break 
    case 4:
        quantidade = leia.questionInt("Deseja Quantos Baurus ? ")
        total = quantidade * 12
        console.log("\nProduto: Bauru","\n" + "Valor total: ", total)
        break 
    case 5:
        quantidade = leia.questionInt("Deseja Quantos Refrigerantes ? ")
        total = quantidade * 8
        console.log("\nProduto: Refrigerante","\n" + "Valor total: ", total)
        break         
    case 6:
        quantidade = leia.questionInt("Deseja Quantos Sucos de laranja ? ")
        total = quantidade * 13
        console.log("\nProduto: Suco de Laranja","\n" + "Valor total: ", total)
        break 
    default:
        console.log("Digite um numero valido")
}
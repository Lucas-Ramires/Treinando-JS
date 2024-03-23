const leia = require('readline-sync');

let par = 0,impar = 0;

for (let i = 1; i<=10; i++){
    valores = leia.questionInt(`Digite o ${i} valor: `);

    if (valores % 2 === 0){
      par++;
   }else{
      impar++;
 }
}
 console.log(`Tem ${impar} Impares e tem ${par} Pares`);

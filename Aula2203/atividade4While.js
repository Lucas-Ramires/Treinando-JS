const leia = require('readline-sync');

let continua = "S",id,gen,categ;
let back = 0, front = 0, mobile = 0,full = 0,total = 0, somaIdade = 0, media = 0.0;

while(continua === "S"){
    id = leia.questionInt("Digite sua idade: ")
    gen = leia.questionInt("Digite o Genero(1-MC/2-HC/3-NB/4-MT/5-HT/6-Outros: ")
    categ = leia.questionInt("Digite a Categoria(1-Back/2-Front/3-Mobile/4-FS: ")

   
    if (categ === 1)
        back++
    if(categ === 2 && (gen === 1 || gen === 4))
        front++
    if(categ === 3 && (gen === 1 || gen === 5) && id > 40)
        mobile++
    if(categ === 4 && gen === 3 && id < 40)
        full++
    total +=1;
    somaIdade += id;
    media = somaIdade/total;

        continua = leia.question("Deseja continuar (S/N)").toUpperCase()
}
console.log("Total de pessoas desenvolvedoras Backend: " + back);
console.log("Total de mulheres devs Frontend: " + front);
console.log("Total de homens devs mobile maiores de 40 anos: " + mobile);
console.log("Total de pessoas not binary devs FullStack menores de 30 anos: " + back);
console.log("Total de pessoas que responderam a pesquisa: " + total);
console.log("Media de idade das pessoas que responderam a pesquisa: " + media.toExponential(2));




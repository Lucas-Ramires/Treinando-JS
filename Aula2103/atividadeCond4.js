const leia = require('readline-sync');

let grupo;
let tipodeAnimal;
let alimentacao;

grupo = leia.question("Digite se o animal e Vertebrado ou Invertebrado: ");
tipodeAnimal = leia.question("Digite se e Ave, Mamifero, Inseto ou Anelideo: ");
alimentacao = leia.question("Digite se e Carnivoro,Onivoro,Herbivoro ou Hematofago: ");

if(grupo === "Vertebrado" && tipodeAnimal === "Ave" && alimentacao === "Carnivoro"){
    console.log("Aguia")
}else if(grupo === "Vertebrado" && tipodeAnimal === "Ave" && alimentacao === "Onivoro"){
    console.log("Pomba")
}else if(grupo === "Vertebrado" && tipodeAnimal === "Mamifero" && alimentacao === "Onivoro"){
    console.log("Homem")
}else if(grupo === "Vertebrado" && tipodeAnimal === "Mamifero" && alimentacao === "Herbivoro"){
    console.log("Vaca")
}else if(grupo === "Invertebrado" && tipodeAnimal === "Inseto" && alimentacao === "Hematofago"){
    console.log("Pulga")
}else if(grupo === "Invertebrado" && tipodeAnimal === "Inseto" && alimentacao === "Herbivoro"){
    console.log("Largata")
}else if(grupo === "Invertebrado" && tipodeAnimal === "Anelideo" && alimentacao === "Hematofago"){
    console.log("Sanguessuga")
}else if(grupo === "Invertebrado" && tipodeAnimal === "Anelideo" && alimentacao === "Onivoro"){
    console.log("Minhoca")
}else{
    console.log("Preste atenção nas letras Maiusculas");
}
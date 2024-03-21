const leia = require('readline-sync');

let grupo;
let tipodeAnimal;
let alimentacao;

grupo = leia.question("Digite se o animal e Vertebrado ou Invertebrado: ");
tipodeAnimal = leia.question("Digite se e Ave, Mamifero, Inseto ou Anelideo: ");
alimentacao = leia.question("Digite se e Carnivoro,Onivoro,Herbivoro ou Hematofago: ");

if(grupo === Vertebrado){
    if(tipodeAnimal === "Ave"){
        if(alimentacao === "Carnivoro"){
            console.log("Águia");
        }else{
            console.log("Pomba");
        }
    }else{
        if(alimentacao === "Herbivoro"){
            console.log("Vaca");
        }else{
            console.log("homem")
        }
    }
}else {
    if(grupo === Invertebrado){
        if(tipodeAnimal === "Inseto"){
            if(alimentacao === "Herbivoro"){
                console.log("Pulga");
            }else{
                console.log("Largata");
            }
        }else{
            if(alimentacao === "Onivoro"){
                console.log("Minhoca");
            }else{
                console.log("Sanguessuga")
            }
        }
    }
}
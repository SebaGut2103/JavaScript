//Creacion de un array
let frutas = ["manzana", "pera", "uva", "fresa", "mango"];

//Creacion como instancia de objeto
let camper = new Array("Jinder", "Marlon", "Jose", "Nicolas");

let salas = new Array(3)

salas[0] = "Sputnik"

console.log(salas[0]);


//Recorrido un Arrya por POSICIONES

for(let i=0; i < frutas.lengt; i++){
    console.log(frutas[i]);
}

console.log("=".repeat(40) + "|")

//Recorrido por elementos
for(fruta of frutas){
    console.log(fruta);
}
console.log("=".repeat(40) + " For Each");

frutas.forEach((f)=> console.log(f + " criolla"));

console.log("=".repeat(40) + " LAMBDAS");

// Recorrido con funciones LAMBDAS
frutas.map( f => console.log(f + " Italianas"))

// otros ejemplos:

console.log("=".repeat(40) + " MAP");

frutas.filter((f, pos) => console.log(f + " - " + pos));

console.log("=".repeat(40) + " MAP-2");

frutas.filter(f =>  f.length < 5 ).map(f => console.log(f));

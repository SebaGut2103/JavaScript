//Metodos ARRAYS
let carros = [];
//Agrega al final
carros.push("Renault 4", "Fiat", "Ferrari", "VOLVO", "Lamborghini");
//Elimina del final
carros.pop();
//Elmina el primero
carros.shift();
//Agrega al inicio 
carros.unshift("Porsche 911");

console.log(carros);
//Devuelve una porcion
console.log(carros.slice(1, 3));

//Splice
carros.splice(1, 3, "MERCEDES", "Mazda", "NISSAN SKYLINE GTR-R34");
console.log(carros);
//JOIN
console.log("JOIN: "+ carros.join(" ; "));
//CONCAT
carros = carros.concat("Toyota Supra MK-IV", "Mitshubi Lancer EVO-X", ["Subaru Impresa", "Suzuki"]);
carros.concat()
console.log(carros);
//INDEXOF
console.log(carros.indexOf("Toyota Supra MK-IV"));
console.log(carros.includes("Subaru Impresa" ));
//REDUCE
let rta = carros.reduce((ant, curr) => {return ant += (curr.length <= 6 ? `,${curr}` : "")}, ant =" ");

//Con For
// ant= ""
// for(let i=0; i<carros.length; i++)
//     if(carros[i].length <= 6)
//         ant += carros[i];

console.log(rta)
// Filter devuelve un arry que cumpla con la logica verdadero o falso
//Reduce reduce el arry
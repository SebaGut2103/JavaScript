//Metodo Map

const mapa = new Map();
//Agregar una llave - Valor al mapa

mapa.set("123", "Sebas");
mapa.set("396", "Ada");
mapa.set("133", "Nicolas");

//Has() Verificar si una llave existe en el mapa

console.log("-".repeat(40) + " has");
console.log(mapa.has("Laila"))

//Get( obtiene el valor del mapa)
console.log("-".repeat(40) + " get");
console.log(mapa.get("123"));
console.log(mapa.get("555"));

//Reocorrido con for .. of
console.log("-".repeat(40) + " For..of");
for(let llave of mapa.keys()){
    console.log(llave + " : " + mapa.get(llave));
}
console.log("-".repeat(40) + " For..of with valor");

for(let [llave, valor ]of mapa){
    console.log(llave + " : " + valor);
}

//Recorrido con for each
console.log("-".repeat(40) + " ForEach");
mapa.forEach((valor, llave) => console.log(llave + " --> " + valor));

//Size
console.log("-".repeat(40) + " size");
console.log("tamaño " + mapa.size);
//Delete
console.log("-".repeat(40) + " delete-Size");
mapa.delete("133");
console.log("Tamaño: " + mapa.size)
console.log("-".repeat(40) + " clear");
//Clear
mapa.clear();
console.log("Tamaño: " + mapa.size);
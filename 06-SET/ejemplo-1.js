//Metodo Set
let conj = new Set();

console.log(conj.size);

conj.add("Lamborghini Miura SV")
conj.add("Mazda RX-7");
conj.add("Subaru Impreza WRX STI");
conj.add("Lamborghini Miura SV")

console.log("=".repeat(40))

console.log(conj);

console.log("=".repeat(40) + "Delete")

conj.delete("Mazda RX-7");

console.log(conj);

console.log("=".repeat(40) + "has")
console.log(conj.has("Mazda RX-7")); //True: Si existe o False: No existe

//Recorridos: for of
console.log("=".repeat(40) + "For of")
for(let elem of conj){
    console.log(elem);
}
console.log("=".repeat(40) + "For each")
//FOR EACH:
conj.forEach(elem => console.log(elem));

//Values() devuelve un iterador con todos los valores
console.log("=".repeat(40) + "con values")
console.log(conj.values());

console.log("=".repeat(40) + "clear");

conj.clear();
console.log(conj.size);
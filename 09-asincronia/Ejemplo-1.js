console.log("INICIO");

//Proceso Asincrono. Dos segudos despues

setTimeout(() => {
    console.log("Tarea asincrona completada 3 segundos despues");
}, 7000);

setTimeout(() => {
    console.log("Tarea asincrona completada 2 segundos despues");
}, 2000);


setTimeout(() => {
    console.log("Tarea asincrona completada 4 segundos despues");
}, 4000);

console.log("FIN");
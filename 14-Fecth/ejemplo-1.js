import mostrarTexto from "./mostrartexto.js";
import mostrarJSON from "./mostrarjson.js";

// Acción al boton mostrar texto

const btnMostrarTXT =document.getElementById("mostrartxt");
const areaTXT = document.getElementById("ContenidoTexto");
btnMostrarTXT.addEventListener("click", e =>{
    mostrarTexto(areaTXT);

});
//Acción al boton mostrar Json en la tabla

const btnMostrarJSON =document.getElementById("mostrarjson");
const areaJSON = document.getElementById("datostabla");
btnMostrarJSON.addEventListener("click", e =>{
    mostrarJSON(areaJSON);

});

//INTRO-FECHA

const time = new Date();
console.log(time);

const timeSeb= new Date(2003, 4, 21, 11, 0, 0);
//timeSeb.toLocaleDateString();
console.log(timeSeb);

const timeGut = new Date(1997, 11,18);
console.log(timeGut)

const date = new Date();
date.setFullYear(2024);
date.setMonth(11);
date.setDate(8);
console.log(date);
console.log("Dia Sebas:" + timeSeb.getDay());
console.log("Cadena: " + timeSeb.toDateString());
console.log("Cadena hora actual: " + timeSeb.toTimeString());
console.log("Cadena hora actual corto: " + timeSeb.toLocaleDateString());
console.log("Milisegundo de Sebas: " + timeSeb.getTime());
console.log("Milisegundo: " + new Date().getTime());

const miliDate = 1000 * 60 * 60 * 24;
console.log(Math.floor ((timeSeb.getTime() - timeGut.getTime()) /
miliDate));
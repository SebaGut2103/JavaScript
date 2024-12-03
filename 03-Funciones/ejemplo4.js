/*Interes compuesto
*Una persona invierte $1,000.00 en una cuenta de ahorro
que produce el 5% de interés.
Suponiendo que todo el interés se dposita en la cuenta, calcule
e imprima el monto de dinero en la cuenta al final de cada año, durante 10 años
Muestre un tabla en la página WEB que permita ver el rendimiento de la cuenta año a año.
*/

const encabezadoConsola = function (){
    let titulo = "AÑO\t\tINVERSION";
    console.log("AÑO\t\tINVERSION");
    console.log("-".repeat(titulo.length + 3));
}

const cuerpoConsola = (año, valor) => console.log(`${año}\t\t $${valor}`);

const pieConsola = () =>  console.log("=".repeat(40));
function encabezadoWeb(){
    document.write(
        `
        <table border="1" width="45%">
        <tr>
            <th>Año</th>
            <th>inversión</th>
        </tr>
        `);
};

const pieWeb = () => document.write("</table>");

const cuerpoWeb = function(year, inv){
    let background = year % 2 == 0 ? "white" : "grey"
    let fila = `<tr  style='background: ${background}'>
        <td style='text-align: center;''>${year}</td>
        <td style='text-align: center;'>${inv}</td>
    </tr>`;
    document.write(fila);
}

function rendimiento(inversion, interes, tiempo){
    encabezadoConsola();
    encabezadoWeb();
    for (let i = 1; i <=tiempo; i++){
        let final = Number ((inversion * (1 + interes)).toFixed(2));

        cuerpoConsola(i, final);
        cuerpoWeb(i, final);
        //console.log(`AÑO: ${i} - RENDIMIENTO: ${final}`);
        //console.table(`Año: ${i}; RENDIMIENTO: ${final}`)
        inversion = final;
    }
    pieConsola();
    pieWeb();
}

let inversion = Number(prompt("Valor de la inversión inicial", 1000.00));

const INTERES = 0.05;
const TIEMPO = 10;
rendimiento(inversion, INTERES, TIEMPO);
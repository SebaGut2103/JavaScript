/*
Crear un programa en JavaScript que cree la siguiente tabla de amortización simple.
El usuario ingresa el valor del monto,el valor del interés anual,el número de pagos.Su
programa debe calcular y mostrar,en forma tabular,el dato del valor total a pagar yel valor de
la cuota mensual de abono. Luego, su programa mostrará la tabla de amortización del crédito
simple.
*/

const encabezadoConsola = function (){
    let titulo = "Mes\t\tValor\t\tCapital\t\tInteres\\Total";
    console.log("Mes\t\tValor\t\tCapital\t\tInteres\\Total");
    
}

const cuerpoConsola = (año, valor) => console.log(`${año}\t\t $${valor}`);

const pieConsola = () =>  console.log("=".repeat(40));
function encabezadoWeb(){
    document.write(
        `
        <table border="1" width="45%">
        <tr>
            <th>Monto del crédito:</th>
        </tr>
        <tr>
        <th>Interés (anual):</th>
        </tr>
        <tr>
        <th>Números de pagos (mensuales):</th>
        </tr>
        `);
};

const pieWeb = () => document.write("</table>");

const cuerpoWeb = function(month, inv){
    let background = month % 2 == 0 ? "white" : "grey"
    let fila = `<tr  style='background: ${background}'>
        <td style='text-align: center;''>${month}</td>
        </tr>
        <tr  style='background: ${background}'>
        <td style='text-align: center;'>${inv}</td>
    </tr>`;
    document.write(fila);
}

function rendimiento(inversion, tasa, tiempo){
    encabezadoConsola();
    encabezadoWeb();
    for (let i = 1; i <=tiempo; i++){
        let final = Number ((inversion * (1 + tasa)  ).toFixed(2));

        cuerpoConsola(i, final);
        cuerpoWeb(i, final);
        inversion = final;
    }
    pieConsola();
    pieWeb();
}

let inversion = Number(prompt("Valor de la inversión inicial", 150.00));

const TasaInteres = 0.12;
const TIEMPO = 12;

rendimiento(inversion, TasaInteres, TIEMPO);
function myDisplayer(some){
    console.log(some);
}
 
function esPrimo(num){
    console.log(`${num} es un nùmero primo`);
}


function esPar(num){
    return num % 2 == 0;
}

/*Simulemos que se consulta la pagina de antencedentes de la Policia.
Esta requiere el num de identificaciòn y nos devuelve 
si la persona con ese nùmero tiene antecendetes o no
*/ 

const consultarPolicia = callback => {
    setTimeout(() => {
        const segDesde1970 = Math.floor(Date.now() / 1000)
        if (!callback(segDesde1970)){
            console.log("No tiene antencedentes");
        }else{
            console.log(segDesde1970 + " Tiene antecedentes");
        }
    }, 2000)
}

function myCalculator(num1, num2, funcCallback){
    let sum = num1 + num2;
    funcCallback(sum);
}

console.log("INICIO");
myCalculator(5, 5, myDisplayer);
myCalculator(5, 5, esPrimo);

consultarPolicia(myDisplayer);
consultarPolicia(esPrimo);

let tiempo = 3

for(let i=1; i <= 7; i++) {
    
    setTimeout(i => {
        console. log("Ejecuciòn: " + i)
        consultarPolicia
    }, tiempo++);
}
console.log("FIN\n");



function mayorQue(n){
    return m => m > n;
}
let mayorQue10= mayorQue(10);
console.log(mayorQue(11));

function ruidosa(funcion){
    return (...argumentos) => {
        console.log("llamando con", argumentos);
        let resultado = funcion(...argumentos);
        console.log("llamada con", argumentos, "retorno", resultado)
        return resultado;
    };
}

ruidosa(Math.min)(3,2,1);
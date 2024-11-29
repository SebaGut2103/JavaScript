/*
Crear un programa en JavaScript que cree la siguiente tabla de amortización simple.
El usuario ingresa el valor del monto,el valor del interés anual,el número de pagos.Su
programa debe calcular y mostrar,en forma tabular,el dato del valor total a pagar yel valor de
la cuota mensual de abono. Luego, su programa mostrará la tabla de amortización del crédito
simple.
*/
function pagos(capitas, teimpo, interes){
    let i = 1 + interes
    let ip= interes*100
    let monto = 0
    let t = tiempo*12
    for(let k = 1; k <= t; k++){
        let sub = monto + capital;
        let ai = sub*i;
    }
    console.log("Si tu ahorras al mes $"+capital+" con un interes mensual de "+ip+"% a "+tiempo+" meses, tendras un monto final de $"+monto+" pesos.")
    return monto

}
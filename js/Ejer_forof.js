let str = "Campus Lands";
    for(let i=0; i < str.length; i++){
        let letra = str[i];
        
        if (letra === "a") continue;
        console.log(letra);
    }
    let vocal = "aeiou";
    for(let i=0; i < str.length; i++){
        let letra = str[i];
        
        if (vocal.includes(letra)) continue;
        console.log(letra);
    }
//Recorrer la cadena con for... of
/*for (let letra of str){
    console.log(letra);
}*/


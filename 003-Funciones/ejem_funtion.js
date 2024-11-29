//Funciones nombradas 

function esPalidrome(palabra){
    let lcad = cad.length - 1
for (let i=0; i < lcad / 2; i++){
    let lini = cad[i];
    let lfin = cad[lcad - i];
    if(lini !== lfin){
        return false
    }
}
return true
}
let cad = "anilina"; 
console.log(esPalidrome(cad)? "Es palindrome." : "No es palindrome");

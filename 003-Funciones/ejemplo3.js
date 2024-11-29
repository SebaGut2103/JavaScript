//Funciones nombradas 

function esPalidrome(palabra){
    let lcad = cad.length - 1
for (let i=0; i < lcad / 2; i++){
    let lini = cad[i];
    let lfin = cad[lcad - i];
    if(lini !== lfin){
        return false;
    }
}
return true;
};

//Funcion Anonima
const funcAnonima = function(cad){

    let lcad = cad.length - 1;
    for (let i=0; i < lcad / 2; i++){
    let lini = cad[i];
    let lfin = cad[lcad - i];
    if(lini !== lfin){
        return false;
    }
}
return true;
};

//Funciones flecha
const funcFlecha = (cad) => {
    let lcad = cad.length - 1;
    for (let i=0; i < lcad / 2; i++){
    let lini = cad[i];
    let lfin = cad[lcad - i];
    if(lini !== lfin){
        return false;
    }
}
    return true;
};  
const msgEsPalindrome = (cad) =>
    funcFlecha(cad)? "Es palindrome." : "No es palindrome.";

let cad = "anilina"; 
console.log(esPalidrome(cad)? "Es palindrome." : "No es palindrome");

console.log(funcAnonima("reconocer")? "Es palindrome." : "No es palindrome.");

//console.log(funcFlecha("reconocer")? "Es palindrome." : "No es palindrome.");

console.log(msgEsPalindrome("reconocer"));
const letras = [
    {
        id: "A",
        send:"Enviado de 1:"
    },
    {
        id:"B",
        send:"Enciado de 2"
    },
    {
        id:"C",
        send:"Enciado de 3"
    },
    {
        id:"D",
        send:"Enciado de 4"
    },
    {
        id:"E",
        send:"Enciado de 5"
    },
    {
        id:"F",
        send:"Enciado de 6"
    },
    
    {
        id:"G",
        send:"Enciado de 7"
    }
]


const getData=()=>{
    return new Promise((resolve, reject)=>{
            if(letras.length > 0){
                resolve(letras);
            }else{
                reject("Error. Sin datos")
            }
    })
}

console.log("START")
getData()
    .then(letras = console.table(letras))
    .catch(error => console.error(error));

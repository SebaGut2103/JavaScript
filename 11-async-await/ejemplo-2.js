//Ejemplo-02 carpeta Promises.

const data = [
    {
        id: 1,
        title: "Iron Man",
        year: 2008
    },
    {
        id:2,
        title: "The Godfather",
        year: 1972
    },
    {
        id:3,
        title: "Taxi-Driver",
        year: 1977
    }
];

const getDatas = () => {
    return data;
}
// con async / await

async function getData(){
    let data;
    setTimeout(async () => {
        const data = await getDatas();
        
    }, 3000);
    return data;
}
console.log("START");
(async () => await console.log(getData()))();
console.log("END");
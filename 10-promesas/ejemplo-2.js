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
]
//Síncrono
const getData = () =>{
    return data;
}
/* console.log("START")
console.log(getData());
console.log("END")
*/
//Asíncrono Callback

/*const getDataAsynCallback = (Callback) =>{
    setTimeout(function() {
        console.log(Callback());
    }, 3000);
}
console.log("START")
getDataAsynCallback(getData);
console.log("END")
*/
//PROMISE

const getDataPromise = () => {
    
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if (data.length > 0){
                resolve(data);
            }else{
                reject("ERROR. WITHOUT DATA");
            }
        }, 3000);

    })
};
console.log("START");
getDataPromise()
    .then(data = console.table(data))
    .catch(err => console.error(err));
console.log("END")
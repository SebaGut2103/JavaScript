/*function Readfile(){
    alert("Vamos Bien!!!")
    const archive = document.childNodes[2].files[0];
    console.log("Archivo seleccionado" +  archive)
}*/

function readfile(archive){
    return new Promise((resolve, reject) =>{
        const lector = new FileReader();
        lector.onload = () => resolve(lector.result);
        lector.onerror = () => reject("Error. No se pudo leer el archivo");
        lector.readAsText(archive);
    });
}

document.getElementById("Selfile").addEventListener("Change",
    (evento) => {
        const archive = evento.target.files[0];
        console.log("Archivo seleccionado: " + archive)
        if(archive) {
            readfile(archive)
                .then(content => console.log("Contenido archive:\n", content))
                .catch(error => console.log("Error al leer el archiv:", error));
        }
    });
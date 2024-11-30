const empleado = {
    nombre: "Sebas",
    apellido: "Gutierrez",
    identificacion: 7890,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
};
const cadenaJSON = JSON.stringify(empleado);
console.log(cadenaJSON)
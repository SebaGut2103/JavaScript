let selec;
do {
    selec = Number (prompt(`====================================================
                            *** Menu ***
    1. Agregar un Producto al inventario.
    2. Eliminar un producto por su nombre.
    3. Mostrar el inventario completo.
    4. Buscar un producto por su nombre y mostrar su información.
 ====================================================`));
 switch(selec) {
    case 1:
        let agregar = prompt (` Agregar un Producto al inventario.`);
        let precio = Number (prompt("Agrega precio del producto"));
        let cantidad = Number (prompt("Agrega la cantidad que hay disponible del producto"));
        let oper = {agregar, precio, cantidad}

        break;
    case 2:
        alert("Eliminar un producto por su nombre." + msg);
        break;
    case 3:
        alert("Mostrar el inventario completo." + msg);
        break;
    case 4:
        alert("Buscar un producto por su nombre y mostrar su información." + msg)
    default:
        alert("Opción no valida" + msg)
}
}
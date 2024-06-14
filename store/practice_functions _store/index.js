// Variable que acumula el total a pagar
let totalApagar = 0;
const productosAllevar = Number(prompt("¿Cuantos productos va llevar?"));
for (i = 1; i <= productosAllevar; i++) {
    const nombre = prompt("Ingrese el nombre del producto."); //Solicitar el nombre del producto
    let cantidad = Number(prompt("Cantidad a llevar.")); //Solicitar la cantidad de productos
    let precio = Number(prompt("Ingrese el precio del producto")); //Solicitar el precio del producto
    const subtotal = cantidad * precio; //Calcular el subtotal
    totalApagar += subtotal; // Sumar el subtotal con el total a pagar

    console.log("Producto " + i + " :");
    console.log(`Nombre: ${nombre}`);
    console.log(`Cantidad: ${cantidad}`);
    console.log(`Precio: S/. ${precio}`);
    console.log("Total producto " + i + " : S/. " + subtotal);
}
alert("Precio a pagar por todos los productos : S/. " + totalApagar); // Muestra una alerta del total a pagar
console.log("Total general de todos los productos: S/. " + totalApagar); // Muestra en consola el total a pagar

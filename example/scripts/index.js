/*Seleccionar una etiqueta HTML*/
const selector = document.getElementById("mensaje");
/*Escribir dentro de esta etiqueta con Js*/
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";
/*Prompt = Dato que queramos pedir */
const nombre = prompt("¿Podrías indicarme tu nombre por favor?");
/*Lo muestra en la consola del navegador*/
console.log(nombre);
/*Bienvenida*/
const mensaje = "Bienvenido " + nombre + "!";
alert(mensaje)
/*Producto*/
const entrada = prompt("¿Qué producto desea comprar?");
alert(entrada)
console.log(entrada);

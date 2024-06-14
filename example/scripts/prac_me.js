const entrada = prompt("¿Qué producto desea comprar?");
alert(entrada)
console.log(entrada);
/*Seleccionar una etiqueta HTML*/
const selector = document.getElementById("mensaje");
/*Escribir dentro de esta etiqueta con Js*/
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";
/*Prompt = Dato que queramos pedir */
const nombre = prompt("¿Podrías indicarme tu nombre por favor?");
const edad = prompt("¿Edad?");

/*Toma acción según condiciones específicas de la situación planteada.*/
if (edad >= 18) {
/*Bloque de código a ejecutar si la condición1 es verdadera*/
    alert("Sos mayor edad " + nombre + "," + " bienvenido!");
} else if (edad <= 0) {
/*Bloque de código a ejecutar si la condición1 es falsa y la condición2 es verdadera*/
    alert("Edad incorrecta.");
} else {
/*Bloque de código a ejecutar si ninguna de las condiciones anteriores es verdadera*/
    alert("Sos menor de edad, no tienes permitido ingresar.");
}

/*Lo muestra en la consola del navegador*/
console.log(nombre);
console.log(edad);
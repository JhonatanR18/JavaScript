const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;
const mensajeCantidad = "Tu palabra o frase tiene una cantidad de " + cantidad + " caracteres.";
alert(mensajeCantidad);
console.log("Cantidad de caracteres de la palabra o frase: " + cantidad);

const fraseMin = frase.toLowerCase();
const fraseMay = frase.toUpperCase();
const minMay = "Frase en Mayúsculas: " + fraseMay + " Frase en Minúsculas: " + fraseMin;
console.log(minMay);
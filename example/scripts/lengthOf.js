// Define una función lengthOf que:
// Reciba como parámetro una cadena de texto
function lengthOf (texto){
    if (texto === "") {
        // Si recibe una cadena vacía, devuelva el mensaje "Invalid input".
        return "Invalid input"
    } else { 
        // Retorne la longitud de la cadena (propiedad length)
        return texto.length
    }
}

console.log(lengthOf("Hola")); // debe imprimir 5 y 
console.log(lengthOf("")); // debe imprimir  “Invalid input” 
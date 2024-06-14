const cadena = "Hola, ¿Como estas?"

// charAt
console.log(`charAt: ${cadena.charAt(0)}`);
console.log(`charAt: ${cadena.charAt(1)}`);
console.log(`charAt: ${cadena.charAt(2)}`);
console.log(`charAt: ${cadena.charAt(3)}`);
console.log(`charAt: ${cadena.charAt(cadena.length-1)}`);

// Slice
console.log(`Slice: ${cadena.slice(0, 4)}`);
console.log(`Slice: ${cadena.slice(6, 10)}`);
console.log(`Slice: ${cadena.slice(8, cadena.length - 1)}`);

// Split
console.log(`Split: ${cadena.split("o")}`);
console.log(`Split: ${cadena.split(" ")}`); // Separa por palabras
console.log(cadena.split(" ")); // Separa por palabras
console.log(`Split: ${cadena.split("")}`); // Separa por caracteres
console.log(cadena.split("")); // Separa por caracteres
console.log(typeof cadena.split(""));

// Reverse
console.log(`Reverse: ${cadena.split(" ").reverse()}`);
console.log(`Reverse: ${cadena.split("").reverse()}`);


// Arreglo de palabras
const arreglo = ["Hola", "como", "estas", "mi", "amigo"]
console.log(arreglo);
// Unshift agrega un elemento adelante del array
arreglo.unshift("¿¿¿")
arreglo.push("???")
console.log(arreglo); 

// shift sacar el primer elemento
arreglo.shift()

// pop sacar del final
arreglo.pop()

console.log(arreglo);
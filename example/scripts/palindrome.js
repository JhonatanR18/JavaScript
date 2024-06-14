function palindrome (cadena){
    const primerLetra = cadena.charAt(0).toUpperCase()
    const restoTitulo = cadena.slice(1,Infinity).toUpperCase()
    cadena = primerLetra + restoTitulo
    
    // Rebane la cadena (método split)
    const dividirCadena = cadena.split("")
    // Invierta la lista “spliteada” (método reverse)
    const cadenaReversa = dividirCadena.reverse("")
    // Una la lista (método join)
    const cadenaUnida = cadenaReversa.join("")
    // Devuelve el resultado de la comparación entre la cadena original y la cadena invertida.
    // Si la cadena original es igual a la cadena invertida, la función devolverá true. Si no son iguales, devolverá false. 
    return cadena === cadenaUnida
}
console.log(palindrome("Hello"));
console.log(palindrome("hannah"));
console.log(palindrome("oso"));
console.log(palindrome("feliz"));
function titleFormat (texto) {
    // Corte la cadena en: primera letra y resto del título (método charAt y slice)
    const primerLetra = texto.charAt(0).toUpperCase()  // A MINÚSCULAS
    const restoTitulo = texto.slice(1,Infinity).toLowerCase()  // A MAYÚSCULA
    // console.log(primerLetra);
    // console.log(restoTitulo);

    // Concatene ambas partes
    texto = primerLetra + restoTitulo

    if (texto === ""){
        // Si recibe una cadena vacía, devuelva el mensaje "Invalid input".
        return "Invalid input"
    } else {
        // Retorne el texto modificado 
        return texto
    }

}

console.log(titleFormat("Antes de finalizar su sesión en equipo de hoy, un integrante deberá compartir su pantalla y explicar en detalle cómo resolvió los ejercicios propuestos.")) 
console.log(titleFormat("HELLO world"))
console.log(titleFormat("HellO WOrLd")) // deben imprimir “Hello world”
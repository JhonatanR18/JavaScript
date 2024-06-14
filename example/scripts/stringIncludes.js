function stringIncludes (cadena, cadena2){
    return cadena2.includes(cadena)
}
console.log(stringIncludes("he", "Hello"));
console.log(stringIncludes("he", "hello world"));
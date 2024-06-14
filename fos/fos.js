const nombres = ["Abel", "Carlos", "Carla", "Camilo", "Belén"]
let cadena = ""
// foreach
nombres.forEach ((cadaElemento) => {
    console.log(cadaElemento);
    const frase = `${cadaElemento} es miembro de EGG. `;
    cadena = cadena + frase
})
console.log(cadena);


// Transformar cada uno de los elementos 
// map
const nombresTransformados = nombres.map(cadaElemento =>{
    cadaElemento = cadaElemento.toLocaleUpperCase()
    cadaElemento = `Miembro de EGG: ${cadaElemento}`
    return cadaElemento
})
console.log(nombresTransformados);

// filtrar
// filter
const filtrado = nombres.filter((cadaElemento) => cadaElemento.includes("Ca"))
console.log(filtrado);
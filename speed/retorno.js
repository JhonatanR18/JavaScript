// En esta actividad, mejorarás la función anterior para que devuelva la velocidad y así poder reutilizar este valor.

// function flecha calculate speed
const calculateSpeed = (distance, time) =>{
    // Define una variable para el cálculo de la velocidad
    velocidad = distance / time
    //Imprime en la consola el resultado.
    // console.log("La velocidad del móvil es deeee " + velocidad);
    // retornar la velocidad
    return velocidad
}
// Guarda los valores calculados en las variables velocidad1, velocidad2 y velocidad3.
const speed1 = calculateSpeed(200,2)
const speed2 = calculateSpeed(100,2)
const speed3 = calculateSpeed(50,2)
// Define tres mensajes con estos valores y luego imprímelos en la consola.
console.log(`La velocidad del automóvil #1 es de ${speed1} km/h`);
console.log(`La velocidad del automóvil #2 es de ${speed2} km/h`);
console.log(`La velocidad del automóvil #3 es de ${speed3} km/h`);
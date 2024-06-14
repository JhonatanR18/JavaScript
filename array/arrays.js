const arreglo = ["primer", 25, "hola", { name: "Leo" }, true];
const edades = [15, 20, 30, 60, 80];
console.log(`PRIMER ELEMENTO DE UN ARRAY: ${arreglo[0]}`);
console.log(`SEGUNDO ELEMENTO DE UN ARRAY: ${arreglo[1]}`);
console.log(`TERCER ELEMENTO DE UN ARRAY: ${arreglo[2]}`);
console.log(`CUARTO ELEMENTO DE UN ARRAY: ${arreglo[3]}`);
console.log(`ULTIMO ELEMENTO DE UN ARRAY: ${arreglo[arreglo.length - 1]}`);

for (let i = 0; i < edades.length; i++) {
    console.log(edades[i]);
    console.log(`La edad de la persona es: ${edades[i]}`);
}

// Por cada edad de edades
for (let edad of edades) {
    console.log(`La edad de for of es: ${edad}`);
}
for (let cadaElemento of arreglo){
    console.log(cadaElemento);
}
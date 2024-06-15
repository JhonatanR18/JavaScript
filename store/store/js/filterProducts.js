// Define la función captureText para que imprima por consola “capturado”. 
const captureText = () =>{
    console.log("capturado");
}

// define una variable para seleccionar con el método querySelector
let searchSelector = document.querySelector("#search");
// agregar evento addEventListener 
searchSelector.addEventListener("keyup", captureText)
// evento tipo keyup - cada tecla presionada ejecuta la función captureText
// modifica la función para que reciba un evento
const captureText = (event) =>{
    // imprime el evento completo
    console.log(event);
    // imprime el valor actual del campo de entrada
    console.log(`Capturado: ${event.target.value}`);
}

// define una variable para seleccionar con el método querySelector
let searchSelector = document.querySelector("#search");
// modifica el escuchador | ahora depende de un objeto con todos los datos del evento
searchSelector.addEventListener("keyup", event=>captureText(event))
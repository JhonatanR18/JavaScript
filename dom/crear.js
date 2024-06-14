const h2Tag = document.createElement("h2");
h2Tag.textContent = "ESTE ES EL SUBTITULO";
h2Tag.style.backgroundColor = "blue";
h2Tag.style.color = "white";
h2Tag.style.width = "300px";
h2Tag.style.height = "40px";
h2Tag.style.fontSize = "20px";
h2Tag.style.padding = "20px";
h2Tag.style.display = "flex";
h2Tag.style.justifyContent = "center";
h2Tag.style.alignItems = "center";

const preSelector = document.querySelector(`#subtitulo`);
preSelector.style.display = "flex";
preSelector.style.justifyContent = "center";
preSelector.appendChild(h2Tag);


const products = ["celular", "tableta", "computadora"]
const products1Sel = document.querySelector("#products1") 

for ( let product of products){
    const h3Tag = document.createElement("h3")
    h3Tag.style.backgroundColor = "yellow"
    h3Tag.style.margin = "10px"
    h3Tag.style.padding = "1opx"
    h3Tag.textContent = product
    products1Sel.appendChild(h3Tag)
}

const objetos = [
    { nombre: "celular", precio: 100 },
    { nombre: "tableta", precio: 100 },
    { nombre: "computadora", precio: 100 }
]
const products2Sel  = document.querySelector("#products2")
objetos.forEach(cadaElemento =>{
    const h3Tag = document.createElement("h3")
    h3Tag.style.backgroundColor = "yellow"
    h3Tag.style.margin = "10px"
    h3Tag.style.padding = "10px"
    h3Tag.textContent = cadaElemento.nombre.toUpperCase() + " - Precio: " +cadaElemento.precio
    products2Sel.appendChild(h3Tag)
})

const objetos2 = [
    { nombre: "Mouse", precio: 200 },
    { nombre: "Teclado", precio: 200 },
    { nombre: "Monitor", precio: 200 }
]
const products3Sel = document.querySelector("#products3")
for(let cadaElemento of objetos2){
    const h3Tag = document.createElement("h3")
    h3Tag.style.backgroundColor = "yellow"
    h3Tag.style.margin = "10px"
    h3Tag.style.padding = "10px"
    h3Tag.textContent = cadaElemento.nombre.toUpperCase() + " - Precio " +cadaElemento.precio
    products3Sel.appendChild(h3Tag)
}


const objetos3 = [
    { nombre: "Mouse", price: 200 },
    { nombre: "Teclado", price: 200 },
    { nombre: "Monitor", price: 200 }
]

const products4Sel = document.querySelector("#products4")
let templates = ""
objetos3.forEach(cadaElemento =>{
    cadaElemento = `<h3 style="background-color: purple; padding: 10px; margin: 10px;">${cadaElemento.nombre} - Precio: ${cadaElemento.price}</h3>`
    templates = templates + cadaElemento
})
products4Sel.innerHTML = templates


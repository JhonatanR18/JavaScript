// // Renderizar el pie de página con métodos del DOM
// Analiza el código del archivo index.html e identifica la etiqueta que es “padre” de las opciones de navegación.
// Asigna a esa etiqueta un id=”navbar” para usar como selector de JavaScript. 
// Define una variable navSelector, selecciona con el método getElementById la etiqueta correspondiente donde se Renderizar_a la barra de navegación.  
const navSelector = document.getElementById("navbar");
navSelector.style.display = "flex"
navSelector.style.justifyContent = "space-around"
navSelector.style.padding = "20px 0"
// Crea una variable options, para guardar un array de objetos. Cada objeto representará los datos de un botón con las propiedades:
const optionsNav = [
    {title: "Ofertas de la semana!", linkTo: "/store/store/html/details.html"}, // title: para el texto del botón
    {title: "Productos", linkTo: "/store/store/html/details.html"}, // linkTo: para el link de direccionamiento
    {title: "Contacto", linkTo: "/store/store/html/details.html"},
    {title: "Marcas", linkTo: "/store/store/html/details.html"}
]
// Itera con for of
for ( let optionNav of optionsNav){
    // Crea las etiquetas correspondientes con el método createElement y las propiedades/estilos correspondientes.
    let anchor = document.createElement("a");
    anchor.className = "nav-button";
    // Asigna el texto de la propiedad title de cada objeto con la propiedad textContent
    anchor.textContent = optionNav.title;
    // Define la propiedad href hacia la propiedad linkTo de cada objeto.
    anchor.href = optionNav.linkTo
    anchor.style.textDecoration = "none"
    anchor.style.color = "white"
    anchor.style.fontWeight = "700"
    // Luego “agregar un hijo”  al navSelector
    navSelector.appendChild(anchor)
}
// Abre con live server el archivo index.html y observa la barra de navegación.
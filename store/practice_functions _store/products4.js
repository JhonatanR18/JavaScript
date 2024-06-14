// En esta actividad, vas a mejorar el programa store de las secciones anteriores definiendo una lista con las instancias de objetos creados hasta el momento.
class Product {
    constructor(id, title, price, stock, images, colors, onsale, supplier, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        // Atributo privado
        this._supplier = supplier;
        this.colors = colors;
        this.description = description;
    }
    // Métodos getter y setter del atributo privado
    // get getSupplier (){
    //     return this._supplier
    // }
    // set setSupplier (newName) {
    //     this._supplier = newName;
    // }
    // Define el método sellUnits para que cumpla los requerimientos
    sellUnits (units){
        // Mejora el método para que si no hay stock suficiente, no se descuenten unidades y se devuelva un mensaje de error.
        if (units > this.stock){
            console.log("No hay suficiente stock");
            return;
        }
        this.stock = this.stock - units
    }
}

// Instancias de los objetos
const prod1 = new Product( // Primer elemento del array
    "0000",
    "Tablet",
    500,
    3,
    ["tablet1.jpg", "tablet2.jpg", "tablet3.jpg"],
    ["Black", "White", "Gray"],
    false,
    "Proveedor A",
    "Una tablet de alta calidad con pantalla HD"
)
const prod2 = new Product( // segundo elemento del array
    "0001", 
    "Celular", 
    1000,
    5,
    ["celular1.jpg", "celular2.jpg", "celular3.jpg"],
    ["Black", "Blue"],
    true,
    "Proveedor B",
    "Un celular con excelente rendimiento y cámara de alta resolución"
) 
const prod3 = new Product( // tercer elemento del array
    "0002",
    "Laptop",
    2000,
    2,
    ["laptop1.jpg", "laptop2.jpg", "laptop3.jpg"],
    ["Silver", "Black"],
    true,
    "Proveedor C",
    "Una laptop potente con características avanzadas para profesionales"
) 
const prod4 = new Product( // cuarto elemento del array
    "0003",
    "Monitor",
    300,
    8,
    ["monitor1.jpg", "monitor2.jpg"],
    ["Black"],
    false,
    "Proveedor D",
    "Un monitor de alta resolución ideal para el trabajo y el entretenimiento"
) 
const prod5 = new Product( // quinto elemento del array
    "0004",
    "Impresora",
    150,
    12,
    ["impresora1.jpg", "impresora2.jpg"],
    ["White"],
    true,
    "Proveedor E",
    "Una impresora eficiente y rápida con calidad de impresión excepcional"
) 
const prod6 = new Product( // sexto elemento del array
    "0005",
    "Mouse",
    20,
    50,
    ["mouse1.jpg", "mouse2.jpg"],
    ["Black", "Red"],
    true,
    "Proveedor F",
    "Un mouse ergonómico y preciso para largas horas de uso"
)
// Define la variable products como un array con los [ ]. Dentro de array listar cada uno de los productos definidos.
const products = [prod1, prod2, prod3, prod4]

// Agrega prod5 al inicio del array utilizando el método unshift. 
products.unshift(prod5)
// Agrega prod6 al final del array utilizando el método push.
products.push(prod6)

// Programa la impresión en consola del array completo.
console.log(products);

// quita el primer elemento del array utilizando el método shift. 
products.shift()

// Quita el último elemento del array utilizando el método pop. 
products.pop()

// Programa la impresión del segundo elemento del array.
// console.log(products[1]) // console.log(products[1]); imprimirá la información de prod2.
// // Programa la impresión de la propiedad title del último elemento del array. 
// console.log(products[products.length -1].title);
// impresiones que creas convenientes para observar los cambios en la lista de productos.
// console.log(prod5);
// console.log(prod6)


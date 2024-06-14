// Actividad
// Mejorar el programa store  de las secciones anteriores para definir los primeros productos de la aplicación web.

class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        // Atributo privado
        this._supplier = supplier;
    }
    // Métodos getter y setter del atributo privado
    get getSupplier (){
        return this._supplier
    }
    set setSupplier (newName) {
        this._supplier = newName;
    }
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
const prod1 = new Product()
const prod2 = new Product("0001", "Celular", 1000)
const prod3 = new Product("0002","Laptop", 2000, 2, "laptop.foto11.jpg", true)
const prod4 = new Product("0002","Laptop", 2000, 2, "laptop.foto11.jpg", true, null)
const prod5 = new Product("0002","Laptop", 2000, 12, "laptop.foto11.jpg", true, "Naranjo")

// Ejecuta el método sellUnits para vender 10 unidades y luego 5 unidades.
prod5.sellUnits(10)
prod5.sellUnits(5)

// Programa la impresión en consola de prod1, prod2 y prod3.
console.log(prod1);
console.log(prod2);
console.log(prod3);

// Programa la impresión en consola de prod4 y prod4.getSupplier
console.log(prod4);
console.log(prod4.getSupplier);

// Modifica el proveedor implementando el setter definido de prod4 y programalo en la consola
prod4.setSupplier = "Naranjo"
console.log(prod4.getSupplier);

// Programa la impresión en consola de prod5.
console.log(prod5)

// Programa la impresión de la propiedad title de prod2 y de la propiedad onsale de prod3.
console.log(prod2.title);
console.log(prod3.onsale);
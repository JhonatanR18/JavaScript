// En esta actividad, vas a mejorar el programa store de las secciones anteriores definiendo una lista con las instancias de objetos creados hasta el momento.
class Product {
    constructor(id, title, normalPrice, priceWithDiscount, stock, photo, colors, onsale,description, observation, /*supplier,*/ taxPolicy) {
        this.id = id;
        this.title = title;
        this.normalPrice = normalPrice;
        this.priceWithDiscount = priceWithDiscount;
        this.stock = stock;
        this.photo = photo;
        this.colors = colors;
        this.onsale = onsale;
        this.description = description;
        // Atributo privado
        // this._supplier = supplier;
        this.observation = observation;
        this.taxPolicy = taxPolicy;
    }
    // Métodos getter y setter del atributo privado
    // get getSupplier (){
    //     return this._supplier
    // }
    // set setSupplier (newName) {
    //     this._supplier = newName;
    // }
    // Define el método sellUnits para que cumpla los requerimientos
    // sellUnits (units){
    //     Mejora el método para que si no hay stock suficiente, no se descuenten unidades y se devuelva un mensaje de error.
    //     if (units > this.stock){
    //         console.log("No hay suficiente stock");
    //         return;
    //     }
    //     this.stock = this.stock - units
    // }
}

// Instancias de los objetos
const prod1 = new Product( // Primer elemento del array
    '0001',
    'Lenovo Tablet 10" HD',
    500,
    400,
    3,
    ['/store/store/assets/tablet.jpg'],
    ['Black', 'White', 'Gray'],
    '-12%',
    'Space Gray',
    'Una tablet de alta calidad con pantalla HD',
    'Incluye impuesto País y percepción AFIP'
)
const prod2 = new Product( // segundo elemento del array
    '0002', 
    'Apple iPhone 15 Pro Max', 
    1500,
    1200,
    5,
    ['/store/store/assets/iphone.png', '/store/store/assets/iphone2.png', '/store/store/assets/iphone3.png'],
    ['Black', 'Blue'],
    '-20%',
    'Natural Titanium',
    'Un celular con excelente rendimiento y cámara de alta resolución',
    'Incluye impuesto País y percepción AFIP'
) 
const prod3 = new Product( // tercer elemento del array
    '0002',
    'Macbook Pro 15"4',
    6195,
    5637,
    2,
    ["/store/store/assets/Macbook.jpg"],
    ['Silver', 'Black'],
    '-12%',
    'Space Gray',
    'Una laptop potente con características avanzadas para profesionales',
    'Incluye impuesto País y percepción AFIP'
) 
const prod4 = new Product( // cuarto elemento del array
    '0003',
    'Monitor Gamer 27" QHD 2K Panel IPS',
    600,
    400,
    8,
    ['/store/store/assets/monitor.webp', 'monitor2.jpg'],
    ['Black'],
    '-10%',
    '240Hz 1ms FreeSync Premium',
    'Un monitor de alta resolución ideal para el trabajo y el entretenimiento',
    'Incluye impuesto País y percepción AFIP'
) 
const prod5 = new Product( // quinto elemento del array
    '0004',
    'Epson | Impresora EcoTank L5590',
    150,
    100,
    12,
    ['/store/store/assets/impresora.webp', 'impresora2.jpg'],
    ['White'],
    '-25%',
    'Inyección de Tinta',
    'Una impresora eficiente y rápida con calidad de impresión excepcional',
    'Incluye impuesto País y percepción AFIP'
) 
const prod6 = new Product( // sexto elemento del array
    '0005',
    'Mouse | Logitech G502 Lightspeed',
    250,
    220,
    50,
    ['/store/store/assets/mouse.webp', '/store/store/assets/mouse2.webp'],
    ['Black', 'Red'],
    '-12%',
    'Mouse inalámbrico',
    'Un mouse ergonómico y preciso para largas horas de uso',
    'Incluye impuesto País y percepción AFIP'
)
// Creamos el ARRAY de los productos 
let products = [prod1, prod2, prod3, prod4, prod5, prod6]




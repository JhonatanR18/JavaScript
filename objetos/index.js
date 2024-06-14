const producto = {
    nombre: "Celular",
    precio: 1000,
    stock: 15
}
console.log(producto);

producto.id = "0001"
producto.foto = "https://i.blogs.es/1037f5/traductor/1366_2000.jpg"
producto["detalle"] = "Escribir el detalle del celular"
producto["color"] = "gris"
console.log(producto);

delete producto.id 
delete producto["detalle"]
console.log(producto);

console.log(producto.nombre);
console.log(producto["foto"]);
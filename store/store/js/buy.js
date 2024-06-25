// define una variable buySelector para seleccionar con el método getElementById la etiqueta del botón “Finaliza tu compra”.
const finishBuy = document.getElementById('buy-button')

function buySelector(){
    // borra los productos del localStorage
    localStorage.removeItem('cart');
    // actualiza la lista de productos del carrito (ahora debería estar vacía)
    cartProducts = [];
    // volvemos a imprimir el carrito y el total
    printCard(cartProducts, 'cart-container');
    createTotal(cartProducts)
}
// agregamos el evento click al botón 
finishBuy.addEventListener('click')
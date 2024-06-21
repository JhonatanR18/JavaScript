
let cartProducts = JSON.parse(localStorage.getItem('cart'))

// formatear precios
function formatPrice(precio){
    return `S/ ${precio.toLocaleString('es-PE',{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`
}
function createCart (product){
    return `
    <article id="cart-products" class="cart">
        <div class="cart-img">
        <img src="${product.photo}" alt="${product.id}">
        </div>
        <div class="cart-info">
            <h3 class="cart-title">${product.title}</h3>
            <span class="cart-color">${product.colors}</span>
            <span class="cart-description">${product.description}</span>
            <input class="cart-quantity" type="number" onchange="sutTotal(event)" value="${product.quantity}">
        </div>
        <div class="cart-price">
            <span id="priceNor" class="cart-price-discount">${formatPrice(product.price)}</span>
            <span id="priceNor" class="cart-price-discount">${formatPrice(product.price * product.quantity)}</span>
        </div>
    </article>
    `
}   
function printCard(arrayProductsLS, idSelector){
    let cartTemplates = ""
    for (elements of arrayProductsLS){
        cartTemplates = cartTemplates + createCart(elements)
    }
    const cartSelector = document.getElementById(idSelector)
    cartSelector.innerHTML = cartTemplates
}
printCard(cartProducts, "cart-container")
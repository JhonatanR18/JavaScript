// Renderizar los productos de forma dinámica
const productSelector = document.getElementById("products");
// Función createCard, recibe parámetro un objeto y devuelve un template string con sólo una tarjeta de producto. El objeto a recibir por la función será un producto con todas las propiedades definidas en la clase.
function createCard (product){
    // modifica cada dato estático de la tarjeta
    return `
        <article class="product-card">
        <a href="/store/store/html/details.html">
            <img class="product-img" src="${product.photo[0]}" alt="${product.id}">
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                    <span class="normal-price">S/ ${product.normalPrice}</span>
                    <span class="price-with-discount">S/ ${product.priceWithDiscount}</span>
                </div>
                <div class="product-tax-policy">${product.taxPolicy}</div>
            </div>
            <div class="product-discount">${product.onsale}</div>
        </a>
        </article>
    `;
}
// Reemplazar el contenido de la variable productsTemplate con una iteración for of para que cada vuelta “cargue” una tarjeta de producto. 
let productTemplate = "";
for (let element of products){
    productTemplate = productTemplate + createCard(element)
}
// Imprime el contenido en el selector con la propiedad innerHTML.
productSelector.innerHTML = productTemplate
// Renderizar los productos con template string 
// Define una variable donde se Renderizar_an las tarjetas de los productos 
const productsSelector = document.getElementById("products");

// Define una variable con un template string y pega de todas las tarjetas
const productTemplates = `
<article class="product-card">
    <a href="/store/store/html/details.html">
    <img 
    class="product-img" 
    src="/store/store/assets/Macbook.jpg" 
    alt="Macbook Pro">
    <div class="product-info">
        <span class="product-title">Macbook Pro 15'4</span>
        <span class="product-description">Space Gray</span>
        <div class="product-price-block">
            <span class="normal-price">S/ 6,195.00</span>
            <span class="price-with-discount">S/ 5,637.45</span>
        </div>
        <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
        </div>
    </div>
    <div class="product-discount">
    -9%
    </div>
    </a>
</article>
<article class="product-card">
    <a href="/store/store/html/details.html">
    <img 
    class="product-img" 
    src="/store/store/assets/Macbook.jpg" 
    alt="Macbook Pro">
    <div class="product-info">
        <span class="product-title">Macbook Pro 15'4</span>
        <span class="product-description">Space Gray</span>
        <div class="product-price-block">
            <span class="normal-price">S/ 6,195.00</span>
            <span class="price-with-discount">S/ 5,637.45</span>
        </div>
        <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
        </div>
    </div>
    <div class="product-discount">
    -9%
    </div>
    </a>
</article>
`
// Imprime el contenido en el selector con la propiedad innerHTML.
productsSelector.innerHTML = productTemplates
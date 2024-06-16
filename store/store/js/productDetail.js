// Location 
// Captura el parámetro id utilizando las propiedades y métodos de la teoría.
const query = location.search;
// URLSearchParams define métodos útiles para trabajar con la cadena de consulta de una URL.
const params = new URLSearchParams(query);
const id = params.get('id')
console.log(id);

// propiedades de location : href, protocol,search, host, etc.
// probamos algunas
const port = location.port;
console.log(port);
const host = location.host;
console.log(host);
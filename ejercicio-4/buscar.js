/*Ejercicio 4 — Buscar un producto*/

/*Dado el nombre de un producto, busca su posición en el catálogo. Si lo encuentra, muestra su posición, precio y stock. Si no existe, la posición debe ser -1 y hay que mostrar un aviso.
Datos: los mismos arrays del ejercicio 3 y una variable */

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock     = [10, 25, 3, 0, 7];

let posicionProducto = -1;
let productoBuscado = "teclado";
let stockProducto = 0;
let precioProducto = 0;


for (let i = 0; i < productos.length; i++) {
    if (productos[i].toLowerCase() === productoBuscado.toLowerCase()) {
        posicionProducto = i;
        stockProducto = stock[i];
        precioProducto = precios[i] + "\u20AC";
        productoBuscado = productos[i];
        break;
    }   
}  
console.log("Producto buscado: " + productoBuscado);
console.log("Stock del producto: " + stockProducto);
console.log("Posición del producto: " + posicionProducto);
console.log("Precio del producto: " + precioProducto);
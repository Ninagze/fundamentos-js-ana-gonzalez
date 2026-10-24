/*Explorar el catálogo

La tienda guarda su catálogo en tres arrays paralelos: la misma posición en los tres arrays corresponde al mismo producto (productos[2] cuesta precios[2] y le quedan stock[2] unidades). */

const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock     = [10, 25, 3, 0, 7];

/*Qué tiene que hacer:
1.	Mostrar el catálogo: una línea por producto con su precio y sus unidades. Si el stock es 0, muestra AGOTADO.
2.	Contar cuántos productos están agotados.
3.	Encontrar el producto más caro y mostrar su nombre y su precio.
4.	Calcular el valor total del inventario: la suma de precio × stock de todos los productos.*/


console.log("Catálogo de productos:");
for (let i = 0; i < productos.length; i++) {
    if (stock[i] === 0) {
        console.log(productos[i] + " - €" + precios[i] + " - AGOTADO");
    } else {
        console.log(productos[i] + " - €" + precios[i] + " - " + stock[i] + " unidades");
    }
}

let agotados = 0;

for (let i = 0; i < stock.length; i++) {
    if (stock[i] === 0) {
        agotados++;
    }
} 
console.log("\nProductos agotados: " + agotados); 

let productoMasCaro = 0

for (let i = 1; i < precios.length; i++) {
    if (precios[i] > precios[productoMasCaro]) {
        productoMasCaro = i;
    }
}
console.log("\nProducto más caro: " + productos[productoMasCaro] + " - €" + precios[productoMasCaro]);

let valorTotalInventario = 0;
for (let i = 0; i < productos.length; i++) {
    valorTotalInventario += precios[i] * stock[i];
}
console.log("\nValor total del inventario: €" + valorTotalInventario);







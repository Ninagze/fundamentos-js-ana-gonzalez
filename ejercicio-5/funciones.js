/*Ejercicio 5 — Refactorizar en funciones*/
/*Convierte el código de los ejercicios 1 a 4 en funciones reutilizables. Todas deben devolver su resultado con return; ninguna debe usar console.log por dentro. Los console.log van fuera, al llamarlas.*/

const precio = 189;
const cantidad = 2;

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}
console.log("Importe de la línea: " + calcularImporteLinea(precio, cantidad).toFixed(2) + "€");

const porcentajeIva = 21;

function calcularIVA(importe) {
    return importe * (porcentajeIva / 100);
}
console.log("IVA: " + calcularIVA(378).toFixed(2) + "€");
console.log("IVA: " + calcularIVA(100).toFixed(2) + "€");
console.log("IVA: " + calcularIVA(19.90).toFixed(2) + "€");
console.log("IVA: " + calcularIVA(3).toFixed(2) + "€");


function calcularDescuento(importe) {
    let descuento = 0;

    if (importe > 100) {
        descuento = importe * 0.10;
    } else if (importe > 50) {
        descuento = importe * 0.05;
    } else {
        descuento = 0;
    }

    return descuento;
}
console.log("Descuento: " + calcularDescuento(120).toFixed(2) + "€");
console.log("Descuento: " + calcularDescuento(75).toFixed(2) + "€");

function calcularEnvio(importe) {
    let envio = 0;
    if (importe >= 50) {
        envio = 0;
    } else {
        envio = 4.95;
    }
    return envio;
}
console.log("Envío: " + calcularEnvio(49.44).toFixed(2) + "€");
console.log("Envío: " + calcularEnvio(50).toFixed(2) + "€");


function contarAgotados(stock) {
    let contador = 0;

    for (let i = 0; i < stock.length; i++) {
        if (stock[i] === 0) {
            contador++;
        }
    }

    return contador;
}
console.log("Número de productos agotados: " + contarAgotados([10, 25, 3, 0, 7]));
console.log("Número de productos agotados: " + contarAgotados([0, 0, 5, 0]));


function productoMasCaro(productos, precios) {
    let posicion = 0;

    for (let i = 1; i < precios.length; i++) {
        if (precios[i] > precios[posicion]) {
            posicion = i;
        }
    }

    return productos[posicion];
}
console.log("Producto más caro: " + productoMasCaro(["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"], [45.99, 19.90, 189.00, 59.95, 34.50]));
console.log("Producto más caro: " + productoMasCaro(["Pan", "Leche", "Queso"], [1.20, 0.90, 5.50]));


function valorInventario(precios, stock){
    let total = 0;

    for (let i = 0;  i < precios.length;  i++){
        total = total + precios [i] *  stock [i];
    }
    return total;
} 
console.log("Valor total del inventario: " + valorInventario([45.99, 19.90, 189.00, 59.95, 34.50], [10, 25, 3, 0, 7]).toFixed(2) + "€");
console.log("Valor total del inventario: " + valorInventario([2, 3], [10, 5]).toFixed(2) + "€");

function buscarProducto(productos, nombre) {
    let posicion = -1;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i] === nombre) {
            posicion = i;
        }
    }

    return  posicion;
}
console.log("Posición del producto buscado: " + buscarProducto(["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"], "Altavoz"));
console.log("Posición del producto buscado: " + buscarProducto(["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"], "Monitor"));
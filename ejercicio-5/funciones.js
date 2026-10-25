/*Ejercicio 5 — Refactorizar en funciones*/
/*Convierte el código de los ejercicios 1 a 4 en funciones reutilizables. Todas deben devolver su resultado con return; ninguna debe usar console.log por dentro. Los console.log van fuera, al llamarlas.*/

const precio = 189;
const cantidad = 2;

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}
console.log("Importe de la línea: " + calcularImporteLinea(precio, cantidad).toFixed(2) + "€");



const porcentajeIva = 10;

function calcularIVA(importe) {
    return importe * (porcentajeIva / 100);
}
console.log("IVA: " + calcularIVA(378).toFixed(2) + "€");
console.log("IVA: " + calcularIVA(100).toFixed(2) + "€");


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


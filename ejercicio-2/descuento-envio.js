/*Dado el importe de una compra, calcula el descuento y los gastos de envío según las reglas de la tienda.
Reglas de la tienda:

Concepto	Regla
Descuento	Más de 100 €: 10 %. Más de 50 € (hasta 100 €): 5 %. 50 € o menos: sin descuento.

Envío	El envío cuesta 4.95 €. Es gratis si el importe, después de aplicar el descuento, es de 50 € o más.

Total	Importe − descuento + envío */

const importe = 52;
const precioEnvio = 4.95;
let descuento = 0;

if (importe > 100) {
    descuento = importe * 0.10;
}else if (importe > 50) {
    descuento = importe * 0.05;
}else {
    descuento = 0;
}
console.log("Descuento: " + descuento.toFixed(2) + "€");

const importeConDescuento = importe - descuento;
let envio = 0;
if (importeConDescuento >= 50) {
    envio = 0;
} else {
    envio = precioEnvio;
}  
console.log("Envío: " + envio.toFixed(2) + "€");
console.log("Importe con descuento: " + importeConDescuento.toFixed(2) + "€");


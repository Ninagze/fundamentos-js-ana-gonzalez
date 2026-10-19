//Un cliente compra varias unidades de un producto. Calcula el subtotal, el IVA y el total, y muéstralo como un ticket.

const producto = "Monitor";
const precio = 189;      // precio por unidad, sin IVA
const cantidad = 2;
const porcentajeIva = 21;

const subtotal = precio * cantidad;
console.log ("Subtotal: " + subtotal + "€");
const iva = subtotal * (porcentajeIva / 100);
console.log ("IVA: " + iva + "€");
const total = subtotal + iva;
console.log ("Total: " + total + "€");


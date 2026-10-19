//Un cliente compra varias unidades de un producto. Calcula el subtotal, el IVA y el total, y muéstralo como un ticket.

const producto = "Monitor";
const precio = 189;      // precio por unidad, sin IVA
const cantidad = 2;
const porcentajeIva = 21;

console.log ("Producto: " + producto);
console.log (cantidad + " x " + precio.toFixed(2) +  " € ");

const subtotal = precio * cantidad;
console.log ("Subtotal: " + subtotal.toFixed(2) + "€");
const iva = subtotal * (porcentajeIva / 100);
console.log ("IVA (" + porcentajeIva + "%): " + iva.toFixed(2) + "€");
const total = subtotal + iva;
console.log ("TOTAL: " + total.toFixed(2) + "€");




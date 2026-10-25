// Datos fijos 
const porcentajeIva = 21;
const precioEnvio = 4.95;

//Funciones 

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}

function calcularIVA(importe) {
    return importe * (porcentajeIva / 100);
}

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

function calcularEnvio(importe) {
    let envio = 0;

    if (importe >= 50) {
        envio = 0;
    } else {
        envio = precioEnvio;
    }

    return envio;
}

function buscarProducto(productos, nombre) {
    let posicion = -1;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i] === nombre) {
            posicion = i;
        }
    }

    return posicion;
}

// 6.2 Datos

// Catálogo
const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];   // sin IVA
const stock     = [10, 25, 3, 0, 7];

// Pedido del cliente (también arrays paralelos)
const pedidoProductos  = ["Ratón", "Monitor", "Auriculares", "Teclado", "Altavoz"];
const pedidoCantidades = [2, 4, 1, 1, 1];

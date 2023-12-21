const COD_PROD_1 = 1;
const COD_PROD_2 = 2;
const COD_PROD_3 = 3;
const COD_PROD_4 = 4;
const PRECIO_PROD_1 = 2401;
const PRECIO_PROD_2 = 3780;
const PRECIO_PROD_3 = 3186;
const PRECIO_PROD_4 = 2359;
let sumaTotal = 0;

alert("Bienvenido a Gala Shop")
let nombre;

do {
    nombre = prompt("Ingresa tu nombre:");

    if (nombre === null || nombre.trim() === "") {
        console.log("No ingresaste un nombre válido. Por favor, intenta de nuevo.");
    } else {
        console.log("Bienvenido:", nombre);
    }
} while (nombre === null || nombre.trim() === "");

console.log("%cEstos son los códigos de productos disponibles: 1 - 2 - 3 - 4", "background-color: #f1f1f1; color: #333; padding: 10px; border-radius: 5px;");
let productoCantidad = 0
let productoCodigo = 0

function ingresarCodigoProducto() {

    while (true) {
        productoCodigo = prompt("Ingresa por favor el código de producto que quieres agregar al carrito, 0 para terminar la compra")

        if ((productoCodigo === "0" || productoCodigo === "1" || productoCodigo === "2" || productoCodigo === "3" || productoCodigo === "4") && (productoCodigo !== "" && productoCodigo !== null)) {
            return productoCodigo
        } else {
            alert(" 🔴 Valor incorrecto. Por favor, ingresa los siguientes codigos de productos 1, 2, 3 o 4. Si deseas terminar la compra ingresa 0");
        }

    }
}


function sumarProductos(productoCantidad, codProducto) {
    let precioTotalProducto = productoCantidad * codProducto
    return precioTotalProducto
}


function ingresarCantidadProducto() {
    let productoCantidad;
    do {
        productoCantidad = parseInt(prompt("Ingresa por favor la cantidad del producto:"));

        if (isNaN(productoCantidad) || productoCantidad === null || productoCantidad === "") {
            alert("🔴 Valor incorrecto. Por favor, ingresa un valor numérico válido.");
        } else {

            break;
        }
    } while (true); // El bucle se ejecuta hasta que  productoCantidad sea un número válido.

    return productoCantidad;
}




productoCodigo = parseFloat(ingresarCodigoProducto())
let cantidadProductosTotal = 0

while (productoCodigo != 0) {
    productoCantidad = ingresarCantidadProducto()

    cantidadProductosTotal += productoCantidad

    if (productoCodigo == COD_PROD_1) {
        sumaTotal += sumarProductos(productoCantidad, PRECIO_PROD_1)

    } else if (productoCodigo == COD_PROD_2) {
        sumaTotal += sumarProductos(productoCantidad, PRECIO_PROD_2)

    } else if (productoCodigo == COD_PROD_3) {
        sumaTotal += sumarProductos(productoCantidad, PRECIO_PROD_3)

    } else {
        sumaTotal += sumarProductos(productoCantidad, PRECIO_PROD_4)
    }
    console.log("Estimado: " + nombre + ", en el carrito tienes " + cantidadProductosTotal + " artículos con un precio total de: $" + sumaTotal)
    productoCodigo = parseFloat(ingresarCodigoProducto())

}


if (productoCodigo === 0) {
    console.log("🟢 Terminaste la Compra")
    alert("Estimado: " + nombre + ", compraste " + cantidadProductosTotal + " artículos con un precio total de: $" + sumaTotal)
    console.log("Estimado: " + nombre + ", compraste " + cantidadProductosTotal + " artículos con un precio total de: $" + sumaTotal)
}
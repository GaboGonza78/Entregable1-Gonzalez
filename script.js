const productos = [];

function preguntarCompra() {
    return confirm("Bienvenido!, Desea comprar alguno de nuestros productos?");
}

function mostrarOpcionesProducto() {
    alert("Elija el número de código del producto:\n1. Hamburguesa Simple\n2. Hamburguesa c/Queso\n3. Hamburguesa Completa\n4. Papas Pequeñas\n5. Papas Grandes\n6. Coca-Cola\n7. Coca Zero");
}

function solicitarProducto() {
    return prompt("Ingrese el número de código del producto seleccionado");
}

function agregarProducto(producto) {
    productos.push(producto);
}

function despedida() {
    alert("¡Gracias por su compra! ¡Nos vemos pronto!");
}

let comprar = preguntarCompra();

if (comprar) {
    mostrarOpcionesProducto();

    let codigoProducto = solicitarProducto();
    let productoAComprar;

    switch (codigoProducto) {
        case "1":
            productoAComprar = "Hamburguesa Simple";
            break;
        case "2":
            productoAComprar = "Hamburguesa c/Queso";
            break;
        case "3":
            productoAComprar = "Hamburguesa Completa";
            break;
        case "4":
            productoAComprar = "Papas Pequeñas";
            break;
        case "5":
            productoAComprar = "Papas Grandes";
            break;
        case "6":
            productoAComprar = "Coca-Cola";
            break;
        case "7":
            productoAComprar = "Coca Zero";
            break;
        default:
            alert("¡Código de producto no válido!");
            comprar = false;
    }

    while (comprar) {
        agregarProducto(productoAComprar);

        comprar = confirm("¿Quiere seguir comprando?");
        if (comprar) {
            mostrarOpcionesProducto();
            codigoProducto = solicitarProducto();
            switch (codigoProducto) {
                case "1":
                    productoAComprar = "Hamburguesa Simple";
                    break;
                case "2":
                    productoAComprar = "Hamburguesa c/Queso";
                    break;
                case "3":
                    productoAComprar = "Hamburguesa Completa";
                    break;
                case "4":
                    productoAComprar = "Papas Pequeñas";
                    break;
                case "5":
                    productoAComprar = "Papas Grandes";
                    break;
                case "6":
                    productoAComprar = "Coca-Cola";
                    break;
                case "7":
                    productoAComprar = "Coca Zero";
                    break;
                default:
                    alert("¡Código de producto no válido!");
                    comprar = false;
            }
        }
    }

    alert("Productos comprados: " + productos.join(", "));
    despedida();
} else {
    alert("¡Esta bien, nos vemos!");
}




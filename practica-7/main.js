//tienda online

const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
];

//1-Recorre el array de productos y muestra en la consola el nombre y el precio de cada uno.
for (let index = 0; index < productos.length; index++) {
    console.log(productos[index].nombre + ", $" + productos[index].precio);
}
//2-Parte 1: Usa map para generar un array productosDisponibles que contenga
//  solo los nombres de los productos a partir del array productos.
let productosDisponibles = productos.map(
    function(cadaElementoDelArray) {
        return cadaElementoDelArray.nombre
    })
console.log(productosDisponibles);
//Parte 2: Luego, verifica si un producto buscado está disponible utilizando includes.
let productoEncontrar = "Audífonos";

if (productosDisponibles.includes) {
    console.log("El producto " + productoEncontrar + " está disponible");
} else {
    console.log("El producto " + productoEncontrar + "NO está disponible");
}

/* for (let index = 0; index < productosDisponibles.length; index++) {
    let encontre = false;
    if (productosDisponibles[index] == productoEncontrar) {
        console.log("El producto " + productoEncontrar + " está disponible");
        encontre = true;
    } else if (encontre = false && productosDisponibles.length == index + 1) {
        console.log("El producto " + productoEncontrar + "NO está disponible");
    }
} */






//NO PUDE SEGUIR... NECESITO REVISAR PORQUE NO ESTOY CONVENCIDO DE LOS SIGUIENTES RESULTADOS
/* // Crea un nuevo array con los productos, aplicando un 10% de descuento a los precios
let productosConDescuento = productos.map(
    function(cadaElementoDelArray) {
        return cadaElementoDelArray.precio - (cadaElementoDelArray.precio * 0.1)
    })
console.log(productosConDescuento);

//Crea un array con los productos cuyo precio sea menor a $100.
let menorA100 = productosConDescuento.filter((word) => word.length > 6);
console.log(menorA100); */
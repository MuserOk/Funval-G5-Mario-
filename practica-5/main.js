//programa calculadora


let salir = false;
do {
    const opcion = parseInt(prompt(`Hola! Por favor, selecciona el trabajo a realizar: 
    1. Calcular el área de un cuadrado
    2. Calcular el área de un rectángulo
    3. Calcular el área de un triángulo
    `))

    if (opcion === 1) {
        const lado = parseInt(prompt("Ahora ingresa el valor de un lado:"))
        alert("El área del cuadrado con lado " + lado + " es: " + (lado ** 2))
        salir = true;
    } else if (opcion === 2) {
        const base = parseInt(prompt("Ahora ingresa el valor de la base:"))
        const altura = parseInt(prompt("Ahora ingresa el valor de la altura:"))
        alert("El área del rectángulo con base " + base + " y altura " + altura + " es: " + (base * altura))
        salir = true;
    } else if (opcion === 3) {
        const base = parseInt(prompt("Ahora ingresa el valor de la base:"))
        const altura = parseInt(prompt("Ahora ingresa el valor de la altura:"))
        alert("El área del triángulo con base " + base + " y altura " + altura + " es: " + ((base * altura) / 2))
        salir = true;
    } else {
        alert("Datos incorrectos")
    }
} while (!salir);
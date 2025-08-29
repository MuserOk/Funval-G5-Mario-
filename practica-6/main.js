//Cuenta bancaria

alert("Bienvenido a Tu Banco, por favor presiona aceptar para continuar")
let salir = true;
let saldo = 10000;
const limiteExtraccion = 50000;
let cantidadExtraida = 0;

function preguntar() {
    salirPreguntar = true;
    do {
        let seguir = parseInt(prompt("Deseas realizar otra operacion? (ingresa '1' para continuar, o '0' para terminar"))
        if (seguir == 0 || seguir == 1) {
            if (seguir == 0) {
                salir = false;
                salirPreguntar = false;
            } else {
                salirPreguntar = false;
            }
        } else { alert("Carácter inválido, itenta nuevamente") }
    } while (salirPreguntar);
}
do {
    const opcionSeleccionada = parseInt(prompt(`Selecciona la operación que deseas realizar: 
    1. Ingresar dinero
    2. Retirar dinero
    3. Consultar saldo
    4. Salir
    `))
    if (opcionSeleccionada >= 1 && opcionSeleccionada <= 3) {
        if (opcionSeleccionada == 1) {
            salirIngresarDinero = true;
            do {
                ingreso = parseInt(prompt("Ingresa el monto a depositar, luego presiona aceptar. Para cancelar ingresa '0' "))
                if (ingreso >= 1) {
                    saldo += ingreso;
                    salirIngresarDinero = false;
                    alert("Operacion realizada con exito")
                } else if (ingreso == 0) {
                    salirIngresarDinero = false;
                } else {
                    alert("Carácter inválido, itenta nuevamente")
                }
            } while (salirIngresarDinero);
            preguntar()
        } else if (opcionSeleccionada == 2) {
            salirRetirarDinero = true;
            alert("AVISO: Recuerda que el limite de extraccion diaria es de:  $" + limiteExtraccion)
            do {
                egreso = parseInt(prompt("Ingresa el monto que desea retirar, luego presiona aceptar. Para cancelar ingresa '0' "))
                if (egreso >= 1) {
                    if ((saldo - egreso) < 0) {
                        alert("El saldo a retirar es insuficiente")
                    } else if ((saldo - egreso) >= 0) {
                        if ((egreso + cantidadExtraida) > limiteExtraccion) {
                            alert("El monto que deseas extraer supera al limite diario. Tienes:  $" + (limiteExtraccion - cantidadExtraida) + " diponible para retirar.")
                            salirRetirarDinero = false;
                        } else {
                            saldo -= egreso;
                            salirRetirarDinero = false;
                            cantidadExtraida += egreso;
                            alert("Operacion realizada con exito")
                        }
                    }
                } else if (egreso == 0) {
                    salirRetirarDinero = false;
                } else {
                    alert("Carácter inválido, itenta nuevamente")
                }
            } while (salirRetirarDinero);
            preguntar()
        } else {
            //opcion seleccionada es 3
            alert("Tu saldo actual es: $" + saldo)
            preguntar()
        }
    } else if (opcionSeleccionada == 4) {
        salir = false;
    } else {
        alert("opcion invalida, haz click en 'Aceptar' e intenta nuevamente")
    }
} while (salir);
alert("Muchas gracias por elegirnos!")
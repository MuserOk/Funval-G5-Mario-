//ARRAYS
/*
ARRAY QUE VEO... ARRAY QUE ITERO

MUTACION: no modificamos el contenido de un array CONSTANTE, pero si podemos MUTARLO... AGREGAR ALGO MAS.
*/

//------------------DECLARAR  Y  CREAR  ARRAYS []-------------------------

/*
VER EL LARGO: array.length
AGREGAR AL FINAL: array.push (de mutacion)
AGREGAR AL PRINCIPIO: array.unshift (de mutacion)
ELIMINAR ELEMENTO DEL FINAL: array.pop()
ELIMINAR ELEMENTO AL PRINCIPIO: array.shift()

RECORRER: con FOR
MOSTRAR ELEMENTO: [1]
*/


//--------------------------------------------------------------------

/*
Verificar si en el Array se encuentran los hermanos Luis y Santiago 
mostrar el indice donde se encuentran
*/
/* let estudiantesFunval1 = [
    "Pedro",
    "David",
    "Nefi",
    "Santiago",
    "Roberto",
    "Mario",
];

let encontre1 = false;
let encontre2 = false;

for (let index = 0; index < estudiantesFunval1.length; index++) {
    if (estudiantesFunval1[index] === "Luis") {
        console.log("El hermano Luis está en la posición " + index);
        encontre1 = true;
    } else if (estudiantesFunval1[index] === "Santiago") {
        console.log("El hermano Santiago está en la posición " + index);
        encontre2 = true;
    }
}

if (encontre1 || encontre2) {
    console.log("Terminamos de recorrer el array");
} else {
    console.log("Los hermanitos Luis y Santiago no estaban en este array");
} */

//-------------------------------------------------------------------------
/* se le dara un array de notas de un estudiante debera sacar el promedio de nuestro estudiante y verificar 
    si esta aprobado o reprobado la nota minima de aprobacion es de 51
*/
/* let notasEstudiante = [65, 44, 90, 10, 51, 0];

function sumar(a, b) {
    return a + b;
}

let sumaTotal = 0;

for (let index = 0; index < notasEstudiante.length; index++) {
    sumaTotal = sumar(sumaTotal, notasEstudiante[index]);
}
console.log("El promedio es: " + (sumaTotal / notasEstudiante.length));

if ((sumaTotal / notasEstudiante.length) >= 51) {
    console.log("Aprobaste 😃");
} else {
    console.log("Reprobaste 😓");
} */

//---------------------------DECLARAR Y CREA  OBJETOS {} (diccionarios)-------------------------------------------------------
//KEY : VALOR

/*
CREAR OBJETO: let objeto = { 
    key1 : valor,
    key2 : valor;
}
ACCEDER A VALORES: objeto.llave
AGREGAR PARES LLAVES VALOR:  objeto.llave = "valor"
ELIMINAR PARES LLAVE VALOR:  delete objeto.llave
*/


/*EJERCICIO
quiero q vean un objeto del mundo real
y lo puedan codigicar en un objeto manipulable

acceder a almenos 2 valores atraves de sus llaves
agregar almenos 2 pares de llave valor y 
eliminar 1 ya existente
*/

/* let concecionaria = {
    volkwagen: "gol", //puedo crear un array de mas objetos
    fiat: "uno"
}

console.log(concecionaria.volkwagen);
console.log(concecionaria.fiat);

concecionaria.renault = "express"
concecionaria.chevrolet = "camaro"

delete concecionaria.llave; */


//----------------------------------------------------------------------
/*
14. Promedio de valores
Dado un array de objetos {nombre, precio}, calcula el precio promedio de todos los productos.
*/
/* let libreria = [{
        nombre: "lapiz",
        precio: 3
    },
    {
        nombre: "cuaderno",
        precio: 4
    },
    {
        nombre: "sacapuntas",
        precio: 1
    },
    {
        nombre: "plasticola",
        precio: 3
    }
];

function sumar(a, b) {
    return a + b;
}

let sumaTotal = 0;

for (let index = 0; index < libreria.length; index++) {
    sumaTotal += libreria[index].precio
}

console.log("promedio de Artículos: " + (sumaTotal / libreria.length)); */

//-----------------
let listaEstudiantes = [{
        nombre: "Mario",
        Pais: "Argentina",
        notas: [20, 55, 78, 90, 12],
    },
    {
        nombre: "Nefi",
        Pais: "Mexico",
        notas: [100, 90, 78, 90, 0],
    },
    {
        nombre: "Santiago",
        Pais: "Argentina",
        notas: [70, 80, 77, 0, 11],
    },
    {
        nombre: "Geraldine",
        Pais: "Peru",
        notas: [20, 10, 0, 0, 100],
    },
    {
        nombre: "Jesus",
        Pais: "Colombia",
        notas: [70, 60, 80, 32, 22],
    },
];
/* 
quiero un programa q pueda mostrarme el nombre de los estudiantes aprobados cuando promedio
es mayor a 75, 
mostrar a los estudiantes aprobados junto con su nota de aprobacion 
-mostrar de q pais tenemos la mayor cantidad de estudiantes aprobados y la cantidad q tiene
ejemplo ARGENTINA 12
*/
function name(params) {

}

let maxPaisAprobados = 0;

for (let i = 0; i < listaEstudiantes.length; i++) {
    let sumaTotal = 0;
    for (let j = 0; j < listaEstudiantes[i].notas.leng; j++) {
        sumaTotal += listaEstudiantes[i].notas[j]
            //ingresé ... me falta hacer los detalles : )
    }
};
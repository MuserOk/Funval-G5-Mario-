/*Mensajes en consola:
console.log()

variable y constante

tipo de datos 

Nunca sera una constante un valor UNDEFINIDED

verificar tipo de dato (typeof) en TIEMPO DE EJECUCION
    console.log(typeof = "santiago ivan");

Objetos: NO SON TIPOS DE DATOS PRIMITIVOS.

*/
/* console.log("PRIMER PASO CREAR VARIABLES Y VER SU TIPO DE DATO");

let nombre = ("Mario")
console.log(nombre);
console.log(typeof nombre);

let apellido = ("Cruz");
console.log(apellido);
console.log(typeof apellido);

let edad = 35;
console.log(edad);
console.log(typeof edad);

let pais = ("argentina");
console.log(pais);
console.log(typeof pais);

let miembro = true;
console.log(miembro);
console.log(typeof miembro);

let piloto = false;
console.log(piloto);
console.log(typeof piloto);

let mascota = "perro";
console.log(mascota);
console.log(typeof mascota);


console.log("SEGUNDO: CAMBIAR SU TIPO");

nombre = (true)
console.log(nombre);
console.log(typeof nombre);

apellido = (100);
console.log(apellido);
console.log(typeof apellido);

edad = "4";
console.log(edad);
console.log(typeof edad);

pais = false;
console.log(pais);
console.log(typeof pais);

miembro = "algo";
console.log(miembro);
console.log(typeof miembro);

piloto = "avion";
console.log(piloto);
console.log(typeof piloto);

mascota = true;
console.log(mascota, typeof mascota); */

//-------OPERACIONES---------------

/* let c = miembro + " " + pais;
console.log(c, typeof c); */


/*---------------Ejercicios con operadores de comparación

Crea dos variables a = 10 y b = "10".
Verifica si son iguales con ==.
Verifica si son estrictamente iguales con ===.
Explica la diferencia en los resultados.

let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);
console.log("doble igualdas, alcance de verificacion de lo los caracter, triple igualdad el typo. Segun chat, con la doble comparacion intentará convertir el segundo tipo al mismo ddel primero para comparar");

Declara una variable edad = 18.
Comprueba si edad es mayor o igual a 18.
Comprueba si edad es menor a 18.

let edad = 18;
console.log(edad >= 18);
console.log(edad < 18);

Declara x = 15 y y = 20.
Verifica si x es mayor que y.
Verifica si x es menor o igual a y.

const x = 15;
const y = 20;
console.log(x > y);
console.log(x <= y);

Pregunta al usuario con prompt("Ingresa un número:") y compara:
Si el número ingresado es mayor a 100.
Si el número ingresado es igual a 50.

const numero = Number(prompt("por favor ingresa un numero"));
console.log(numero > 100);
console.log(numero === 50);

----------- Ejercicios con operadores lógicos

Declara edad = 25 y tieneLicencia = true.
Usa && para comprobar si la persona puede conducir.

const edad = 25;
const tieneLicencia = true;

let puedeConducir = edad === 25 && tieneLicencia === true;
console.log(puedeConducir);


Declara dia = "domingo" y clima = "soleado".
Usa || para comprobar si la persona puede salir a pasear si es domingo o hace soleado.

const dia = "domingo";
const clima = "soleado";
console.log("puedes salir a pasear: ", (dia === "domingo" && clima === "soleado"));


Declara llueve = false.
Usa ! para comprobar si no está lloviendo.

const llueve = false;
console.log(!!llueve);


Pregunta al usuario su edad con prompt.
Si la edad está entre 13 y 17, muestra "Eres adolescente".
Si es menor a 13, "Eres niño".
Si es mayor o igual a 18, "Eres adulto". */

/* const edadUsuario = Number(prompt("Hola, me dirias tu edad? :"));
console.log(
    (edadUsuario >= 13 && edadUsuario <= 17 && "Eres adolescente") ||
    (edadUsuario < 13 && "Eres niño") ||
    (edadUsuario >= 18 && "Eres adulto")
); */

//--------------------------------------------------------------------------------------------------------------
/////////////////-------------TARDE----------------/////////////////////////////////

//operadores ternarios 

/* let edadPersona = 15;
let nombrePersona = "kevin";

edadPersona >= 18 ? console.log("ERES ADULTO") : nombrePersona == "kevin" ? console.log("hola kevin") : console.log("quien eres?");
 */
//propt

//alert
/*
ejercicio:
pedir : edad, nombre, estaca
(sea minuscula o mayusculas, que lo reconozca igual)

evaluar: si es mayor de edad y si es de estaca miraflores: hola NOMBRE bienvenido al sistema

si es mayor de edad pero no es de la estaca: hola, se encuentra en la estaca equivocada

si es meno de edad: no tienes acceso

let edad = parseInt(prompt("Hola, por favor ingresa tu edad: "));
let nombre = prompt("ahora ingresa tu nombre: ");
let estaca = prompt("por ultimo ingresa el nombre de tu estaca: ");

edad < 18 ?
    alert("No tienes acceso") :
    edad >= 18 && estaca.toLowerCase() == "miraflores" ?
    alert("Hola" + " " + nombre + " " + "bienvenido al sistema") :
    alert("Hola " + nombre + " se encuentra en la estaca incorrecta");

*/


//--------------------------////////////////////////////////-------------------

// 1. MAYOR DE TRES NÚMEROS
// Pide tres números al usuario y muestra cuál es el mayor usando comparaciones.
// (Tip: puedes usar if...else o anidando ternarios)
/* const num1 = parseInt(prompt("Hola. por favor, ingresa un numero: "))
const num2 = parseInt(prompt("Por favor, ingresa otro numero: "))
const num3 = parseInt(prompt("Por favor, ingresa un ultimo numero: "))

if (num1 === num2 && num2 === num3) {
    console.log("Los tres numeros son iguales")
} else {
    num1 >= num2 && num1 >= num3 ?
        console.log("el numero mayor de los tres es: " + num1) :
        num2 >= num1 && num2 >= num3 ?
        console.log("el numero mayor de los tres es: " + num2) :
        console.log("el numero mayor de los tres es: " + num3)
} */



// 2. CONTRASEÑA SEGURA
// Pide al usuario una contraseña.
// Debe tener al menos 6 caracteres Y no ser "123456".
// Si cumple muestra "Contraseña segura", sino "Contraseña débil".
/* const password = prompt("Hola. Por favor ingresa una contraseña que cumpla con los siguientes requisitos: tener 6 caracteres, y no ser 123456")

password.length >= 6 && parseInt(password) != 123456 ?
    console.log("Contraseña Segura") :
    console.log("Contraseña Devil"); */




// 3. ACCESO AL CLUB
// Pide la edad y si tiene membresía (si/no).
// Puede entrar si es mayor de 21 O tiene membresía VIP.
// Usa operadores lógicos y muestra con alert.
/* const edad = parseInt(prompt("Hola, por favor ingresa tu edad: "))
const miembro = prompt("Eres miembro vip(si o no)? ")

edad >= 21 || miembro == "si" ?
    alert("puedes pasar") :
    alert("No puedes pasar");5 */


// 4. JUEGO DE DADOS
// Pide dos números (entre 1 y 6).
// Si ambos son iguales → "Empate".
// Si la suma es mayor o igual a 10 → "Ganaste".
// Sino → "Perdiste".
/* const num1 = parseInt(prompt("por favor, ingresa un numero (entre 1 y 6)"))
const num2 = parseInt(prompt("por favor, ingresa otro numero (entre 1 y 6)"))

if (num1 == num2) {
    alert("los numeros son iguales")
} else {
    (num1 + num2) >= 10
        ?
        alert("Ganaste") :
        alert("perdiste")
} */


// 5. TIENDA DE DESCUENTO
// Pide el monto de compra.
// Si el monto es mayor o igual a 100 → 20% de descuento.
// Si está entre 50 y 99 → 10% de descuento.
// Si es menor de 50 → sin descuento.
// Usa operador ternario anidado.


// 6. VERIFICACIÓN DE EMAIL
// Pide al usuario un texto (su email).
// Si contiene el carácter "@" → válido, caso contrario inválido.
// Usa comparación y un ternario.


// 7. CLASIFICACIÓN DE NOTA
// Pide la nota (0 a 100).
// - 90 o más → "Excelente"
// - 70 a 89 → "Bueno"
// - 60 a 69 → "Regular"
// - Menos de 60 → "Reprobado"
// Usa if + operadores de comparación.


// 8. PUEDES VIAJAR
// Pide edad y si tiene pasaporte (si/no).
// Puede viajar si es mayor de 18 Y tiene pasaporte.
// Si no cumple, mostrar "No puedes viajar".
// Resuélvelo con un ternario.


// 9. NÚMERO DENTRO DE RANGO
// Pide un número.
// Si está entre 10 y 20 (incluidos) mostrar "Dentro del rango".
// Si no, "Fuera del rango".
// Usa comparación + &&


// 10. JUEGO DE PIEDRA, PAPEL O TIJERA
// Pide al jugador su opción (piedra/papel/tijera).
// Genera una opción para la computadora (elige tú manualmente).
// Usa comparaciones y lógicos para decidir quién gana.
// Ej: piedra gana a tijera, tijera gana a papel, papel gana a piedra.
/* 
    pida a un usuario q ingrese un menu de opciones donde 
    1 lunes
    2 martes
    3 miercoles
    4 jueves
    5 viernes
    6 sabado
    7 domingo
    si es un dia entre lunes y viernes entonces mostrar
    "tienes clases de funvañ"
    pero si es sabado mostrar
    "tienes el dia libre"
    y si es domingo
    "debes ir a la iglesia"
    cualquier opcion fuera de esas debera mostrar un mensaje de alerta
    "error en la opcion seleccionada"
*/

const opcion = parseInt(prompt(`Hola, por favor elije una de esas opciones: 
    1.Lunes, 
    2. Martes, 
    3. Miercoles, 
    4. Jueves,
    5. Viernes,
    6. Sabado,
    7. Domingo 
    `))

if (opcion >= 1 && opcion <= 5) {
    alert("tienes clases de Funval")
} else if (opcion === 6) {
    alert("tienes el dia libre")
} else if (opcion === 7) {
    alert("debes ir a la iglesia")
} else {
    alert("error en la opcion seleccionada")
}
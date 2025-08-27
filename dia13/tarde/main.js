/*
Ejercicio 1: Sistema de Votación (Mayoría de 3 Candidatos)

Contexto: En una elección hay 3 candidatos (A, B y C). 
Se pide al usuario el número total de votantes y luego cada voto 
(escrito como “A”, “B” o “C”). 
Al final, se debe mostrar quién ganó, o si hubo empate.
*/

// preguntar y verificar (cuantos votantes : Numero)
// validar respuesta del usuario (verifico A, B, C : devolver opcion)

let valido = false;

function validarCandidato(dato) {
    function minuscula(dato) {
        let convertido = dato.toUpperCase
        return convertido
    }

    let voto = minuscula(dato)
    if ((voto === "A" || voto === "B") || voto === "C") {
        return valido = true;
    }
}



// contar las votaciones (contar la votacion)

function corroborarResultados(votosA, votosB, votosC) {
    let mensaje = "Resultados finales:\n";
    mensaje += "A: " + votosA + " votos\n";
    mensaje += "B: " + votosB + " votos\n";
    mensaje += "C: " + votosC + " votos\n\n";

    if (votosA > votosB && votosA > votosC) {
        mensaje += " Ganador: Candidato A";
    } else if (votosB > votosA && votosB > votosC) {
        mensaje += " Ganador: Candidato B";
    } else if (votosC > votosA && votosC > votosB) {
        mensaje += " Ganador: Candidato C";
    } else if (votosA === votosB && votosA > votosC) {
        mensaje += " Empate entre A y B";
    } else if (votosA === votosC && votosA > votosB) {
        mensaje += " Empate entre A y C";
    } else if (votosB === votosC && votosB > votosA) {
        mensaje += " Empate entre B y C";
    } else {
        mensaje += " Empate entre A, B y C";
    }

    return mensaje;
}
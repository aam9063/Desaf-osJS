/*
Rescata el estudiante
Utilizar los métodos pop y push para la realización del desafío
En este desafío tu función solution recibirá 3 parámetros:
estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe de devolver un array de elementos con las siguientes indicaciones:
• Si el parámetro deathCount es igual a 0, debe de devolver un array con los mismos elementos que 
tenía el array de estudiantes y agregando el elemento nuevo al final.
• Si el parámetro deathCount es mayor que 0, debe de devolver un array con los mismos elementos
 del array estudiantes, pero eliminando la cantidad de estudiantes que indica el número deathCount 
 y agregando el elemento nuevo al final.
¡Aclaración!: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar 
la cantidad de estudiantes que indica el número deathCount.
Los dividimos en tres ejemplos:

Ejemplo 1:
El array estudiantes contiene los elementos “Nico” y “Zulle. El número deathCount es igual a 0.
 Y el nuevo estudiante es “Santin”. Al deathCount ser igual a 0, “Nico” y “Zulle” se quedan. Y 
 agregamos “Santi” al final.

Input:
    solution(["Nico", "Zulle"], 0, "Santin")

Output:
    ["Nico", "Zulle", "Santin"]
*/

function solution(estudiantes, deathCount, nuevo) { // Se crea una función llamada solution que recibe un array estudiantes, un número entero deathCount y un string nuevo
    if (deathCount === 0) { // Se verifica si deathCount es igual a 0
        estudiantes.push(nuevo); // Se agrega el string nuevo al final del array estudiantes
    } else {
        for (let i = 0; i < deathCount; i++) { // Se crea un ciclo for que se ejecutará la cantidad de veces que indique deathCount
            estudiantes.pop(); // Se elimina el último elemento del array estudiantes
        }
        estudiantes.push(nuevo); // Se agrega el string nuevo al final del array estudiantes
    }
    return estudiantes; // Se retorna el array estudiantes
}

console.log(solution(["Nico", "Zulle"], 0, "Santin")); 

/*
Ejemplo 2:
El array estudiantes contiene los elementos “Juan”, “Juanita” y “Daniela”. El número deathCount es 
igual a 1. Y el nuevo estudiante es “Julián”. Al deathCount ser igual a 1, el último elemento del 
array de estudiantes (“Daniela”) se debe ir. Y agragamos “Julián” al final.

Input:
    solution(["Juan", "Juanita", "Daniela"], 1, "Julián")
Output:
    ["Juan", "Juanita", "Julián"]
*/
console.log(solution(["Juan", "Juanita", "Daniela"], 1, "Julián")); 

/*
Ejemplo 3:
El array estudiantes contiene los elementos “Nath”, “Luisa” y “Noru”. El número 
deathCount es igual a 2. Y el nuevo estudiante es “Cami”. Al deathCount ser igual a 2, 
los últimos 2 elementos del array de estudiante (“Luisa” y “Noru”) se deben ir.
 Y agregamos “Cami” al final.
*/
console.log(solution(["Nath", "Luisa", "Noru"], 2, "Cami"));
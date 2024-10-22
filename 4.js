/*
Detecta el elemento impostor de un array
En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true 
si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier
otro tipo.
function solution (arraySecreto) {
    // Tu código aquí
}

Input:
solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

Output:
true
false
*/

function solution(arraySecreto) { // Se crea una función llamada solution que recibe un array arraySecreto
    if (typeof arraySecreto[0] === 'string') { // Se verifica si el primer elemento del array arraySecreto es de tipo string
        return true;
    } else {
        return false;
    }
}

console.log(solution(["Huevo", "Gallina", "Vaca"]));
console.log(solution([1, "Gallina", "Vaca"]));

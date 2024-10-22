/*
Retorna el tipo
En este desafío encontrarás una función llamada solution que recibe un parámetro llamado valor.
Debes encontrar el tipo de dato del parámetro valor y retornarlo desde la función solution.
Recuerda que el parámetro valor será distinto por cada distinta forma en que ejecutemos la función solution.
Ejemplo:
Dados los siguientes llamados a la función solution:
solution(1);
solution("Toni");
solution(true);

debes obtener los siguientes resultados:
"number"
"string"
"boolean"
*/

function solution(valor) {
  return typeof valor; // Se retorna el tipo de dato del parámetro valor
}

console.log(solution(1)); 
console.log(solution("Toni")); 
console.log(solution(true)); 
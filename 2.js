/*
Compara un número secreto
En este desafío vas a recibir un parámetro secreto en la función solution. Debes
retornar true si el número secreto es mayor a 5 y false si es menor o igual.

function solution(secreto) {
  //Tu codigo aquí
}
*/

function solution(secreto) { // Se crea una función llamada solution que recibe un número secreto
  if (secreto > 5) { // Se verifica si el número secreto es mayor a 5
    return true;
  } else {
    return false;
  }
}

console.log(solution(1)); 
console.log(solution(5)); 
console.log(solution(10)); 
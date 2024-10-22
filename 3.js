/*
Tienda de Tecnología
En este deafío debe de devolver un mesanje distinto dependiendo del artículo de tecnología que recibas:
- Si recibe un "ordenador", debe de devolver el mensaje "Con mi ordenador puedo programar usando JavaScript".
- Si recibes un "movil", debe de devolver el mensaje "Con mi movil puedo aprender utilizando la app del centro".
- Si recibes "wifi", debe de devolver el mensaje "¡Allá donde viaje puedo aprender JavaScript!"
- Y si no recibes ninguno de estos valores, debe devolver el mensaje "Artículo no encontrado".

export function solution(article) {
    //Tú código aquí
}

Input:
Solution('ordenador')
Solution('móvil')
Solution('wifi')
Solution('no encontrado')

Output:
Con mi ordenador puedo programa en JavaScript
Con mi movil puedo aprender utilizando la app del centro
¡Allá donde viaje puedo aprender JavaScript!
no encontrado
*/

function solution(article) { // Se crea una función llamada solution que recibe un string article
    if (article === 'ordenador') { // Se verifica si article es igual a 'ordenador'
        return 'Con mi ordenador puedo programar usando JavaScript';
    } else if (article === 'movil') { // Se verifica si article es igual a 'movil'
        return 'Con mi movil puedo aprender utilizando la app del centro';
    } else if (article === 'wifi') { // Se verifica si article es igual a 'wifi'
        return '¡Allá donde viaje puedo aprender JavaScript!';
    } else {
        return 'Artículo no encontrado'; // Se retorna el string 'Artículo no encontrado'
    }
}

console.log(solution('ordenador'));
console.log(solution('movil'));
console.log(solution('wifi'));
console.log(solution('no encontrado'));
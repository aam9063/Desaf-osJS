/*
Arregla el bug
Esta recibe un array "cars" que debería devolver el array filtrado únicamente con los 
objetos que tengan la propiedad "licensePlate".
Pero no está funcionando.

function solution(cars) {
    //Este es el código que no funciona
    return cars.find(function(car) {
    return true;
    } else {
     return false;
    }
    });    
}

La función sólo devuelve un objeto con el primer elemento que cumple los requisitos, no 
estamos recibiendo los demás elementos del array que también deberían pasar el filtro.
¿Cómo solucionarías el error?

Input:
const cars = [
    {
        color: 'red',
        brand: 'Kia',
        drivingLicense: false,
    },
    {
        color: 'gray',
        brand: 'Chevrolet',
        licensePlate: 'AAA111',
        drivingLicense: true,
    },
    {
        licensePlate: 'RGB255',
    }
]
*/
// El bug está en el uso del método find, ya que este método devuelve el primer elemento que cumple con la 
// condición dada. Por lo tanto, se debe utilizar el método filter para obtener todos los elementos que
// cumplan con la condición.

function solution(cars) { // Se crea una función llamada solution que recibe un array cars
    return cars.filter(function(car) { // Se utiliza el método filter para filtrar los elementos del array cars
        return car.hasOwnProperty('licensePlate'); // Se verifica si el objeto car tiene la propiedad licensePlate
    });
}

const cars = [
    {
        color: 'red',
        brand: 'Kia',
        drivingLicense: false,
    },
    {
        color: 'gray',
        brand: 'Chevrolet',
        licensePlate: 'AAA111',
        drivingLicense: true,
    },
    {
        licensePlate: 'RGB255',
    }
];

console.log(solution(cars)); 


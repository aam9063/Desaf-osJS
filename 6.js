/*
Permiso de conducir
Este objeto puede contener diferentes propiedades. Debes de asegurarte que las tenga todas.
brand: (marca)
color: (color del coche)
licesePlate: (matrícula del coche). Si la tiene, devuelve el objeto original con la propiedad.
drivingLicense(carnet de conducir) como true. Si no lo tiene, devuelve el objeto original sin la 
propiedad.
drivingLicense (carnet de conducir) como false.

Input:
Prueba 1
solution({
    color: 'red,
    brand: 'Kia',
});

Prueba 2
solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
});

Prueba 3
solution({ licensePlate: 'RGB255'});

Output:
Prueba 1
{
    color: 'red',
    brand: 'Kia',
    drivingLicense: false,
}

Prueba 2
{
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
    drivingLicense: true,
}

Prueba 3
{
    licensePlate: 'RGB255',
    drivingLicense: true,
}
*/

function solution(car) { // Se crea una función llamada solution que recibe un objeto car
    if (car.hasOwnProperty('licensePlate')) { // Se verifica si el objeto car tiene la propiedad licensePlate
        car.drivingLicense = true; // Si la tiene, se agrega la propiedad drivingLicense con el valor true
    } else {
        car.drivingLicense = false; // Si no la tiene, se agrega la propiedad drivingLicense con el valor false
    }
    return car;
}

console.log(solution({
    color: 'red',
    brand: 'Kia',
})); 

console.log(solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
})); 

console.log(solution({ licensePlate: 'RGB255' })); 


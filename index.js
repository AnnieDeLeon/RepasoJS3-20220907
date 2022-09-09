// arrow functions

function correr() {
    return ''
}

let correr = () => ''




function sumar(numero1, numero2) {
    return numero1 + numero2;
}

let suma = sumar(10, 10);
console.log(suma);


let sumar = (numero1, numero2) => numero1 + numero2; //valor de retorno despues de la flecha
let suma = sumar(10,10);
console.log(suma);

// si se le dice explicitamente se le indica dentro de las llaves

let sumar = (numero1, numero2) => {
    const PI = 3.1416;
    let resultado = numero1 + numero2 + PI;
    return resultado;
};

let resultado = sumar(25, 30);
console.log(resultado);


// ejercicio 8 generar una función que me retorne un string que diga 'hola koders y después imprimir ese valor en la consola con ayuda de console.log() 
let saludo = () => 'Hola koders';
let saludar = saludo ('Hola koders');
    console.log(saludar);

// ejercicio 9 generar una función que me retorne el resultado de una operación matemática, el nombre de la operación y los valores con los que se ejecutara la operación serán los parámetros de dicha funcion, por ejemplo:
let resultadoSuma = operacionMatematica('suma', 10,10);
let resultadoResta = operacionMatematica('resta', 10,10);
let resultadoMultiplicacion = operacionMatematica('multiplicación', 10,10);

// Suma
let suma = (num1, num2) => {
    const add = 'Suma, ';
    let result = add + (num1 + num2);
    return result;
}
let resultAdd = suma(20, 10);
console.log(resultAdd)

// Resta
let resta = (num1, num2) => {
    const substraction = 'Resta, ';
    let result = substraction + (num1 + num2);
    return result;
}
let resultSubs = resta(20, 10);
console.log(resultAdd)


// Multiplicacion


// ejercicio 10.- generar una función que me retorne un objeto literal, con las siguientes propiedades(nombre, edad, genero, dirección), la propiedad nombre debe ser un objeto que tenga las siguientes propiedades(nombre, apellidoPaterno y apellidoMaterno)
const generarObjetoLiteral = () => { // es objeto literal porque tiene llaves
    let persona = {
        nombre: {
            nombre: 'Aldo',
            apellidoPaterno: 'Aldaco',
            apellidoMaterno: 'Contreras'
        },
        edad: 30,
        genero: 'masculino',
        direccion: 'Mar del Norte',
    };

    return persona;
};

let resultado = generarObjetoLiteral();
console.log(resultado);


let individuo = (obj) => {
    nombre:'Juan'
    edad: 23
    genero: 'masculino'
    direccion: 'Aguascalientes'
    return {

    }
}

"Un buen análisis de un enunciado (problema) es la mitad de la resolución"

// TAREA
//11.- generar una función que me retorne un arreglo que contenga los nombres de los koders de la generación 21 
//12.- generar una función que imprima el nombre de un koder en particular si es que existe en la lista si no existe imprimir el mensaje 'Ese alumno no pertenece a esta generación'


// For in, recorre objetos, se puede entrar a cada una de sus propiedades. Propiedad en propiedad
// For of,  

let carro = {
   puertas: 4,
   color: 'gris',
   marca: 'seat',
   llantas: 4,
   dueño: 'Aldo'
}

// se accede a las propiedad de un objeto con las llaves
console.log(carro.puertas);
console.log(carro['puertas']);


for(let propiedad of carro) {

};

console.log()

if (carro.dueño !== undefined) {
    console.log('La propiedad si existe')
} else {
    console.log('La propiedad no existe');
}
console.log(carro['puertas']);

for(let caracteristica in carro) {
        console.log(caracteristica);
    }
}


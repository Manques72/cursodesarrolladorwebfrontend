//'use strict' si pones esto si no pones let te lo diría
//Ambitos o Scope en ingles de las variables

//el 1º es el global, para crear una variable global pongo let vari

let var1 = 20;

//para usar una function ademas de prueba habría que ejecutarla y entonces tendre que nombrarla de nuevo
//no se accede nunca a las variables globales desde las funciones es mala practica aunque funcione
//lo normal es que sea independiente del contexto que la ejecute
//mala practica no es pura, tiene efectos colaterales no devuelve nada
function prueba() {

    console.log(var1)
}

prueba()


//Lo mismo con buenas prácticas

let var2 = 30

function pruebaBien (x) {
    console.log(x)
}

pruebaBien(var2)

//Nuevo en ES6 usar let en lugar de var

function condicional() {
    let ext = 22
    if(true) {
         let data = 23   
         console.log(ext)
         console.log(data)
    }
    console.log(ext)
       //  console.log(data)  daría un error interno al bloque que es el if
 }
//la variable ext funciona para dentro y para fuera sin embargo la variable data dentro del if
//las variables normalmente se ponen fuera de los if aunk no siempre
condicional()

let x = 12

function otraPrueba () {
    let x = 23
    // sin embargo si pudiera poner un x=23 aparecería en vez de 12 daría 23
   // x = 23 dentro de la funciòn no he creado ninguna variable
    console.log('Dentro de la funcion x vale', x)
}

otraPrueba ()
console.log('Fuera de la función x vale', x)

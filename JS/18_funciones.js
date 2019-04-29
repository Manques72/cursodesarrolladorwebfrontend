//console.log(suma(4, 6))

//console.log(resta(6, 3)) nunca va a funcionar porque no tiene hoisting (alzamiento)normalmente siempre estan abajo, es la funcion declarada y no 
//hace falta en la de suma y sí que tiene diferencia con la función asignada no tiene nombre

//si ya tenemos una función hecha
//** * @param x : num 
// * @param y : num */
 
/**
 * Función declarada
 */


function suma(x=0, y=0) {
    return +x + +y//esta mejor poner los ++
}

/**
 * Funcion asignada
 * 
 * Una funcion es un dato de tipo objeto y esto es lo que hace de js un lenguaje functional
 * no como cosas a parte
 */

 let obj = {}
 let resta = function (x=0, y=0) {
     return x - y
 }//esto se llama funcion anónima el objeto no tiene nombre y se la asignamos a la 
 //variable resta


//no tengo manera de saber si es declarada o asignada en el console log pero si veo la parte de arriba
//es bastante diferente
/**
 * En ES6 aparecen las arrow (=>) function
 */

 /*let producto = function (x=1, y =1) {
    return x * y
     }*/
//let producto = (x=1, y=1) => {return x*y}. lo de abajo sería lo mismo que:
let producto = (x=1, y=1) => x*y //esto es una funcion arrow= cuando alguien te pone =>

let cuadrado = x => x*x //cuando el nº de parametros es solo x pues tb se pueden quitar los parametro
//es una funcion arrow no hacen falta parentesis ni return mas abreviada
console.log(producto(4,7))
console.log(cuadrado(6))



/**
 * Programa que calcula si un número es par o impar
 * y muestra el resultado en consola
 */
/**
 * Function calculaQueEs no es verdadero y falso porque no es una condición, así que mejor que devuelva un nº qeu yo voy a decidir lo que es
 * Como queremos que nos coja un nº es un valor el que necesitamos pensamos en la caja negra que
 * Parametros: un valor tipo nº
 * entra y que sale entra un nº y sale un texto podría ser @param num: number
 * @returns: number podría ser 0 pares o 1 impares, esto habria que hacerlo mentalmente
 * hay que pensar que va a devolver: posibles valores= 0 y 1
 * Esto es definir el interfaz lo que falta es implementarla, es donde tengo qeu pensar como se calcula par o impar
  */
/*function calculaQueEs(num) {
    //para encontrar un nº par es divisible entre 2 sería un o o un 1 num % 2 y si 
    //yo decido que tenga que devolver un 3 y un 5 tengo que poner un if y una variable let r
    //en booleans.js aprenderme de memoria, el 0 es falso, undefined, NaN, null
    let r
    if (!num % 2) {
//nº par
r=2
    } else
//nº impar
r=1//que quiero devolver
    return 
}*/
//Tipos de Strings
/**posibles formas para hacer un string, let cadena = 'Hola Mundo'
 * en ES6 hay un nuevo tipo de cadenas que se llama template string y se hace con las comillas francesas
 * cadena = `Hola Mundo`
 */
/*let cadena = 'Hola Mundo'
cadena= "Hola Mundo"
cadena = `Hola
Mundo` //esta sí admite interpolacion cadenas templates, admiten formato admiten salto de línea
//interpolación de variables dolar llave y llave al otro lado, busca una variable qeu se llame así y interpola buscala
let user = 'Pepe'
cadena = 'Hola' + user +', que tal estas'//interpolar variables dentro del template state 
//$ interpolar variables para no poner mas y mas y las comillas tendrían que ser inclinadas si no no te funcionará
cadena = `Hola ${user}, que tal estas`//mucho mejor esto es una interpolación de plantillas


console.log(cadena)
*/

/*let x = 12
 console.log(x % 2) //esto vería el resto o sea 12 entre 2 es igual a cero
 //si pongo un 13 el resto al dividir por 2 es 1*/

 /* Posibles valores:
    0 pares
    1 impares
    2 numeros decimales
    3 no numeros ¿cómo se qeu es un número lo que me llega typeof
    2 enfoques un 22 con comillas como string comprobar que es un numerable es decir '22'
    es convertible en numero por ello podría isNaN
 */

function calculaQueEs(num) {
    let r
    if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean') {//si esto es array si esto es boolian que ponemos || console
       //si num es identico a true num===true || num===false
       // no es un número
             // como no le gusta tener tantos return 3, por ello ponemos r
        //esto es un no numero NaN es = no numero si me manda un dato con no numero me devolvería un 3
        r = 3
    } else if (parseInt(num) !=num) {
        r = 2 //si tiene parte decimal se cumple y devolvería un 2

    } //el parseInt me dara un numero entero, si pongo!= num es distinta a la decimal. Al a ver un return me daría lo mismo poner un else, otra opcion es crear una variable con el resultado
     else {
         r = num % 2
     }
       //porque no le gusta tener tantos return
    // solo ponemos r en vez de return num % 2
//podría hacerse mas facil con lo de Ispar, num sería como se recibe ese numero dentro de las funciones
return r
}
/**
 * Podría hacer una function booleana y la voy a llamar is par o is impar, si algo no es par es impar. ¿eres par?
 * Function isPar y el parámetro sería un número @param num: number
 * @returns: boolean
 * Posibles valores
 *  true pares
 *  false impar
 * Genera excepciones si el parámetro no es numérico
 * 2 si el valor es un nº decimal
 * 3 si el valor no es número
 */
function isPar(num) {
  if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean')
    throw 2 'El valor es un no numero' 
} else if (parseInt (num) !=num) {
    throw 3 'El valor es un numero decimal' //comprueba si hay una excepcion y ahora lo que quiero es poner un try catch
} 
  //Crear una excepción
    return !(num % 2)//como quiero cambiarlo en buliano se pone !
}

function isImpar(num) {
    return !!(num % 2)//al final como la tengo que convertir en booliano sería false false

}
/**
 * Function mostrar
 * @param isPar: boolean //sera true si cuando el nº es par usamos isPar
 * @param num: number
 * @returns: void //no devuelve nada porque es una console y aquí en vez de nada o undefined es vacío void
  */
/*function mostrar(isPar, num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es Impar`
    ]
    if (isPar) {
        console.log(mensajes[0])
    } else {
        console.log(mensajes[1])
    }
}*/


//me falta el cuerpo del programa, me invento el 23 por ver si funciona y sino busco otro

function mostrar(num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es Impar`,
        `El número ${num} es Decimal, que no es ni par ni impar`,
        `El valor ${num} no es un número`
    ]
    console.log(mensajes[code])
}
let i
try {
   i = (isPar(num)) ? 0 : 1
} catch (error) {
    //console.log(error)
    i = error
    }
    console.log(mensajes[i])
}
   /* let i
    if (isPar) {
        i=0
    } else {
        //el else no hace falta porque para que necesitamos que se quede como esta y simplificarlo mas el ternario
/*let i =1
if (isPar) {
    i=0}*/
  /*let i
    }
    console.log(mensajes[i])
}Esto tendría que terminarlo*/

/**
 * Function mostrar2
 * @param code: number //sera 0 sies par y 1 si es impar
 * @param num: number
 * @returns: void
 */

///Versión final

 function mostrar2 (code, num) {
     let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es Impar`,
        `El número ${num} es Decimal, que no es ni par ni impar`,
        `El valor ${num} no es un número`
     ]
     console.log(mensajes[code])
 }
let number = 23
number = 28
number = 'Pepe' //como lo hago para que diga el programa si no es un número
number = 34,67 //no es ni par ni impar no es un entero un nº decimal
//mostrar(isPar(number), number)
//mostrar2(calculaQueEs(number), number)//el code ejecutando calcula qué es
mostrar2(number % 2, number)

let numero = 0
//numero = 25
//numero = 30
//numero = 'Pepe'
numero= 3.3
numero = {}
numero = []
numero = true
numero = false

mostrar(number)

//console.log(typeof numero === 'boolean')
//mostrar2(calculaQueEs(numero), numero)

//control de errores o de excepciones se usa en las funciones que son necesarios sino generar
//esta estructura para generar nuestros propios errores. y en vez del try catch se pone try let
/*try {
        noExiste ()
} catch (error) {
    console.log('Lo siento, ha habido un error')
}*///podemos usar throw para generar un error
try {
    let x = 3
    throw 'Probando un error'
} catch (error) {
console.log('Lo siento, ha habido un error')
}
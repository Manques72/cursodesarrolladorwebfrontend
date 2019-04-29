/**
 * Programa para calcular los nº de la serie de Fibonachi por debajo de un valor dado o incluido este valor
 * si pusieramos un 8 habría uqe poner un <=
 * 
 * Partiendo de 0 y 1, cada elemento de la serie se calcula como la suma de los 2 anteriores
 * el 0 y el 1 me está diciendo que tengo dos variables la ultima y la penultima
 * se podrían llamar i y j pero se pueden llamar como se quiera
 *  */
/** 
 * Function fibonachi
 * Lo 1º que hay que definir son los parámetros, un solo parametro coge un límite y luego devuelve un array
 * @param el valor dado es un límite el 0 no porque ya nos lo dicen
 * @param limite: number
 * y que recibe un array, quiero hacer una función purav vamos que un console log lo haría fuera de la function
 * se pone array para que no sea una lista interminable de nºs
 * @returns: array[number]
 */

 function fibonacci (limite) {
      //los dos primeros elementos de la serie son 0 y 1 y ahora viene iterar una vez y otra
     let i = 0
     let j = 1   
     let serie = [i]     
     //como no tengo ni idea un bucle no me valdria un bucle for porque lo qeu tengo es un límite pero no el nº de veces
     //se podría hacer con un bucle for infinito y luego salirte cuando quieras
     //
     /** for (let k = 0; k < Infinity; k++)node {const element = array[k];
        if ( ) {
           // continue mejor que no porque si no no se para se daría control c para pararlo
           //
                 break , no poner el break sino while que es mucho mejor
        }
        */
     while (j <= limite) {//si pongo j <= es para que salga el 8 o no, mientras no se que se sale con el while
         let next = i + j //como se guarda un elemento en un array es con el push
         //serie[serie.length] = meter en el array serie.length es la longitud, si tengo a, b, c y d es 4 la longitud la l=4 pero como empe
         //empezó a contar por cero entonces l=4 será la siguiente de la que venga la d
         //la function no muestra nada, solo quiere calcular la longitud del array array[array.length]
         //a, b, c, d, en vez de poner la function serie es mejor push es empujar añadir algo al final de un array
         //serie.push(next)ponemos next porque queremos añadir al array next 
        //como no quiero para nada el next ponemos 
        i = j //he movido dos posiciones los contadores, i y j
        j = next
        serie.push(i)
                
     }
    
     return serie 
 }

 //let limite = 8
 //console.log(fibonacci(limite))
 
/**
 * Function fibonacciFor
 * @param limite: number
 * @returns: array[number]
 */

 function fibonacciFor(limite) {

    let i = 0
    let j = 1
    let serie = [i]

    for (let index = 0; index < Infinity //array.length le pongo 50 pero mejor infinity aunque queda feo
        ; index++) {
            let next = i + j
            i = j
            j = next
            //ahora queremos almacenar i y por eso ponemos un push
            serie.push(i)
            if (j>limite) {
                break 
               // continue
            }
        }
        return serie
 }
 //let limite = 8
 //console.log(fibonacciFor(limite))

 //cuando tienes un limite y tú no controlas el nº de vueltas tienes que usar un while no un for y un if
function fibonacciFor(limite) {

    let serie = [0]
    let next
 for (let i = 0; j = 1; i < limite, i=j, j = next) {
   
    serie.push(j)
    next= i + j
}
return serie
 }

 let limite = 8
 //console.log(fibonacciFor(limite))
 
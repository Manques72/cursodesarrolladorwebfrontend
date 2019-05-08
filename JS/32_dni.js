/**
 * Comprobar la letra del dni, function calcularLetraDni
 * LA LETRA SE ASIGNA A PARTIR DE UN ARRAY conocido o preestablecido,
 * seleccionando la posición correspondiente al resto del nº entre 23
 * @param dni: string, porque el dni no es un nº es un codigo
 * @returns: string
 */





function calcularLetraDNI(dni = '') {
    letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y','F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 
'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//let num = dni % 23 no hace falta ponerlo porque no lo vamos a usar mas veces
//return letrasDNI[num] esto tb nos sobra vale con lo siguiente
return letrasDNI[dni % 23]
}

/**
 * function comprobarLetraDNI, mejor le vamos a llamar isLetraDNIValida
 * @param dni: string, (formato nnnnnnnnL)
 * @returns, aquí se podría poner Isvalidodni sería true false y sino 0,1
 * una function mejor que no describa nada, booliana
 * @returns: boolean
 * lo primero que hay que hacer es separara el nº en letra, y luego
 * funciones de cadenas no le gusta y lo hace todo por arrays. ¿cuánto mide mi cadena
 * dni.lenght ¿qué tengo almacenado? un number
 * el mas bajo 1R
 * 99999999R y el mas alto
 * 1R - LENGHT = 2
 * 99999999R - lenght = 9
 * o sea que la posición que queremos es dni.lenght-1
 */
function isLetraDNIValida(dni = '') {
    r=false //como es booliana
    let letra= dni[dni.lenght-1]
    let numero= dni.slice(0, dni.lenght-1) //lo vamos a hacer por string, empiezo por 0
//como devuelvo letra y número con una booliana el return no me vale para nada pero luego lo quitare
    //return [letra, numero]
    numero = formateaNumero(numero)//esto esta bien pero solo me vale para ahora sin embargo
    //la de formatear número no me vale para mas
    //ahora quiero ver si es válido
    if (letra ===calcularLetraDNI(numero)){r=true}//no hace falta  poner un else
    return r     
    }

/**
 * function formateaNumero
 * @param cadena: string, el returns lo quiero tipo number aunque me da igual es un string
 * @returns: string
 * comprobar elemento por elemento lo que no es número
 * habría que hacer un bucle como no sé hacer una cadena así que tendría que convertirlo
 * en un array para dejar el formato y esto se hace con let aCadena = y buscar la función que convierte una cadena en un array
 * es un split y un separador para que me separe las cosas como cadena
 * esto me convertiría la cadena en array= let aCadena = cadena.split('')
 * y luego join ahora mismo no pone y luego un for
 * tengo que comprobar que cada elemento es un número distinto de NaN y hay una function is NaN
 * convierte las cosas en número y por eso se pone el If (isNaN) y cada uno de los números
 */

 function formateaNumero(cadena = '') {
     let aCadena = cadena.split('')
     for (let i = 0; i < aCadena.length; i++) {
         const item = aCadena[i];//en vez de element ha puesto item aunque da igual
         if (isNaN(item)) {
             aCadena.splice(i,1)//para que te quite los elementos i sería el primer elemento, 
             //lo 1º es la posición y luego el nº
         }
         
     }
     //cuando termine de hacer el bucle, pasar el array que ya está limpio a cadena y por eso uso join
     return aCadena.join('')//si quisieramos que fuera un nº pondriamos:
     //return +aCadena.join('')
 }

(function () {
    let miDNI = '503.399-B'
    //console.log(calcularLetraDNI(miDNI))
    console.log(isLetraDNIValida(miDNI))
    //console.log(formateaNumero(miDNI))
})()
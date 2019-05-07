/**
 * Dada una cadena de caracteres hay que indicar si está formada sólo por letras
 * mayusculas, minúsculas o las dos
 * siempre hay que hacerlo con funciones
 */
/**
 * function mostrar, sí tiene parametros, lo que quiero es que salga un mensaje
 * function comoEsLaCadena
 * @param: cadena: string, solo hace el console por eso no devuelve nada no hay otra funcion
 * que haya que devolverle mas datos
 * @returns: void
 * entre los {} hay que poner un array, el formado un array sería let mensajes = ['La cadena...']
 *  
 */
//he metido la funcion de probar cadena y tendría una function prueba para almacenar todo esto la let texto
//y todo lo demas esto es nuevo del ejercicio 27, así solo tengo la function comoEsLaCadena y tb
//haría function prueba y también function anónima autoejecutada es para vacilarte un poco
function comoEsLaCadena(cadena = '') {
    let mensajes = [
        'La cadena está formada solo por letras Mayusculas',
        'La cadena está formada solo por letras Minúsculas',
        'La cadena está formada solo por la combinación de las dos'
    ]
    //let i=probarCadena(cadena)
    //console.log(mensajes[i])
    console.log(mensajes[probarCadena(cadena)])




 /**
  * function probarCadena la vamos a llamar así y como es una cadena sería string
  * is no es porque es solo para tru o false, ahora habría que poner los parametros
  * @param cadena: string
  * @returns: number como es un number será 0, 1 y 2 y decido qué quiero 
  * 0= solo mayusculas
  * 1= solo minusculas
  * 2= combinación de ambas
  * esto es lo que se llama codificar lo decidimos nosotros
  * si tu pones function te sale = name (param), name ponemos probarCadena y parametro es cadena es una variable local
  * cadena variable local de tipo undefined pero quiero que sea string y quiero inicializarla
  * y por eso pongo cadena = '' con estas comillas ya es string y si nos colocamos encima de las comillas ya da toda la información
  * por eso lo inicializo
  */

function probarCadena(cadena = '') {
    //ahora viene el algoritmo y comparamos la cadena y la que queremos 
    //la variable donde se guarda el resultado
    /*let r = 0//recibe un string y el resultado es un number
    if(cadena === cadena.toUpperCase()) {
        r = 0
    } else if (cadena === cadena.toLowerCase())
        r = 1
        else {
            r = 2
        }
    return r
}*/
let r = 2//recibe un string y el resultado es un number
    if(cadena === cadena.toUpperCase()) {
        r = 0
    } else if (cadena === cadena.toLowerCase()){
        r = 1
        // con el r=2 con eso ya no me hace falta el r else {
           
        }
    return r
}
}


//ahora me queda probar mi function, me invento una cadena, una variable esta es la global para que no se
//llame como la otra para no liarnos
//ahora la meto como una function que no tiene nombre en ejercicio 27 no tiene nada global estaría muy bien
//encapsulado, esto ya es muy heavy pero para que no nos suene a chino, estos codigos se denominan closures
//para hacer programas mas compactos, tipos de cadenas
(function () {
let texto
texto = 'LO QUE NOS DE LA GANA'
comoEsLaCadena(texto)
texto = 'cualquier cosa que nos parezca'
comoEsLaCadena(texto)
texto = 'Ver si hay May y Min'
comoEsLaCadena(texto)
}) ()
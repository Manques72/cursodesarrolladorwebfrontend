//Existen los operadores aritméticos + - * % / modulo
let x = 22
let nombre = 'Pepe' //es string solo texto con ''
let z = '2' //es string por las comillas

let division = x / z //esto es un casting es temporal
//let division = 10 / 2, casting es un proceso temporal de modificación del tipo de una operacion
//por ejemplo x/z es = a 22/'2' y lo va a interpretar el 2 tb como número
//JS siempre puede convertir un string a number

console.log(division)
console.log(typeof z)//siempre va a ser string porque z es un string

division = x / nombre //como se asigna un nombre a pepe, Nan, not a number, es un nº, cq cadena de caracteres
//que no se puede asignar a valor se convierte en un not a number, es un valor, es un nº
console.log(division)
console.log(0/0)
console.log(1/0)

/* NaN equivale al concepto matemático de indeterminación
0 / n = 0
n / 0 = Infinito
0 / 0 = Indeterminado= JS lo llama NaN, es igual qeu el nº/Pepe y será NaN
*/


//Si quiero evitar indeterminaciones debo validar los datos, comprobar que el dato con el que voy a operar 
//cumpla una serie de requisitos y sera la funcion vuliana isNaN

function dividir (x, y) {
    if (isNaN(x) || isNaN(y) ) {
        console.log('Operadores inválidos')
        return
}
    console.log('La division da', x / y, '€')

}

dividir(x, z)
dividir(x, nombre)//no te lo reconoce y te dice operadores inválidos

console.log('La suma da', x + z) //el +es un valor sobre concatenaciones

//si hay strings tiene preferencia la concatenacion
console.log(x + z)

//para evitarlo tenemos que forzar el casting

/* console.log(parseInt si estoy seguro que son enteros sino haría parseFloat)
*/

console.log(parseFloat(x) + parseFloat(z)) //esto es para que vea que es numero las dos son forzar casting
console.log(Number (x) + Number(z))
console.log (+x + +z) //si pongo un + así se convierte en numero y hago siempre una transformacion temporal
//si pongo console.log(typeof z) seguirá siendo un string

console.log(typeof z)

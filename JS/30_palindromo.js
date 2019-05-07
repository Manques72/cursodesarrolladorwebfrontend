/**
 * Comprobar si una frase es un palíndromo
 * se llegue igual en ambos sentidos, sin contar los espacios
 * Amar da drama
 * Atar a la rata
 * function isPali
 * @param cadena: string
 * @returns= boolians
 */

 function isPali(cadena = '') {
     let r = true
     //let cadenaSinEspacios//lo convierto en array por palabras y lo vuelvo a juntar
    let cadenaSinEspacios = cadena.split('').join('').toLowerCase()
    //console.log(cadenaSinEspacios)
    let cadenaInversa = cadenaSinEspacios.split('').reverse().join('')//esto es por letra y la de sin espacios es por palabras
    //console.log(cadenaInversa)
    if (cadenaSinEspacios !== cadenaInversa) {
        r=false
    }//r = true como ya lo tenemos arriba se pone el !== y hay que poner r=false

     return r
     }
function isPali2(cadena = ''){
    let r = true
    let cadenaSinEspacios=cadena.split('').join('').toLowerCase()
    //console.log(cadenaSinEspacios)
    //let cadenaInversa=cadenaSinEspacios.split('').reverse.join('')
    let cadenaInversa = cadena.split('').reverse().join()
    console.log(cadena.toLowerCase)
    console.log(cadenaInversa)
    if (cadena.toLowerCase () !==cadenaInversa) r=false //mala practica
    return r
}

/*function isPaliShort(cadena = ''){
    console.log(cadena === cadena.split('').join('').split('').reverse().join(? true)
    return esto es para compactar con el short
}*/
/*(function () {//esta es una function de prueba, recibe un texto y me devuelve un boolian

    let textos = [
        'Esto no es un palíndromo',
        'Amar da drama'//hacemos bucle para que nos quede mas bonito y no estar todo el rato poniendo frases

    ]
    for (let i = 0; i < textos.length; i++) {
        const texto = textos[i];
        console.log(texto)
        console.log(isPali(texto))
        
    }
})()*/
//también podría hacer una funcion de prueba y ejecutar pero esta function creada no tiene nombre
//de ahí tantos los parentesis para que no me de error es sin nombre autoejecutada
function probar () {//esta es una function de prueba, recibe un texto y me devuelve un boolian

    let textos = [
        'Esto no es un palíndromo',
        'Amar da drama'//hacemos bucle para que nos quede mas bonito y no estar todo el rato poniendo frases

    ]
    for (let i = 0; i < textos.length; i++) {
        const texto = textos[i];
        console.log(texto)
        console.log(isPali(texto))
        
    }
}
probar ()
function suma(x, y) {
    /*let r = x + y
    return r*/
    return x + y
}//x, y son variables internas y number1, number2 son los nombres que yo pongo son externos
//no lo voy a ver en ningun sitio si no pongo el console log, si solo pongo suma no valdría
//funcion pura solo utiliza del exterior los parametros que le vienen de dentro porque son perfectamente
//reutilizables por ejemplo suma y la funcion mostrar texto no devuelve nada ningún valor solo nos da un texto
//operacion de interfaz la de mostrar texto y sin embargo sumarMal no va a hacer siempre lo mismo, no es pura

function mostrar (texto) {
    console.log(texto)
}
let number1 = 23
let number2 = 28
// console.log(r) daría un error, en vez de console.log ponemos mostrar, despues de mostrarme algo en la pantalla ya esta no darme un dato
//mostrar no es una función de calculo y sin embargo a la suma sí
let result = suma(number1, number2)
//se pone result como suma el valor de la variable r
mostrar(result)

//No se cumple la separac    de intereses o conceptos (separation of concerns)
//una función no puede ha    dos cosas a la vez, esta función funciona pero no lo hace bien
//mezcla dos tipos diferentes y separar las cosas
function sumarMal(x, y) {   
    let r = x + y
    console.log(r)
}

sumarMal(2,5)
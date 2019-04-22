function suma(x, y) {
    let r = x + y
    return r
}
//no lo voy a ver en ningun sitio si no pongo el console log, si solo pongo suma no valdría

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

//No se cumple la separación de intereses o conceptos (separation of concerns)
//una función no puede hacer dos cosas a la vez, esta función funciona pero no lo hace bien
//mezcla dos tipos diferentes y separar las cosas
function sumarMal(x, y) {
    let r = x + y
    console.log(r)
}

sumarMal(2,5)
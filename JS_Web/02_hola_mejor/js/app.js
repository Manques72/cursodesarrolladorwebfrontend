/**
 *  Funciones manejadoras de eventos (Event Handler) 
 * 
 * */
        
function saludar () {
    console.log('Hola desde una funcion en un fichero JS')
}

function despedirse () {
    console.log('Adios desde una funcion en un fichero JS')
}

function onMouseOver() {
    console.log('El ratón entró')
}

function onMouseOut() {
    console.log('El ratón salió')
}

function cuadrados(item) { return item * item}

/**
 * 
 * Accesos al DOM (Document Object Model)
 */

//window.onload = function () {
//forma mas moderna de hacerlo en hola moderno
function main () {
    let datos = [1,2,3,4,5]
    console.log( datos.map(cuadrados) )

    document.querySelector('#btn-saludar').addEventListener('click', saludar)
    // document.querySelector('button:nth-of-type(2)').onclick = despedirse
    document.querySelector('#btn-despedirse').addEventListener('click', despedirse)
    document.querySelector('#div-raton').addEventListener('onMouseOver', onMouseOver)
    document.querySelector('#div-raton').addEventListener('onMouseOut', onMouseOut)


}

//podemos poner una function autoinvocada aunk no se suele poner
(function () {

    document.addEventListener('DOMContentLoaded', main)
}) ()




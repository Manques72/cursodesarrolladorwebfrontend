/*Funciones manejadoras de eventos (Event Handler)
SIEMPRE VAMOS A TRABAJAR POR FICHEROS Y A FUNCIONES*/


function saludar () {
    console.log('Hola desde una funcion en un fichero JS')
}

function despedirse () {
    console.log('Adios desde un fichero JS')
}

function onMouseOver () {
    console.log('El ratón entró')
}
//parece un callback, es let datos = [1,2,3,4]
function onMouseOut () {
    console.log('El ratón salió')
}

function cuadrados(item) {return item * item}

let datos = [1,2,3,4,5]
//datos.map(item => item * item)
console.log(datos.map(cuadrados))
//esto son manejadoras de eventos pero tenemos que verlo como un tipo de callback

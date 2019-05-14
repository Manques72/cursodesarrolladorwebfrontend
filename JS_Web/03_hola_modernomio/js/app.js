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


/**
 * 
 * Accesos al DOM (Document Object Model)
 */
//esto son manejadoras de eventos pero tenemos que verlo como un tipo de callback

//aqui pondríamos onclick = cuando alguien haga un click en btn-saludar = function saludar en este caso no se pondrían
//llaves para que no se ejecute la función
//se podría hacer así pero es mucho mas facil poniendo un id 
//document.querySelector('#btn-saludar').onclick = saludar
//document.querySelector('button:nth-of-type(2)').onclick = despedirse
//manejador del evento de carga del DOM es el window.onload que es cargar




//document.query

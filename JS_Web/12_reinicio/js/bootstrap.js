import {controller} from './controller.js'
//la unica linea que puede hacer que importe, la palabra DOMContentLoaded
//va entre comillas el DOM tengo un listener de DOMContentLoaded, document object model es la palabra mas importante en JS
//QUIEN maneja este evento? pues el controller que para eso lo hemos instaladao
//como es una función no se instancia lo podemos hacer como si fuera un callback
//esperate a que cargue el DOM y 
//es un programa del cargador del controller
document.addEventListener('DOMContentLoaded', controller)

//se podría llamar de esta otra forma, es un Proceso asincrono, cuando se haya producido el evento que te digo
//ejecuta la función. La función principal podría estar en este fichero
//document.addEventListener('DOMContentLoaded', app) lo único que sé es que no se va a cargar automaticamente
//app() no es asincrona ni manejadora del evento ni que se haya cargado el DOM
/* Es buena practica crear un módulo aparte e importar la función ppal
function app() {
    console.log('App ejecutándose')
}
*/
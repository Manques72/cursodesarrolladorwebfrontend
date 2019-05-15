import {controller} from './controller.js'
//la unica linea que puede hacer qeu importe, la palabra DOMContentLoaded
//va entre comillas el DOM tengo un listener de DOMContentLoaded, document object model es la palabra mas importante en JS
//QUIEN maneja este evento? pues el controller que para eso lo hemos instaladao
//como es una función no se instancia lo podemos hacer como si fuera un callback
//esperate a que cargue el DOM y 
//es un programa del cargador del controller
document.addEventListener('DOMContentLoaded', controller)
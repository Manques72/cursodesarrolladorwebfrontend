/*en todos los programas de app.js esperar a que cargue el DOM*/

import {Saludador} from './saludador.js'

document.addEventListener('DOMContentLoaded', () => console.log(new Saludador()) )
    /*let app = new Saludador()
    console.log(app) ya no hace falta poner el let */
   
//ya está se pondría una lista de las instancias
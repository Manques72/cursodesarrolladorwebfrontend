/*en todos los programas de app.js esperar a que cargue el DOM*/

import { main } from './saludador.js'

document.addEventListener('DOMContentLoaded', main)
   //mi funcion main es la funcion que paso como funcion contentload del evento
   //como no hay objetos ejecuta la funcion main cuando el objeto este listo
   //que tenemos que guardar pues todo lo que guardabamos en constructor
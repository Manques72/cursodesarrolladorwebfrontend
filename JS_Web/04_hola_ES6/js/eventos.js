/**
 * lo mas moderno de ES6 SON LAS CLASES Y LOS MODELOS
 * va a manejar eventos, como son clases no hace nda solo, necesitamos un constructor
 * es imprescindible EL CONSTRUCTOR Y LUEGO UN this y luego la funcion saludar y lo que quiero
 * sacar por consola y sería this.msg porque en objetos todo va por this ya tendría mi primer método
 * manejadores de eventos
 * convertimos 
 */
export class Eventos {
    constructor () {
        this.msg = ['Hola desde una clase en un fichero ES6',
    //estoy poniendo todo dentro de una funcion
                    'Adios desde una clase en un fichero ES6',
                    'El ratón entró',
                    'El ratón salió']
    //quiero que el constructor, trozo de codigo es para que no se me haga tan largo el constructor
    //ademas de manejar listener tb se podría manejar los DOM y va a definir un objeto o un conjunto de propiedades
    //sueltas, puede ser this.nodos, los nodos son los puntos de DOM que me interesa el 1º sera el boton saludar
    //
    this.manejarDOM()
    this.asignarListener() 
    }
    manejarDOM() {
        this.nodos = {
            btnSaludar: document.querySelector('#btn-saludar'),
            btnDespedirse: document.querySelector('#btn-despedirse'),
            divRaton: document.querySelector('#div-raton'),
          }
    }
    /**
     *  this.btnSaludar: document.querySelector('#btn-saludar'),
            this.btnDespedirse: document.querySelector('#btn-despedirse'),
            this.divRaton: document.querySelector('#div-raton'),
          }
     */

    asignarListener() {
        this.nodos.btnSaludar
        .addEventListener('click', this.saludar.bind(this)) //cuando algo se ejecute sea un bind
        //cuando un manejador de eventos empieza por this como esta en un objeto siempre termina por bind(this)
        //siempre vale con un callback, para que no se pierda el this, los manejadores de eventos son una variable de callback
        //es una funcion que en vez de ejecutarla tú le dices que al sistema lo haga el  
        //cuando yo hagla click se ejecuta la función
        this.nodos.btnDespedirse
        .addEventListener('click', this.despedirse.bind(this))
        this.nodos.divRaton
        .addEventListener('mouseover', this.onMouseOver.bind(this))
        this.nodos.divRaton
        .addEventListener('mouseout', this.onMouseOut.bind(this))
    }
//querySelector es para acceder al DUM como un esquema con head y body, conjunto de todos los elementos de la pagina web,
//selecciono lo que quiero con el querySelector, y puede tener un addEventListener a tal evento
//tal respuesta
//en el fichero hola moderno es el que mas se utiliza

    /**
     * Metodos manejadores de eventos (Event Handler)
     */

     saludar () {
         console.log(this.msg[0])
        
     }
     despedirse () {
         console.log(this.msg[1])//loas arrays siempre empiezan por cero aunque esten dentro de un constructor
     }
     onMouseOver() {
         console.log(this.msg[2])
     }
     onMouseOut () {
         console.log(this.msg[3])
     }
     
     //donde coloco el main, mi main no se ejecuta nunca yo instancio mi objeto
     //quiero que se ejecute la opcion main, cada vez que se cree un objeto
} 

// window.addEventListener('load') 
  
//como es una gestora de varios eventos y tiene que ser igual a new eventos

/*(function () {
    document.addEventListener('DOMContentLoaded', () => { let misEventos = new Eventos()})
   })()*/
    //misEventos.saludar()
    //misEventos.despedirse()
   // document.addEventListener('DOMContentLoaded', main) 
   //cuando se haya cargado el DUM hago una istancia, ese objeto qué hace es una aplicación
//instanciar un objeto es ejecutar el constructor

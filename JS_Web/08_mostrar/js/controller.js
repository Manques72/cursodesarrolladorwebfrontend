//empezamos por la funcion en vez de por las clases, mejor poner nombre del fichero a la función
//como no es manejadora de eventos no se le pone en mayuscula como es una funcion no se olvida los () nilas llaves
//modulo de EMS6 se pone que exporta para que lo reciba en bootstrap ya es un modulo y como 
//en index ya hemos puesto type module bootstrap puede importar algo
export function controller () {
//para saber qué todo va bien
    console.log('controller cargado')
   // Declarar variables
   let isVisibleDiv = false
   let msg = ['[mostrar menos]', '[mostrar mas]']//esto sera un array
   //el Div esta oculto así que Visible sería false pero como pone mostrar mas pues ya está
   //Nodos del DOM
   let nodos = {
       btnCambiar: document.querySelector('#btn-cambiar'),
       divHide: document.querySelector('#div-hide')
   }
   //msg.push(nodos.btnCambiar.innerHTML)
   nodos.btnCambiar.innerHTML = msg[1]
   //asignar manejadores de evento

   nodos.btnCambiar.addEventListener('click', cambiar)//en vez de cambiar se pondría en ingles toggle es una palanca, interruptor

   //function cambiar() {
        //nodos.divHide.classList.add('hide')
       //aquí hay dos estados oculto o visible, nos creamos una variable que se llame let isVisible
       //solo hay una cosa que puede estar visible o no
    
   //if (isVisibleDiv) {
       //hay que ocultar, si la clase se llama hide para mostrar
       //nodos.divHide.classList.add('hide')
      // console.dir(nodos.divHide.classList.value)
       //nodos.btnCambiar.innerHTML = msg[1]//como aqui hay que mostrar es 1 y cuando ya hayamos mostrado
       //pondremos el mensaje cero
        //cuando cambiemos de estado if isvisiblediv ha cambiado de estado de true a false:
        //isVisibleDiv = false
        /* let i = 0 if (isVisibleDiv) { i=1}*/

   //} else {
       //hay que mostrar
       //nodos.divHide.classList.remove('hide')
       //console.dir(nodos.divHide.classList.value)
       //ya hemos mostrado
      // nodos.btnCambiar.innerHTML = msg[0]
       //isVisibleDiv = true no se escribe así
    //}
    //en vez de los hide add y remove pongo un toggle
//hacerlo mejor de este otro modo

function cambiar() {
   
    nodos.btnCambiar.innerHTML = msg[isVisibleDiv ? 1 : 0]
    nodos.divHide.classList.toggle('hide')
    isVisibleDiv = !isVisibleDiv
}
  
  }
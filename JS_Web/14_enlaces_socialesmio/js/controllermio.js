//bajarme el de ALejandro este algo le falta y el html
export function controller () {
    let i
    let aNodosEnlaces
    let lista
    inicio()
//todo lo estoy haciendo para que sea reutilizable
function inicio () {
    i = 0
    //Procedimiento habitual
    //1. Referencia a los Nodos del DOM que me interesan
    aNodosEnlaces =document.querySelectorAll('.social-menu a')
    
    console.log(aNodosEnlaces)
    lista = document.querySelector('.social-menu')
    //para seleccionar la lista me voy a document lista y la clase mas especifica que es social-menu

    
}
    
    const listaInicial = lista.outerHTML
    console.dir(listaInicial)
    const pulsador = document.querySelector('#pulsador')
    const div = document.querySelector('div')
    const section = document.querySelector('section')

    //2. Definir los manejadores de eventos

aNodosEnlaces.forEach( nodo => nodo.addEventListener('click',onClick, true))
pulsador.addEventListener('click', pulsarA)
div.addEventListener('click', pulsarDiv)
section.addEventListener('click', pulsarSection)
//3. Implementan los manejadores de eventos

function onClick (ev) {
    i++
    //console.dir('Target', ev.target)
    //console.dir('CurrentTarget', ev.currentTarget)
    //el nodo sería el target dentro de mi objeto es un a que es un i y sustituyo el contenido si pongo = 'Ops' cuando 
    //un usuario haga click y borre ponga oPS
    //ev.target.innerHTML = 'Ops!<br>'
    //tengo que hacer un manejador de evento multiple y eso significa un condicional y en vez de un if es un switch porque es para varios
    //no para solo uno
    //el Ops lo he cambiado a comillas francesas para hacerlo un string y nos vamos a ahorar el switch
   //como lo que nos interesa es el current target y lo que quiero es += y daré un salto de línea
   //para no liarme puedo hacer un let nodoA es un hiperenlace A, yo no quiero tener el objeto i sino a, la A lo ha puesto
   //en mayusculas por el case
   let nodoA = ev.currentTarget
    //ev.currentTarget.outerHTML +=`Ops! no tengo ${ev.currentTarget.title} <br>`
    //pongo esto otro sin el current target qeu ya lo tengo arriba
    nodoA.outerHTML = nodoA.innerHTML + `Ops! no tengo ${nodoA.title} <br>`
    if (i == 5) {
        //quiero que salga =5
        //SIEMPRE CON LAS FRANCESas porque así son retornos de carro
        //siempre que quiero que borre entonces pondríamos un += y despues '<p>JA, JA..
        lista.outerHTML += `
                <div id="extra" class="social-menu">
            <p>JA, JA, JA... estoy ilocalizable</p>
            <img src="./RIENDOSE.gif">
              </div>`
        setTimeout(() => {

            
        }, 3000);


    
    }
    //QUE TIENE EL NODOA innerHTML
    
    /** switch (ev.target.title.toLowerCase) {
        case value:
            
            break;
    
        default:
            break;
    }*/
    //para que no me salga todo el rato el mensaje pongo disable o outerHTML

}

function pulsarA() {
    console.log('Pulsado a')
}

function pulsarDiv(ev) {
    ev.stopPropagation//para parar un evento
    console.log('Pulsado div')
}

function pulsarSection() {
    console.log('Pulsado section')
}


}
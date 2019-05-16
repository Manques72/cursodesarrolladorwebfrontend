//empezamos por la funcion en vez de por las clases, mejor poner nombre del fichero a la función
//como no es manejadora de eventos no se le pone en mayuscula como es una funcion no se olvida los () nilas llaves
//modulo de EMS6 se pone que exporta para que lo reciba en bootstrap ya es un modulo y como 
//en index ya hemos puesto type module bootstrap puede importar algo
export function controller () {
//para saber qué todo va bien
    console.log('controller cargado')
    //esto se podría quitar solo era para ver como funciona ponerlo siempre para que este todo bien y tendra que aparecer el mensaje
    let nombre = ''
    let msgInicial = ''
    //mvc model view controller, pauta de programación 
    //muy profesional es muy sencillo, estilo angular, mi objeto de datos es muy sencillo
    //porque solo quiero saber el nombre del señor
    //ahora habría que poner los Nodos del DOM, todo lo que tenga id en la vista lo puedo
    //manejar en el controller
    //podría hacerlo todo junto o cada cosa lo vamos a hacer por separado:
    //en vez de let se va a poner const porque no deberían de cambiar pero tb se puede quedar el let 
    //como en los ejercicios anteriores y se pone la # sino no te lo lee
    const inNombre = document.querySelector('#in-nombre')
    const btnBorrar = document.querySelector('#btn-borrar')
    const output = document.querySelector('#output')

    msgInicial = output.innerHTML + ' ' //esto porque sino sale todo el rato un monton de datos y para que no quede pegado
    //añado un espacio y pongo comillas
    //si quieres qeu pase algo necesitamos poner un output y un borrar para que cuando haga algo creo los manejadores
    //de evento, escuchadores de evento. sino no haría nada

    inNombre.addEventListener('input', onInputNombre)// o se puede llamar oninput, cambios etc. es la que llama a la funcion el primer evento, 2º es un callback es un manejador del evento es asincronico
    btnBorrar.addEventListener('click', borrar)//si tengo un boton tengo que tener un evento click

    function onInputNombre() {
        //cuando el usuario esta escribiendo escribe en el output y hacemos un console dir
        //console.dir(output)//que es lo que necesito, estoy escribiendo en mi caja de input tendre que poner los nombre value
        //en el output
        nombre = inNombre.value
        output.innerHTML = msgInicial + nombre.toUpperCase()//ESTO quiere decir añade lo que viene a continuación y que quiero guardar el nombre
        
    }
    function borrar() {
        //nombre = ''
        inNombre.value = ''
        onInputNombre()//que es 
        //output.innerHTML = msgInicial + ''
        
        //borrar es escribir nada, si no me barra la cajita del input así que ponemos inNombre.value = ''

    
    }

}
/** necesitamos exportar algo y se va a llamar controller porque la 
 * hemos llamado así si la llamamos app pues app
 * Antes la function app estaba en el boostrap ahora tenemos un módulo y hemos asociado al boostrap
 * 
*/
export function controller() {

    //Experimentos
    console.log('Cargado el controller')
    console.log('Event')
    const oPerson = {nombre: 'Pepe', edad: 22}//en vez de let se pone const porque es un objeto
    //no significa que luego no pueda yo cambiar el value porque si dejamos el let y ponemos inNombre= 0
    //lo borraría y no lo hace es mejor poner un const
    oPerson.edad= 23
    console.dir(oPerson)
    const nodoDocument = document
    console.dir(nodoDocument)


/**Se convierte en un conjunto de objetos
 * Si no le ponemos el let no se ve en nuestra página
 * para recoger el documento lo tenemos que hacer en el document node
 * así todo se recoge en JS */

 //body>section:nth-of-type(1)>div: :nth-of-type(1)>input
//el body sería hijo igual que el header como antes que el body hay 
 //nodoDocument.children[0].children[1].children[1].children[1].children[1].value = 'Pepe'
 //de todo el documento el html es el hijo y tenemos header y body qeu es el hijo
 //como trabajamos con arrays sería body 1 y la seccion 1 porque empezamos en 1, el div sería 1 y 
 //dentro de este div sería el input qeu es 1 y que tiene una propiedad value que quiero que valga Pepe
 //el nodoDocument es un rollo y document tengo una propiedad guay que es query selector

 document.querySelector('#inNombre').value = 'Juana'

 document.querySelector('#divNombre').children[1].value= 'Ernesto'
 
 //esto sería lo mismo, en el div hay que poner children porque sería el input ya que para el div no tiene
 //propiedad del value por eso hay que poner 1ºsu hijo, los accesos directos querySelector
 //hijos su padre y sus hermanos a veces es util alrededor de un punto
 //El DOM ES UN OBJETO GIGANTE Y PUEDO POSICIONARME EN LOS NODOS DEL DOM y accedo a traves del nombre de su padre

 //Procedimiento Habitual

 //yo quiero qeu en la variable quiero que guardes inNombre y así cuando yo quiera hacer algo voy rápidamente
 //lo vamos a poner en verde porque mas abajo las vamos a poner funciones
 //const inNombre = document.querySelector('#inNombre')
 //const outSaludo = document.querySelector('#outSaludo')
//nodo es la representación en JS de todo lo que constituye el elemento HTML, tiene eventos un value si es un input
//una posición, coordenadas, el ordenador lo renderiza en algun sitio de la pagina, dependiendo de lo que ponga
//el navegador tiene que saber donde pinta cada cosa y si vas a tu nodo te dice en que coordenadas se van a pinchar
//offsetTop donde se va a escribir y offsetWidth
//ponerlas como variables sueltas o que vayan como funciones y abririamos
//llaves y poner las propiedades que nos interesen
//lo agrupa todo como objetos que le gusta mas para que no esten por separados los nodos, desventaja
//cada vez que quiera aplicar en vez de inNombre tengo que poner nodos

const nodos = {
    inNombre: document.querySelector('#inNombre'),
    inCorreo: document.querySelector('#inCorreo'),
    btnSaludar: document.querySelector('#btnSaludar'),
    btnBorrar: document.querySelector('#btnBorrar'),
    outSaludo: document.querySelector('#outSaludo'),

}


console.dir(inNombre)
 console.dir(outSaludo)

 //una vez qeu se lo que son los nodos y los tengo recogidos algunos no haran nada son pasivos
 //otros serán funcionales
 //manejadores de eventos
 //Definir los manejadores de eventos
 //cuando el usuario escriba algo sería un input si quiero que después de que escribar y de a un tabulador
 //sería el change, el evento son el click, doble click, change, input
//cuando escriba una letra se le dira saludar, eso sí me lo puedo inventar lo de despues de input le llamo onInputSaludar
 nodos.inNombre.addEventListener('input', onSaludar)
 //nodos.btnSaludar.addEventListener('change', onClickSaludar)
 nodos.inNombre.addEventListener('change', onSaludar)
 nodos.btnSaludar.addEventListener('click', onSaludar)
 nodos.btnBorrar.addEventListener('click', onSaludar)
//dos tipos de eventos
 //Implementar los manejadores de eventos y podría ponerlo dentro para uqe esten dentro las funciones const
//creo una función anidada para poder acceder a todas las variables
//inNombre es un input 

//function onInputSaludar () {
    //*if (inNombre.value) {
//si hay un value tengo qeu saludar y lo hago en la otra variable no tiene value pero si tiene
//la propiedad innerHTML para el outSaludo 
//esto se llama doblebanding en respuesta en html se cambian las variables y cuando cambian las 
//variables se cambia el html
 //**nodos.outSaludo.innerHTML =`Hola ${nodos.inNombre.value}`
//} else {
 //   nodos.outSaludo.innerHTML =``
//} */
/*function onChangeSaludar() {
    if(nodos.inNombre.value) {

    nodos.outSaludo.innerHTML = `Hola $(nodos.inNombre.value)`

}else {
    nodos.outSaludo.innerHTML = ``
}
/*function onClickSaludar() {
    console.log('input', nodosinNombre.value)
    {

    }
//ante los mismos eventos puedo decir. Tengo una función que esta respondiendo a varios eventos


Ver que tiene el objeto evento*/

//voy a hacer qeu el mismo manejador onSaludar se lo asocio al change y al click
function onSaludar(ev) {
    console.dir(ev)
    let msg = ''
    if (nodos.inNombre.value) {
        msg =`Hola ${nodos.inNombre.value}`
    } else {
        msg = ``
    }
switch (ev, type) {//se puede poner un if ev no es nada se puede poner lo que quieras
    //los manejadores de evento son callback pasa como un parametro qeu es ev y tienen una propiedad
    //que es type
    case 'change':
        msg += ` has cambiado de input `
        break;
        case 'click':
            //ahora tengo qeu poner un if porque he puesto que onSaludar sea borrar
            if (ev, target.id =='btnSaludar'){
                msg += ` has pulsado el boton "Saludar" `
            }   else if (ev, target.id ='btnBorrar') {
                msg += ` has pulsado el boton "Borrar"`
                nodos.inNombre.value = ''
            }
            
            
                   break;
}
nodos.outSaludo.innerHTML = msg //en vez de un console.log te sale esto
}
}
//en el switch no sé por qué me da error mirar el de Alejandro
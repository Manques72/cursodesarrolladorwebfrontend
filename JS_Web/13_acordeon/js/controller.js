export function controller () {
    //Procedimiento habitual

    //1. Referencia a los Nodos del DOM

    const aNodosQuestion = document.querySelectorAll('.question')
    const aNodosRespuesta = document.querySelectorAll('.respuesta')

    console.dir(aNodosQuestion)
    //2. dEFINIR los manejadores de eventos
//¿que evento quiero escuchar? pues sería un click
    aNodosQuestion.forEach ((item) => { item.addEventListener('click', onClick)})
    //3. Implementar los manejadores de eventos
    function onClick(ev){
        console.dir(ev.target)//con target te lleva al parrafo que tu quieres o donde tu quieres que te lleve
        //los item es cada uno de los nodos y tienen un class
        aNodosQuestion.forEach( item => item.classList.remove('destacado'))
        //si quieres que te salga con otro formato
        ev.target.classList.add('destacado')
        //le aplicaríamos a todos los nodos respuesta el sibling para que oculte todas
        //aNodosRespuesta.forEach( item => item.hidden= true)
       //mejor esta que es para simplificar
        aNodosQuestion.forEach( item => item.nextElementSibling.hidden= true)
        //para poner la respuesta habría que ver el heramno y si pongo document arriba es mejor y pone el Sibbling
        
        ev.target.nextElementSibling.hidden = false //como oculta tiene que ser false porque quiero que se visibilize
 //el classList permite destacar en css las list
 //es una funcion muy potente tiene un metodo add pero el metodo toggle hace que 
 //si no esta la quite
 //con el item.hidden= true nos da el efecto acordeon
    }
        


    //5 preguntas y 5 respuestas podría ponerle id pero mejor hacerlo genérico
    //como comparten las classes, las class se usan en css y en JS y lo seleccionamos
    //según su clase y hay un seleccionarlo todo y es el querySelectorAll


}
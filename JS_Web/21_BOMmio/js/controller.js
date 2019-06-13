export function controller() {
    console.log('controller cargado')

    const btnProbar = document.querySelector('#btnProbar')

    btnProbar.addEventListener('click', onClickProbar)
    //document.querySelector('#btnLocalizar').addEventListener('click', () =>{
        //navigator.geolocation.getCurrentPosition((position) => {
     //       console.log(position)
    //    }
    }

    function onClickProbar() {

    //window.alert()
    //window.prompt()
    //window.confirm(), no hace falta poner window porque por defecto lo busca ahí
       let handler = open()
       handler.location.assign('http://google.com')//la ventana que me abre puede ser una dirección concreta
       //el x me devuelve un objeto window
       window.setTimeout(() =>{
           handler.close()
       }, 2000)
       
       console.log(handler)
//las funciones mas importantes para esto setTimeout devuelve un handler lo uqe sea
//setTimeout() 
let handTime = setTimeout(() => {}, 2000)
clearTimeout(handTime) //esto limpiaría lo que sea
       
let handInterval = setInterval(() => {}, 10)//cada dos seg te lo repite vale para hacer contadores
//cronometros, todo lo que tenga que ver con el tiempo
       
       clearInterval(handInterval)//mirar la pagina de codepen ha puesto un cronometro de Mickie Mouse
    }
//para establecer tiempos de las ajax

//en la página viene como lo han hecho en JS, CSS, HTML http//:codepen.io

//tambien se pueden crear, leer y eliminar cookies lo que pasa que se guardan como un string

}
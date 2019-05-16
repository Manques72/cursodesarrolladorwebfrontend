

//establece funciones que se ejecutan, se van a encolar para entrar en un determinado momento y 
//se cargaran cuando sea posible, esto es un evento ejecutate en 1, 2, 3seg es un callback
//pero quien lo maneja es el tiempo, asincronismos

//setTimeout(saludar,1000)//sería 1sg, el primer argumento es el hander la funcion que quiero que se ejecute
//en el setTimeout no está en parentesis porque sino lo ejecutaria en el momento


//function saludar() {
   // console.log('hola amigo')//se ha convertido en asincrono por el setTimeout, lo ejecutara lo antes posible
    //antes de 1sg
    //}
//setTimeout(()=>console.log('Item3'), 2000)//funcion anonima ()=> ejecutan cosas que son compactas
export function controller () {

    console.log('controller cargado')
    /**nodos del dom */
    let btnMostrar = document.querySelector('#btn-mostrar')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnLeer = document.querySelector('#btn-leer')
    //siempre que es un boton sera el evento del clic y si se llama nuestra funcion mostrar
    //se ejecutara cuando de al boton
    //manejadores de evento
    
    btnSaludar.addEventListener('click', saludar)
    btnMostrar.addEventListener('click', mostrar)
    btnLeer.addEventListener('click', leerDatos)
    

    function mostrar() {
    setTimeout(()=>console.log('Item 1'), 0)
    console.log('Item 2')//es sincrono

    setTimeout(()=>console.log('Item 3'), 2000)//esto es asincrono se espera y cuando le toque a las demas lo ejecutara

    console.log('Item 4')//es sincrono son los 1ºsque se ejecutan luego el que tenga 0 y luego el de 1000 y 2000

    setTimeout(()=>console.log('Item 5'), 1000)//cada parentesis tiene su funcion
    //parametro: ()=>console.log('Item 5')
    //esto así iría: 2, 4, 1, 5, 3
    //solución muy eficaz de un rendimiento muy alto
    //como yo tengo todo esto en un controller me voy a asincronia para eventos, me voy a html
        //los eventos son siempre asincronos
    }

    function saludar() {
        console.log('Hola amigo')
    }
    
    function leerDatos() {
        let i  //como 1º ejecuto let i y como luego sería mostrar Datos sería undefined
        //mostrarDatos habrá que meterlo dentro oprque sino no me lo reconoce
        //lectura síncrona: se supone que accedemos a un servidor y eso no existe que no tarda nada
        //i = '33jksl7741'
        //lectura asíncrona
        setTimeout(() => {
            i = '33jksl7741'
            mostrarDatos()
        }, 1000);
        //el parametro siempre tiene que ser una funcion
        
    //mostrarDatos() si lo dejo aquí me pondría undefined por eso lo tengo que meter en el setTimeout
        //lectura de disco que tarda 1sg
        
        function mostrarDatos() {
            console.log(i)
        }

        
            
      
    }


}

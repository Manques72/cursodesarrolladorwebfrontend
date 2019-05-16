
export function controller () {

    console.log('controller cargado')
    
         
    
    /**nodos del dom, como son nodos hay que poner delante let o const*/
    const btnSaludar = document.querySelector('#btn-saludar')
    const btnHell = document.querySelector('#btn-hell')
        
    //manejadores de evento
    btnSaludar.addEventListener('click', onSaludar)//onSaludar es un manejador de evento y click es un evento
    btnHell.addEventListener('click', onHell)//onhell se le ha ocurrido ael puedo llamarla como quiera

    function msgAfterTimeout (msg, nombre, tiempo, cb) {
        setTimeout(function () {
            cb(msg, nombre); //es una funcion que la tengo que pasar al sistema para que haga algo
        }, tiempo);
         };    

    function onSaludar() {
        msgAfterTimeout('Hola', 'Pepito', 2000, (msg, nombre)=>{
            console.log(msg, nombre) })
            //el ultimo parametro sería qué quiero hacer si lo quiero pasar por la consola
        //la defino como un callback, te va a sacar el texto que pongas en los 2 primeros parametros
        //mostrarResultado(11, 12, 'multiplica', (x,y) => x*y) esto sería un callback
        msgAfterTimeout('Hola que tal', 'Juanito', 3000, (msg, nombre)=>{
            document.querySelector('#output').innerHTML = msg + ' ' + nombre.toUpperCase()
        })
            

    }

    function onHell() {
        msgAfterTimeout('Juanito', 'Pepito', 3500, (msg, nombre) => {
            let saludo = (`Hola ${nombre}!`)
            let quienSoy = msg
            console.log(saludo)
            msgAfterTimeout(msg, saludo, 500, (quienSoy, saludo) => {
                console.log(`${saludo}, soy ${quienSoy}`)
                //claro pero dentro de un callback tengo otro es un infierno un hell
                //cuando yo tengo que usar un proceso asincrono lo tengo que usar dentro de algo
                //
                //la piramide de los DOM
            })//va sumando tiempos 3500+500 si estuviera fuera no

        })
        
    }
    
         
       
}

    

   
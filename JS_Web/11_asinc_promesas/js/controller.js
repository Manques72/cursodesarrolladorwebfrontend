
export function controller () {//un controller es algo que se ejecuta cuando lo hace el DOM
    //ESPERA a que se cargue la pagina y luego el controller

    console.log('controller cargado')//para decirnos uqe se ha cargado el controller

       
    /**nodos del dom, como son nodos hay que poner delante let o const*/
    const btnPedir = document.querySelector('#btn-pedir')
    const btnSaludar = document.querySelector('#btn-saludar')
    const btnSaludar17 = document.querySelector('#btn-saludar-17')
    const btnUsers = document.querySelector('#btn-users')
    const output = document.querySelector('#output')
   
    
        
    //manejadores de evento
    btnPedir.addEventListener('click', onPedir)//onSaludar es un manejador de evento y click es un evento
    btnSaludar.addEventListener('click', onSaludar)
    btnSaludar17.addEventListener('click', onSaludarAwait)
    btnUsers.addEventListener('click', onUsers)
    /**
     * Promesa es un objeto nativo desde ES6 QUE REPRESENTA la terminación
     * o el fracaso eventual de una operación asincrona
     * 
     * Una promesa es un objeto devuelto, al cual enlaza, encadenan las funciones callback en vez
     * de pasar las funciones callback a una función.
     * Van a estar encadenadas
     * tengo que darle a la funcion un método
     * Recordatorio: let aDatos = si tengo un array: [1,2,3,4,5] en este caso item es igual 1,2,3,4,5
     * aDatos.map((item, i, array) => item* i) //en lugar de 1*0, luego 2*1 i es la posición, si map no me da item y lo recojo como a como x como quiera
     * yo le doy una funcion, siempre vamos a tener 3 parametros y no lo ejecuto yo sino array
     * normalmente se llama item cuando hay un array la función callback se la paso a una del sistema
     * como map, reduce, etc
     * promise es un constructor qué parametros recibe le pasara un resolvey un reject
     * normalmente dentro de una promesa hay un proceso de consulta, siempre que queremos que sea asincrona
     * setTimeout
     */
    function completarPedido() {
        return new Promise((resolve, reject) => {//funcion se resuelve en un futuro en 2s el 70% con exito y el 30% fracaso
            //setTimeout()el setTimeout es una funcion anonima: estudio lo que pasa (() => {})y esto es el primer parametro
            //que quiero que se ejecute
            setTimeout( () => {
                //como mi cocinero nunca falla le hago un resolve y creo una condición
                if (Math.random() > 0.3) {//70% de las veces simulamos que acierte, si hay un acierto se manda resolve y se resuelve positivamente
                        resolve('Toma tu hamburguesa')
                } else { //el otro 30% simulamos errores
                        reject('Lo siento, no quedan hamburguesas') //van a emitir un mensaje y tienen como mensaje un value
                }
            }, 2000 )
        })
    
           
    }
    
    /*function msgAfterTimeout (msg, nombre, tiempo, cb) {
        setTimeout(function () {
            cb(msg, nombre); //es una funcion que la tengo que pasar al sistema para que haga algo
        }, tiempo);
         };   */ 

    function onPedir() {
        
        completarPedido() 
        .then((datos) => {//.then viene de un callback
            output.innerHTML += '<li>' + datos + '</li>'//esto es datos con un salto de linea
        })//lo que yo quiero hacer si todo va bien y pongo una funcion callback
        //datos es 'Toma tu hamburguesa'
        .catch((error) => {
            output.innerHTML += '<li>' + error + '</li>'//datos y error son los parametros por so no hace falta nada mas

        })//lo que quiero hacer si todo va mal y error es 'Los siento no quedan hamburguesas'
        /** msgAfterTimeout('Juanito', 'Pepito', 3500, (msg, nombre) => {
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

        })*/
    }
        
    function msgAfterTimeout(msg, nombre, tiempo) {//todavia no maneja callbacks queremos que devuelva
                //y por eso se pone return y se hace una promesa como es del ej anterior y funcionaba siempre pues siempre habra resolve
        return new Promise( (resolve) => {
            setTimeout( () => {
                let datos = [msg, nombre]
                resolve(datos)//la funcion resolve solo me deja un parametro por eso ponemos corchetes para que vea solo 1
            }, tiempo)
            //setTimeout recibe el handler y el timer
        }  ) //promise recibe una funcion anonima se recoge resolve y resolve pk siempre se va a cumplir
    }
        
//despues de hacer el setTimeout la ejecuto en la funcion saludar y veo cual es la funcion callback
//dentro del then
      /*  function onSaludar() {

            msgAfterTimeout('Juanito', 'Pepito', 3500)
            .then(([msg, nombre]) => {//aquí en el then lo tiene que desestructurar en el otro then
               //sino también puedes poner elemento 0 y elemento 1 para no liarte con la desestructuracion
               //en el then recoges por ej: .then
                let saludo = [`Hola ${nombre}!`]
                let quienSoy = msg
                console.log(saludo)
                return msgAfterTimeout (msg, saludo, 500)
            }).then(([quienSoy, saludo]) => {//si pongo el raton en then me dice todo
                console.log (`${saludo}, soy ${quienSoy}`)
            })

        }*/

        function onSaludar() {

            msgAfterTimeout('Juanito', 'Pepito', 3500)
            .then((datos = []) => {//aquí en el then lo tiene que desestructurar en el otro then
               //sino también puedes poner elemento 0 y elemento 1 para no liarte con la desestructuracion
               //en el then recoges por ej: .then
                let saludo = [`Hola ${datos[1]}!`]
                let quienSoy = datos[0].toUpperCase()
                console.log(saludo)
                return msgAfterTimeout (quienSoy, saludo, 500)
            }).then((datos) => {//si pongo el raton en then me dice todo
                console.log (`${datos[1]}, soy ${datos[0]}`)
            })

        }
        //fetch().then().catch()//

    }


/**
 * En ES 2017 aparece async /await funcion de caracter asincrono
 * por delante de su funcion le llamamos aync y en una function asincrona la podemos decir
 * que se espere hasta que ejecute la promesa
 * ya no hace falta poner en el then porque ya se espera, por debajo lo reinterpreta
 */

 async function onSaludarAwait () {
     let datos = []
     datos = await msgAfterTimeout('Juanito', 'Pepito', 3500)
     let saludo = [`Hola ${datos[1]}!`]
     let quienSoy = datos[0].toUpperCase()
     console.log(saludo)
     datos = await msgAfterTimeout (quienSoy, saludo, 500)
     console.log (`${datos[1]}, soy ${datos[0]}`)
     
    }   

    function onUsers() {
        const url= 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then((response) => {return response.json()})
        .then((data) => {console.dir(data)})//vete a jsonplaceholder y dame lo que te ha dado
        //y luego haz un console log
    }
      
     
      

 
        

    
         
       


    

   
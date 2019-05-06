let vuelo1 ={
    airline: 'Oceanic', 
    number: '815',
    departure: {//esto es un objeto
        claveIATA: 'SYD',
        time: '2004-09-22-14:55',
        ciudad: 'Sydney'
    },
     //se pone comillas porque no vamos a hacer calculos
    arrival: {//esto es un objeto por eso ponemos llave llave
        claveIATA: 'LAX',
        time: '2004-09-23-10:42',
        ciudad: 'Los Angeles'

    }
}
//para que un objeto se muestre es feo poner también la funcion de nuevo, sería
//chulo vuelo.mostrar()
//quiero poner una funcion implicita en el objeto
//propiedad del objeto que sería vuelo.mostrar

/*vuelo1.mostrar = function (obj = this) {//mostrarObjeto(obj) {//se pone obj para ser mas genericos
   
    for (const key in obj)//obj es mi parametro
     {
            const element = obj[key]
            //if el tipo de element no es un objeto y sin hago la otra que sería else
            //no le llamo vuelo1 le llamo obj para ser mas generico
            if (typeof element != 'object') {
                console.log(`La propiedad ${key} vale ${element}`)
            } else {
                console.log(`La propiedad ${key} vale ${element}`)    
                obj.mostrar(element)

            }
       }
}*/
//console.log(typeof vuelo1.mostrar) //console.log(typeof vuelo1.mostrar) pondra funcion cuando le 
//doy a node aunk sea un objeto por Ej si pongo en vez de mostrar: porngo airline me dara que es un string y si pongo departure me dara que es un object

//vuelo.mostrar()//se tiene que mostrar así mismo es this
//hemos convertido una funcion externa en un método
/*vuelo1.mostrar = function (obj = this) {//mostrarObjeto(obj) {//se pone obj para ser mas genericos
   //muestra las propiedades de un objeto, rodea a un objeto y luego lo muestra
    for (const key in obj)//obj es mi parametro
     {//lo unico que hacen si eres un objeto pues haces lo otro
            const element = obj[key]
            //if el tipo de element no es un objeto y sin hago la otra que sería else
            //no le llamo vuelo1 le llamo obj para ser mas generico
            if (typeof element == 'function') {
                    continue //para que se salte una se puede poner ===
            }
            if (typeof element != 'object') {
                console.log(`La propiedad ${key} vale ${element}`)
            } else {//si es un objeto entra por aquí y se puede poner ===
                console.log(`La propiedad ${key} vale ${element}`)    
                obj.mostrar(element)//siempre tiene que estar en el lado de que es un objeto
//solo cuando es un objeto tengo que hacerlo de forma recursiva y el objeto pequeño está guardado en element

            }
       }
}*/
//contruir 1º la vista y luego soltarla de golpe y si quisiera me crearía una variable
/**diriamos que esta funcion tiene @param: object, @returns: string, let output = ''esta vacio te lo foy en forma
 * de strin, en vez de console.log le voy haciendo una concatenación
 */
/*vuelo1.mostrar2= function (obj = this) {//la idea es que no haga muchos consoles log
    let output = ''  //son dos funciones en una no muestra nada por pantalla crea un string   
    for (const key in obj)
      {//en vez de ir guardando console log voy a hacer un acumulador de nº es de string en vez
        //de que sume para no hacer tantos console log
             const element = obj[key]
                if (typeof element == 'function') {
                     continue //para que se salte una se puede poner ===
             }
             if (typeof element != 'object'){//las exclamaciones {
                 output = output + `La propiedad ${key} vale ${element}` + '\n//concatenacion de dos elementos y no se escribe como output sino 
                 //el operador de incremento output += sería un incrementador mejor poner esta qeu la de repetir el output
                 
              } else {
                 output = output +`La propiedad ${key} vale ${element}` + '\n'//esto es salto de linea
                 //me voy a un navegador js y pongo salto de linea una barra es un codigo de escape \n  
                 obj.mostrar2(element)//siempre tiene que estar en el lado de que es un objeto
 
             }
        }
        console.log(output)
 }
vuelo1.mostrar2()*/

vuelo1.tosTring= function (obj = this) {//la idea es que no haga muchos consoles log
    let output = ''  //son dos funciones en una no muestra nada por pantalla crea un string   
    for (const key in obj)
      {//en vez de ir guardando console log voy a hacer un acumulador de nº es de string en vez
        //de que sume para no hacer tantos console log
             const element = obj[key]
                if (typeof element == 'function') {
                     continue //para que se salte una se puede poner ===
             }
             if (typeof element != 'object'){//las exclamaciones {
                 output = output + `La propiedad ${key} vale ${element}` + '\n'//concatenacion de dos elementos y no se escribe como output sino 
                 //el operador de incremento output += sería un incrementador mejor poner esta qeu la de repetir el output
                 output = output + toString
              } else {
                 output = output +`La propiedad ${key} vale ${element}` + '\n'//esto es salto de linea
                 //me voy a un navegador js y pongo salto de linea una barra es un codigo de escape \n  
                 obj.mostrar2(element)//siempre tiene que estar en el lado de que es un objeto
 
             }



vuelo.mostrarFinal = function () {
    console.log(this.toString())
        }
        return output
    }
    }

    vuelo1.mostrarFinal
console.log(vuelo1.toString())
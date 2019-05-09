let vuelo1 = {
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

    },
    tosTring: function (obj = this) {
        let output = ''  
        for (const key in obj)
          {//en vez de ir guardando console log voy a hacer un acumulador de nº es de string en vez
            //de que sume para no hacer tantos console log
                 const element = obj[key]
                    if (typeof element === 'function') {
                         continue //para que se salte una se puede poner ===
                 }
                 if (typeof element === 'object'){//las exclamaciones {
                     output = output + `La propiedad ${key} vale ${element}` + '\n'//concatenacion de dos elementos y no se escribe como output sino 
                     //el operador de incremento output += sería un incrementador mejor poner esta qeu la de repetir el output
                     output = output + toString
                  } else {
                     output = output +`La propiedad ${key} vale ${element}` + '\n'//esto es salto de linea
                     //me voy a un navegador js y pongo salto de linea una barra es un codigo de escape \n  
                     obj.mostrar2(element)//siempre tiene que estar en el lado de que es un objeto
     
                 }
                 return output
                }
            },

        mostrar: function () {
       console.log(this.toString())
                        }
                        
               

                }
 
vuelo2 = {
    airline: 'Iberia',
    number: '185'
}

vuelo1.mostrar()
//Dentro de un método aparece this que nos da la referencia del objeto en el que estamos
//en el mundo orientado a objetos quiere que sea lo mas parecido al mundo real
//por un lado el alumno y por otro lado los datos en el mundo que no es de objetos Ej: 35_pares.js
//paradigma es una forma de pensar, antes pensaba por un lado hay funciones y por otro lado datos pero ahora hay objetos
//objeto eran acumuladores de datos y ahora lo vamos a integrar en el método
//usar constructores para poder crear objetos
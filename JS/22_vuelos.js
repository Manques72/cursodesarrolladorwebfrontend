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
//let vuelo = new Object{} es lo mismo esto es por detrás lo que pone el ordenador
//console.log(vuelo1)
 //si solo quiero ver los datos de llegada
//console.log(vuelo.number)//solo me aparecera el numero de vuelo
//los elementos de un objeto se puede decir por puntos y por corchetes solo tiene
//una utilidad, console.log(vuelo['number']) porque es mucho mas largo
// por ejemplo let datos que es una variable y puede valer departure o arrival no se cual valor va a tener
let datos = 'departure'//datos es una variable y no me lo entenderá console.log(vuelo.number) buscaría
//la propiedad number, console.log(vuelos.datos) datos me va a dar undefined a no ser que use el formato de corchetes
//['number'] busca la propiedad pero si le quito las comillas a datos
//me enseñará los datos de departure interpola la variable.
//let datos = 'arrival'
//solo se usa con corchetes cuando necesito usar variables para los nombres de propiedades

let users = ['Pepe', 'Rosa', 'Juan', 'María']//arrays
console.log(users)
//para repetir es una iteracción es un bucle que es con for en vez de element ponemos user
for (let i = 0; i < users.length; i++) {
    const user = users[i]; //hace que no haya errores de iteracción de una veulta a otra
    console.log(`Hola ${user}`)
    
}

//cada variable se crea y se destruye en cada vuelta por eso es un const en vez de un let
//es decir si ponemos el const fuera nos daría error pero sería un let user, lo normal es qeu el iterador este dentro
//como se crea y se destruye no crea ningún problema, no se me mezcla el iterador con el const
//bucle for estandar para un array no podríamos usarlo para un objeto
//no podría ir a la posición 1, 2, 3, para recorrer un objeto no se puede usar bucle for sino el forin

/*for (const key in vuelo1) {
          const element = vuelo1[key];
          //puede ser un string o un object entonces como tenemos dos opciones meteremos un if para ver
          //el tipo de dato de una cosa se pondría if (typeof element l= 'object')
          if (typeof element != 'object'){
          console.log(`La propiedad ${key} vale ${element}`)
          } else {
              for (const key in element) {
                       const item = element[key]
                       console.log(`La propiedad ${key} vale ${item}`)

              }
          }
       
  }*///key es una variable (se pone clave), se puede llamar como queramos va a guardar la variable
  //los nombres de las variables son siempre propiedades es decir por eso se ponen []
//element es el valor
//DRY no te repitas no repitas códigos y crear una function para luego invocar una función de forma 
//recursiva

function mostrarObjeto(obj) {//se pone obj para ser mas genericos
    for (const key in obj)//obj es mi parametro
     {
            const element = obj[key]
            //if el tipo de element no es un objeto y sin hago la otra que sería else
            //no le llamo vuelo1 le llamo obj para ser mas generico
            if (typeof element != 'object') {
                console.log(`La propiedad ${key} vale ${element}`)
            } else {
                console.log(`La propiedad ${key} vale ${element}`)    
                mostrarObjeto(element)//es mas genérico

            }
   
    }
}
/* departure: {//esto es un objeto
        claveIATA: 'SYD',
        time: '2004-09-22-14:55',
        ciudad: 'Sydney'
    }, este es en el else el elemento completo que es el objeto porque no es string ni numero
    
    */
mostrarObjeto(vuelo1)



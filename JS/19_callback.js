/**
 * Las funciones son objetos, se puede hacer con una función cualquier cosa que sea objetos
 * dentro de un obj puedo pasar un obj
 * y las funciones también, puedo tener una funcion dentro de una funcion
 * y se pueden pasar como parametros y esto es lo que se llama CALLBACK
 * bucle es procesar las cosas una y otra vez, una coas son los bucles y otra los funciones lo unico en recursividad
 */

 /*function mostrarResultado(x=0, y=0, operacion)//parametros x e y y un callback que es lo que puedo llamar
 //en vez de callback lo voy a llamar operación o z
  {
      console.log(`El resultado con ${x} y ${y} es`)
      console.log(operacion(x,y))//donde pone operacion va a ser una funcion pero no está definida pero la paso
      //desde fuera que quiero hacer con ella
  }
//como es una funcion anonima no tiene nombre
  let suma = function (x,y) {return x +y}
  mostrarResultado(11, 12, suma)//le paso la funcion suma, esta fuera pero se ejecuta dentro
  */
 /**
  * Las funciones son objetos
  * Se pueden anidar
  */
 function operaciones(x=1, y=1) {
     console.log(suma(x, y))
     function suma(x, y) {
     return x + y//la funcion suma esta dentro de operaciones
 }
//si yo pusiera suma(2, 2) no me va a dar nada porque no existe fuera de suma
 //console.log(r) no me dara ningun resultado pq no hay ninguna variable global r
 }
 operaciones(10, 12)//esto es lo que se llama encapsular el código y por eso guardaría todo
//sería suma, resta, etc es una manera de organizar el código

/**
 * Las funciones son objetos, se puede hacer con una función cualquier cosa que sea objetos
 * dentro de un obj puedo pasar un obj
 * y las funciones también, puedo tener una funcion dentro de una funcion
 * y se pueden pasar como parametros y esto es lo que se llama CALLBACK
 * bucle es procesar las cosas una y otra vez, una coas son los bucles y otra los funciones lo unico en recursividad
 */

 function mostrarResultado(x=0, y=0, nombre, operacion)//parametros x e y y un callback que es lo que puedo llamar
 //en vez de callback lo voy a llamar operación o z
  {
      console.log(`El resultado de la ${nombre} con ${x} con y ${y} es`)
      console.log(operacion(x,y))//donde pone operacion va a ser una funcion pero no está definida pero la paso
      //desde fuera que quiero hacer con ella
  }
//como es una funcion anonima no tiene nombre
  let suma = function (x,y) {return x +y}
  //mostrarResultado(11, 12, suma)le paso la funcion suma, esta fuera pero se ejecuta dentro
  //mostrarResultado(11, 12, function (x, y)) {return x + y}
  mostrarResultado(11, 12, (x, y) => x + y) //este es el formato arrow que es lo mismo que la otra
  mostrarResultado(11, 12, 'resta', (x, y) => x-y)//le pasamos la funcion real para que la ejecute

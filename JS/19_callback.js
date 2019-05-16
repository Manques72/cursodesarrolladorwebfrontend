/**
 * Las funciones son objetos, se puede hacer con una función cualquier cosa que sea objetos
 * dentro de un obj puedo pasar un obj
 * y las funciones también, puedo tener una funcion dentro de una funcion
 * y se pueden pasar como parametros y esto es lo que se llama CALLBACK
 * bucle es procesar las cosas una y otra vez, una coas son los bucles y otra los funciones lo unico en recursividad
 */

 /*function mostrarResultado(x=0, y=0, operacion)//parametros x e y y un callback que es lo que puedo llamar
 //en vez de callback lo voy a llamar operación o z, la operacion se la tenemos que dar como un callback
 //mostrarResultado(11, 12, 'multiplica')esto no me daría nada porque operacion esta pasado como callback
 //multiplica no sabe lo que quiere hacer, yo quiero desde fuera que me lo multiplique
 //[1,2,3,4,6].map(x=>x)al map le tendrías que decir que hace
 //esto sería un array pero no me daría nada
 //let aDatos = [1,2,3,4,6] y let aClon = aDatos.map(x=>x*x)esto me devolvería el array de los cuadrados
 //map solo que sabe hacer nada, necesita uqe le digas lo que tiene que hacer con un callback
 ///mostrarResultado(11, 12, 'multiplica', multiplica) habra una function multiplica(x,y) {return x*y} y el multiplica
 //no lleva () porque no queremos que se ejecute y así se hace un callback
 //si yo solo quiero hacer una vez function multiplica(x,y) {return x*y} la puedo hacer anónima y la pongo en multiplica porque no va
 //a aparecer mas mostrarResultado(11, 12, 'multiplica', function multiplica(x,y) {return x*y}) yesto podemos abreviarlo con el arrow
 (x,y) => {return x*y} pero es mejor ponerlo mas abreviado y es:  y esto es un callback
 mostrarResultado(11, 12, 'multiplica', (x,y) => x*y)


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

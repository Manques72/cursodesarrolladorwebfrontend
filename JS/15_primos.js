/**C
 * Sacar una lista, presentar por pantalla los nº primos del 1 al N
 */

 /**
  * 1ºfuncion saber si el número es primo o no y es de tipo booliana y sería isPrimo
  * function isPrimo
  * @param num: number
  * @returns: boolen //sera true cuando es primo y flase cuando no
  */

  function isPrimo(num) {
//vamos a poner de primeras que no son primos y por ello pongo r = false
    let r = true//tengo que dividir un nº y eso es una vuelta del bucle, o muchas es un for
    //para el 0 y el 1 hago una excepción
   
    if (!num) //num=0 no se puede poner hay que poner == o ! se pone mejor ! qeu es el not{
        return false
    

   //ahora tendría que hacer mi bucle, Eje el 2 no haría ninguna vuelta
    
   for (let i = 2; i < num; i++) {
       console.log('i', i)
        if (!(num % i)) { //esto es lo mismo pero queda mas bonito con el not no de esta forma (num % i == 0){
            //si el resto es 0 ya no eres primo, con uno que tenga cero pues ya esta
            return false
        }
        }
        return r
    }    
   let number = 0

    number= 1
    number= 4
   
   //isPrimo(number)
   console.log(isPrimo(number))
   //ahora nos pide la lista de nº primos, funcion crear una lista
   //la funcion siempre va a devolver un valor pero si tú no lo enseñas con console.log,
   //si pongo isPrimo(number) es el valor que ponga

   /**
    * Function listaPrimos
    * @param tengo que definirlo el nº de la lista el límite de la lista
    * @param limite: number
    * @returns: si es una lista devolvera un array de números[number]
    */
   function listaPrimos (limite) { 
       let primos = []
        //si creo una lista hago un bucle
        for (let i = 0; i <= limite; i++) { 
        //limite es hasta 100 como quiero tb el 100 por eso ponemos el =
            if(isPrimo(i)) { //hacemos que lo meta en la lista y se mete de esta forma primos[primos.lenght]
            primos.push(i)
   }
                }
       return primos
   }
   
   console.log('Los primos son', listaPrimos(100))
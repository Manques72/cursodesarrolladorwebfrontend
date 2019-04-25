/**
 * Programa de cálculo de estadísticos como la media aritmética
 * es la suma de todos los elementos dividido entre el nº de los mismos
 * 1º empezamos por el cálculo lo 1º se pone la function
 */
/*ES6 spread operator (agrupador, extenderse)
    function sumaPlus(x=0, y=0, ...otros) {
        if (otros) {
            console.log('Sin usar', otros)
        }
        return Number(x) + Number(y)
    }*/
/** 
function suma(x = 0, y = 0)//les pongo un valor por defecto de 0 porque si yo pongo console.log
//suma2 para que no me ponga y undefined y me salga un NaN así me saldría un 0+2=2
 {
    return x + y// si pusiera '2' podría poner +x y +y o mejor return Number(x) + Number(y) te lo convierte a num

}
console.log(suma(2))
console.log(suma(2,5,6,8))//podemos usar con parametros de mas y de menos porque no te lo reconoce y en este caso solo te da el 
//resultado de 2+5*/



 /**
  * Function mediaAr
  * @param//no sabe cuantos números tiene que calcular y por eso tienes que poner datos y array
  * @param datos: array
  * @returns: number
  * 1º hago un let como es un resultado pongo un r, como me va a retornar un r return r,
  * el valor de r y quiero poner un dato será 0
  */

  [3,4,3]
    function mediaAr(datos = [], ...masDatos) {
        //console.log(mediaAr(3,5,6,4,6,2,5)) tendría que comprobar que datos es un array
        if (!Array.isArray(datos)) {
            //yo quiero que entre cuando no es un array y lo hago con la negación qeu es la ! y 
            //si es que no creo un Array datos = [datos] del primer elemento pero tendría qeu decirle arriba los puntos suspensivos
            //en la funcion por eso en vez de function mediaAr(datos = [, ...otros o poner lo que queramos])
            //esto es mas moderno el spread operator y así si nuestro usuario pone los datos a lo bruto no hay problema 
                datos = [datos]
                datos = datos.concat(masDatos)
        }
        
        let r = 0
        let sumatorio = 0
        for (let i = 0; i < datos.length; i++) {
            const element = datos[i];
            r= r + element
            //el acumulador es = así mismo + element
            //Ej en vez de r le ponemos acumulador r = r + element
            //la 1ª vuelta es 0+3, la 2ª vuelta es 3+4 y la 3ª vuelta es 7+3
            //sumatorio += element
           // sumatorio = sumatorio + element
        }
        //r= sumatorio /datos.length 1º guardo el sumatorio y lo divido por el sumatorio la reutilizo
        //no la reutilizaría porque es un numero pero no si fueran tipos distintos
        //console.log(datos.length)//podemos quitar el console
        r = r / datos.length// la barra es dividida por datos.length
        return r
    }
//no me hace falta poner una funcion de mostrar porque total voy a mostrar un nº

 //la podría llamar let datos porque no es igual que la function mediaAr (datos = [])
 let numeros = [3,5,6,4,6,2,5] //esto es una array
 console.log(mediaAr(numeros))

 console.log(mediaAr(3,5,6,4,6,2,5))

 

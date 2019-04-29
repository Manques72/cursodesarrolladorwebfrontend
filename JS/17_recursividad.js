/**
 * Cálculo del factorial mediante recursividad
 * 
 */
/**
 * Function factorial, ponemos ahora los parametros
 * @param num: number, lo que entra es un número
 * @returns: num, lo que sale es un número
 * Ahora ya la implemento
 * Se calcula el producto de num por todos los inferiores a él hasta el 1
 * es decir el producto de 1 por todos los superiores a él hasta llegar a num
 * 
 */

function factorial(num) {
    if (num <=0) {//hacer un trycatch en casa para ver si es número number= 'Pepe'
        //entraría el 0 y los negativos
        return 0 //hay que poner el resultado siempre
    }
    let r = 1 //por eso hay que poner 1 un valor de 1 en *si fuera suma sería 0
   for (let i = 1; i <= num; i++) {
       r = r*i//hace un bucle las vueltas que me diceni es por 1, por 2... y lo voy almacenando en el resultado, qué va calculando progresivamente
       //en este caso r se pone 1 inicializado porque 1*1 es 1 y cuando sumamos en 0 y sería 0+1 porque así
       //te dará el primer valor sino te daría un error
       //console.log(r)vamos a sacar los elementos intermedios
   }

   return r
}
//una forma de hacer un bucle sin que sea un bucle ejecutandose
//el concepto de factorial es un 
//5! = 5*4! = 5*4*3! si nº 
function factorial (num) {
      //necesito guardar el resultado en algun sitio y por eso se pone let r
    //let r como no quiero poner r pongo num
    if (num <0 || parseInt(num) !== num) {
        throw 'Los nº negativos no tienen factorial'//return 0//entraria el 0 y los negativos por si acaso lo pongo
    } else if (num ===0) {
        return 1
    }
    else if (num===1) {
        return num//cuando volvamos al 1 en vez de devolverte el 1 volvemos de nuevo hacia atrás
   
        }
        else if (num >170) {
            throw "No puedo calcular factoriales de nº tan grandes" // los throw esta para que cree una excepción en vez de return disparo un throw return "No puedo calcular factoriales de nº tan grandes"
        }
    return num * factorial(num-1)//siempre que sea cualquier otro nº daría un nº y haría un bucle

}
let n=0
n=0
n=-5
n=6
n=77
n=171 //los ordenadores tienen un límite a partir del factorial de 170 ya pondría infinito pueden manejar 10 elevado a la 306
//por eso te pone infinito, desbordamiento de la memoria, js no da error
try {
    console.log(factorial(n))
} catch (error) {
    console.log (error)
}

//es mas facil pensar en bucle que en recursividad, en el momento que tenemos una function factorial pasando a otro parametro
//no hay if pero sigue siendo recursividad
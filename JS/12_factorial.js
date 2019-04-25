//Para hacer un proceso repetitivo, un bucle= for y luego los esnipes
//for tiene 4 snipes
//siempre tenemos 3 condiciones
/*for (
    let i = 0; //es el contador si quiero dar 5 vueltas y como se pone de la 0 a la 4
     i < 5; //mientras i sea menor que, a ver cuantas vueltas quieres dar 
     i++) //i++ el contador sube de uno en 1, lo mas habitual es así
     {// si preferis que en vez de i=0 quieres poner i=1 habría que poner i<=5
        console.log(i+1)//habría que poner el +1 para que me aparezca del 1 al 5 en vez del 0-4
      
    
} muy practico para recorrer elementos*/
/**
 * Programa de calculo del factorial de un número, hacemos programitas y se llaman funciones
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
        r = r*i//i es por 1, por 2... y lo voy almacenando en el resultado, qué va calculando progresivamente
        //en este caso r se pone 1 inicializado porque 1*1 es 1 y cuando sumamos en 0 y sería 0+1 porque así
        //te dará el primer valor sino te daría un error
        //console.log(r)vamos a sacar los elementos intermedios
    }
 
    return r
 }
 
 factorial(5)//es una función pura? estes donde estes te va a dar siempre el mismo resultado, da igual las variables
 //si pusiera un console.log dentro de la función no porque sino no sería pura
 let number = 0
 number = 5
 number = -4// como tambien necesito poner esta condicion pondria || num<0 o mas facil pongo num<= 0
 console.log(factorial(number))//tendríamos error con el 0 y por ello le vamos a poner un if(num dentro de la funcion)
 //si pongo if(num) dice que sería verdadero si los numeros son 1 o mayores truly pero voy a poner ! para que me toque un 0
//añadir el control de errores, todo lo que no sea números
//If un else y un solo return
function factorial2(num) {
    let r = 1
    if (num <=0) {
        r=0
    } else//haces el bucle es lo mismo que antes 
    { for (let i = 1; i <= num; i++) {
        r = r*i
    }
}
    return r
}

number=0
number=5
number=-4
//number='Pepe'
console.log(factorial(number))


number= 0
number= -4
number= 5
console.log(factorial2(number))


let numbers = [5, 8, 23, 45, 67, 56, 89]
//quiero el arrays de los cuadrados
//cogiendo cada item del array, con un for pero hay una forma mas chula proyectar un array, mapear un array
//la proyección de una matriz es hacer otra matriz
//si yo lo hiciera a mano: let cuadrados=[23*23, 45*45]
//let cuadrados = numbers.map()//la funcion de que quiero que haga y pasamos una funcion anonima
//porque solo la vamos a usar una vez
//let cuadrados = numbers.map () (function {})pero es mejor ponerlo tú
//let cuadrados = numbers.map((item) => { return item*item})//esto lo tengo que retornar
//porque si no pongo el return la funcion no devuelve nada
//esto en vez de return y los {} no se pone se pone así
let cuadrados = numbers.map(item => item*item)
//si quiero hacer una sumaTotal voy al 5 y sumo 8 voy recorriendo todo y por ello es un bucle y por ello siempre iniciaríamos
//0 porque es una suma si fuera multiplicar sería por 1
let sumaTotal = 0
for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
  //en este caso me da igual i porque voy a dar todas las vueltas
  //sumaTotal =sumaTotal + item
  sumaTotal += item  
}

//let sumaCuadrados//en vez de hacer un bucle for se hace con la familia de los callbacks forEach
//es una versión functional del bucle, recorre el array en cada vuelta hace lo que tu quieras, no devuelve nada
//el bucle tampoco devuelve nada yo pongo la operación que quiera hacer

let sumaCuadrados = 0
cuadrados.forEach(item => sumaCuadrados +=item) //es lo mismo que lo de arriba incluso mas eficaz es lo mismo que un for
//filter es parecido a map, filtra un array me devuelve un array pero no tien porque tener la misma longitud
//Ej de number quiero solo los impares o solo los pares, map no me valdría porque devuelve siempre la misma longitud
//filter no hace operaciones solo selecciona aquellos que nos interesen
//sería con un for y luego un if pero eso son 7 lineas y sin embargo esto es mucho mas simple
let numbersPares = numbers.filter(item => !(item % 2))//esto comprobaría los impares
//si algo da cero es false, si algo no da cero es true, ya me lo hace la conversión a trule y a false
// la ! se pone un not y hay que poner los paréntesis
//el % es el resto se llama módulo y tiene que terminar en 2
let numbersImpares = numbers.filter(item => item % 2)

let limit = 25
let numbersGrandes = numbers.filter(item => item >= limit)
//bucle forEach se usa mucho mas que el bucle for

let productoAcumulado = numbers.reduce((a, b) => a*b)//a es lo que ya lleva y b al siguiente
let sumaAcumulada = numbers.reduce((a, b) => a+b) //a es siempre lo qeu lleva y b el siguiente y va reduciendo

console.log(cuadrados)//map siempre genera un array de la misma longitud de entrada
console.log(sumaTotal)
console.log(numbersPares)
console.log(numbersImpares)
console.log(numbersGrandes)
console.log(productoAcumulado)
console.log(sumaAcumulada)
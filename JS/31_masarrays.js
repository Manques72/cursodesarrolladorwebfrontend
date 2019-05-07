let nombres = ['Pepe', 'Juan', 'Bernardette', 'Penelope', 'Eustaquio']
/**
 * slice es una función que no modifica los nombres, es inmutable
 */
//el valor que hace por defecto es 0, slice sin argumentos
//me saca listas parciales por Ej: (0,3) le dices hasta el 1º que no quieras

console.log(nombres.slice(3,4))//es muy util para sacar trocitos de arrays

//Splice es una función que sí es mutable, te hace una rebanada, habríua que hacer un CLON
//Si luego necesitas que te valga

let newNombres= nombres.splice(1, 1)//una buena manera de quitar número
console.clear()
console.log(nombres)
console.log(newNombres)
//se usan mucho slice y splice

//Colas y pilas se usan también mucho, son todas mutables, una cola se entra por un lado
//y por otro salen Ej a, b, c y la pila es como una pila de platos

nombres.push()//añade un nuevo elemento, añade al final
//la otra manera de hacer un push(x)
nombres.pop()//quita al final una pila


nombres.shift()//me permite quitar el primero
nombres.unshift() //añadir al principio, 
//no me devuelve nada, me modifica un array

nombres.push('Aurora') //esto es lo mismo que:
//nombres[nombres.length] = 'Aurora', pero es mejor la de push mas elegante

// En ES6 se utizan let y const para declarar variables

let nombre // Declarar
nombre = 'Pepe' // Inicializar

let edad = 34 // Declarar e inicializar

// Tipos de datos
/* 
En otros lenguajes hay declaración OBLIGATORIA Y EXPLÍCITA de tipos
int x -> variable x de tipo entero sin valor 
En JS los tipos son débiles: no podrían cambiar, no se declaran explícitamente, son implicitos al valor, Ej x=23, se da por hecho que es un número no lo digo explicitamente porque ya lo vemos
 y dinámicos: pueden cambiar, en JS
*/

// undefined
let data
console.log(data)
console.log(typeof data)

//A - DATOS PRIMITIVOS

// strings
data = 'Hola amigos'
console.log(data)
console.log(typeof data)

// numbers
data = 35
console.log(data)
console.log(typeof data)

// booleans, es un dato lógico Ej: Soy hombre o mujer
data = true
data = false
console.log(data)
console.log(typeof data)

//B-Datos referenciados

// object
data = { name: 'Pepe', age: 34}
console.log(data)
console.log(typeof data)

// object tipo array
data = [23, 45, 78]
data = ['Lunes', 'Martes', 23, 78, true, undefined, {}]
console.log(data)
console.log(typeof data)

function mostrar() {}

console.log(mostrar)
console.log(typeof mostrar)

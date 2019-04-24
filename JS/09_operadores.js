//Asignacion por excelencia es el = suelto

let x = 23
//es una forma abreviada de x= x+1 y esto es = a x++
x++

// x = x-1
x--

//Operadores Aritmeticos
y = 2
let r = x + y
r = x + y
r = x - y
r = x * y
r = x / y // 11.5node
 //si quisiera hacer la division entera tendría que parsearla 11.5
//como consigo la division entera: r = parseInt(x/y) 
r = parseInt(x/y) // 11 para 
//funciones de redondeo, contable, floor hacia abajo, ceil hacia arriba
r= Math.round()
r= Math.floor()
r= Math.ceil()
r = x % y //es como si fuera el resto
console.log(r)

y = 2
 y +=3 //es lo mismo que si pongo y=y+3 operadores de asignación
 y-=3 //es lo mismo que si pongo y=y-3 operadores de asignación
 y*=2
 y/=3
 y%=2

 //Operador ternario
let edad = 15
let i
 if (x>=18) {
    i=0
 } else {
     i=1
 }
//delante de la ? es mi condicion y delante de los : es verdadero y luego falso
 //___ ? ____ : ____

 edad=25
 i = edad>= 18 ? 0 : 1
 console.log('Indice', 1)

 //Objetos
 let user={nombre: 'Pepe', edad: 23}
//esto se conoce un objeto literal y notacion JSON Jeison, clave, valor, clave, valor
console.log(user.nombre)
//Arrays, se almacenan una serie de valores indexados numericamente en vez de clave, valor, solo valores y siempre
//se empieza en cero
let numeros = [12, 45, 67]
let usuarios = ['Pepe', 'Juan', 'Rosa', 'Maria']//cuando yo quiero hacer a uno por consola el punto console.log(user,nombre)
console.log(usuarios[1])//me da Juan porque si pongo 0 me daría Pepe porque el 90% del trabajo en la web
//es pedir una lista y son arrays en la web son listas de cosas manejarse bien con los arrays
usuarios[usuarios.length]= 'Ramon'
usuarios[usuarios.length]= 'Carolina'
usuarios[100] ='Ernesto'
console.log(usuarios.length)
console.log(usuarios)

//Mensajes al usuario

let mensajes =[
    'Bienvenido al casino', 'No se admiten menores de edad'
]

console.log(mensajes[i])

// && Andpersan es y and
// || or
// ! not
let x = 23
//!x esto sería not x es falso, o sea todo lo que no sea 23 y !!x es verdadero
//!x poner un not lo convierte totalmente en booleano no hacen falta parenteris

var1 && var2 || var3 //¿qué se evalua antes el y o el o? se pueden poner los parentesis
// por ejemplo (var1 && var2) || var3 si no me acuerdo pongo al que me convenga aquí sería la y
// y si lo pongo var1 && (var2 || var3) prevalecerá la o



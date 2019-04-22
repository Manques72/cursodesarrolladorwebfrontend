let data = 20
data = 30

console.log(data)

const DATA = 25
// DATA = 50 daría un error porque si ponemos constante es que no queremos que cambie de valor

console.log(DATA)

const user = {
    name: 'Pepe',
    edad: 25
    // es un objeto el user

}

//Java / C#... son lenguajes orientados a objetos, basados en clases
//user1 = new User()

//JS es un LOO basado en prototipos y objetos literales
//como son objetos son dinámicas y user.altura no se ajusta las clases y te lo puedes inventar

user.altura = 179

console.log (user)
console.log (user.name)
console.log (user.edad) //asi las tenemos agrupadas en objetos

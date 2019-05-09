//Personas
//Alumnos, nombre como parte del alumno, antes de ser alumno ya me llamaba Juan
//idea de la herencia

function Persona() {
}

Persona.prototype.saludar = function (aQuien = 'amigo') {
    console.log(`Hola ${aQuien}, soy ${this.nombre}`)

}
function Alumno(curso, nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.curso = curso//si quiero que haya una relación entre alumno y curso tengo que poner
    //Alumno.prototype, almuno va a heredar nombre y edad, hay que escribirlo según dice Ale
}

Alumno.prototype = new Persona()//hijo prototype = a padre
Alumno.prototype.constructor = Alumno // hijo prototype constructor hijo
//la herencia la hago desde el hijo por eso pongo Alumno en mayuscula

const alumno1 = new Alumno('Pepe', 23, 'JavaScript')
console.log(alumno1)//ademas de alumno sea persona
alumno1.saludar()

///////////
//Herencia prototípica (prototypal inheritance)
//basandose en la idea que los objetos heredan de objetos de DOuglas Crockford

console.clear()

const person1 = {
    nombre: 'Pepe',
    edad: 25,
    saludar: function(aQuien = 'amigo')
        {
            console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    } 
}

user1 = Object.create(person1)
user1.clave = '1234'

console.log(user1)
console.log(user1.nombre)
user1.saludar()
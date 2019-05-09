class Persona {
//como es una clase lo pongo en mayuscula porque por debajo va a haber una función constructora
//y lo hacemos con constructor que es el contenido interno de la function constructora
    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar (aQuien = 'amigo')
    {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)

    }//saludar () {}esto es un metodo la guardo en el prototipo
}

person1 = new Persona('Pepe', 23)

person1.altura = 175 //el prototipo lo cambia de nombre, no hace falta hacer nada

console.log(person1)
person1.saludar()

class Alumno extends Persona{//quiero que alumno extienda la clase persona
    constructor(nombre, edad, curso) {
        super(nombre, edad)//este es el padre en las clases
        this.curso = curso
    }
    saludar(aQuien = 'amigo') {
        super.saludar(aQuien)
        console.log(`Estoy estudiando ${this.curso}`)
    }
}

alumno1 = new Alumno('Elena', 22, 'WordPress')
console.log(alumno1)
alumno1.saludar()
class Persona {
    //y lo hacemos con constructor que es el contenido interno de la function constructora
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.alma = true;
    }
    saludar(aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`);
    } //saludar () {}esto es un metodo la guardo en el prototipo
}
//La inferencia de clase, los tipos se infieren despues de poner esto, será de tipo persona el person1 no hace falta que le diga es de tipo persona lo deduce y ya lo pone
let person1 = new Persona('Pepe', 23); //inferencia persona
//person1.altura = 175 //daría un error en TS el prototipo lo cambia de nombre, no hace falta hacer nada
console.log(person1);
person1.saludar();
class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad); //este es el padre en las clases
        this.curso = curso;
    }
    saludar(aQuien = 'amigo') {
        super.saludar(aQuien);
        console.log(`Estoy estudiando ${this.curso}`);
    }
}
alumno1 = new Alumno('Elena', 22, 'WordPress');
console.log(alumno1);
alumno1.saludar();
//# sourceMappingURL=03_clases.js.map
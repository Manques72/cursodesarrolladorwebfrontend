interface Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    //también podemos poner la funcion comer, la forma de declararlas () => ya dice que es una funcion y void lo que sale
    comer: () => void
}
//la interface es el mínimo necesario pero la propiedad existe, luego en perro, gato puedes poner mas

class Perro implements Animal {
    nombre: string
    edad: number
    isDomestic: boolean 
    tipo: string
    colorPiel: string
    comer() {}
}
class Gato implements Animal {
    nombre: string
    edad: number
    isDomestic: boolean 
    tipo: string
    peso: number
    comer() {}
}

let a1: Animal
let p1: Perro
let g1: Gato

//a1 es un objeto y ya sabe que es un animal
a1 = new Perro()
a1 = new Perro()
//g1 = new Perro()daría un error
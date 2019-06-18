{
    interface Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
   
}
//le falta el constructor a la clase

class Caballo implements Animal {
    /*nombre: string
    edad: number
    isDomestic: boolean 
    tipo: string
    peso: Number

    constructor(nombre, edad, isDomestic, tipo, peso) {
        this.nombre = nombre
        this.edad = edad
        this.isDomestic = isDomestic
        this.tipo = tipo
        this.peso = peso
    }*/
    
    //ahora hay que hacerles las variables

constructor(
    public nombre: string,
    public edad: number,
    public isDomestic: boolean,
    public tipo: string,
    public peso: number) {}
}

    let c1 = new Caballo('Rufo', 2, true, 'Arabe', 300)
    console.log(c1)

}

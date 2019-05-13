// Ejemplo de 'pseudopropiedad' getter

let persona = {
    nombre: 'Pepe',
    nacim : new Date(1965, 8, 31),
    //yo podia haber puesto esto: CalcularEdad : function () {
    //  return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
    //}
    get edad () {
        return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
    },
    amigos: [],
    set nuevoAmigo(amigo) {
      this.amigos.push(amigo);
    }   
}

persona.nuevoAmigo = 'Antonio'
console.log(persona)
console.log(persona.edad)

/**
 * En Java, C#...
 * 
 * class Persona {
 *  private edad}
 * 
 * p1 = new Persona()
 * p1.edad = 23 //Error porque la propiedad es privada
 * console.log(p1.edad) //Error
 * para que me vale una propiedad que no puedo ver, get y set a lo mejor quiero verla pero no quiero que 
 * varie
 * gracias a getter y setter podamos tener pseudopropiedades
 * 
 */
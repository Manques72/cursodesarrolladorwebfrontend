const user1 = {
    nombre: 'Pepe',
    edad: 25,
    saludar: function(aQuien = 'amigo')//este parametro de aQuien me lo invento
    //y es un valor por defecto, podrá tener tantos parametros como quiera
    //ademas como user1.saludar('Ernesto) como user1 es el objeto ya sabe su nombre
    //y su edad que es Pepe, Ej Elena no saldría pero si la pongo this.saludar pues lo pongo y ya sabría
        {
            console.log(`Hola ${aQuien}, soy ${this.nombre}`)

    } //los verbos hacen cosas hola soy no se que, es un método
//quiero tener una function que quiere saludar
//en cuanto le pongo () {} esto es un método porqeu está vacío y pongo la function dentro del saludar y pongo un this
//
}
//vamos a hacer funciones constructoras que son las que la primera letra va en mayuscula

//me devuelve un objeto y siempre se invoca con new

function User(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.mascotas = [] //como pongo mascotas sería un array y pondría dentro de un array un push no voy a guardar el nombre
    //el objeto, guardo la mascota
    /*this.saludar = function(aQuien = 'amigo') //pongo this y ya Elena y Ernesto podrían saludar
    {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)*/

}
//aquí estoy creando muchos this y es mejor
      
User.prototype.saludar = function(aQuien = 'amigo')//si yo pusiera Object en vez de User entonces ya todos saben saludar
//todos mis objetos ya saben saludar. 
{
    console.log(`Hola ${aQuien}, soy ${this.nombre}`)

}//ahora mismo la hemos hecho mas globar entre los objetos de los users
//esto va a ser un objeto de la clase mascota new Mascota
User.prototype.adoptarMascota = function (mascota = new Mascota()) {
    //habría que guardarlo en una propiedad como this mascota, se podría crear desde el ppio
    this.mascotas.push(mascota)//donde guarda la mascota y los usuarios de la clase user pueden adoptar na mascota
}

//queremos mascotas queremos function constructora de Mascota siempre en singular es de uno en uno
function Mascota(nombre, especie, raza='')//no importa el orden de los datos
//se pone comillas en la raza para que no te salga undefined por si no lo sabemos

{
    this.nombre = nombre
    this.especie = especie
    this.raza = raza//los parametros de una funcion constructora son parametros y pueden tener valores por defecto

}

let user2 = new User('Elena', 23)
let user3 = new User('Ernesto', 30)
let mascota1 = new Mascota('Cesar', 'Perro')
let mascota2 = new Mascota('Titus', 'gato', 'persa')
mascota2.edad= 2//aunque no venga la edad puedo añadir y quitar cosas
delete mascota1.raza

user2.adoptarMascota(mascota1)


console.log(mascota1.nombre)
console.log(user2.mascotas[0].nombre)//no hay 2 objetos hay solo 1 por eso aparece Cesar, Cesar porque los objetos son referencias
//como en la realidad y esto se llama dependencia, el obj mascota depende del usuario. Metodo adoptarMascota

console.log(user1)
console.log(user2)
console.log(user3)
console.log(mascota1)
console.log(mascota2)

user1.saludar('Ernesto')
user2.saludar('Pepe')
user3.saludar(user2.nombre)//ha creado un prototipo

user1.saludar(mascota1.especie)
user1.saludar(mascota2.raza + ' ' + mascota2.nombre)
//mascota1.saludar(user2.nombre)
//mascota1.saludar(user1.nombre)


/*function saludar(user)//podría recibir un parametro por eso pongo los parametros
 { console.log(`Hola, soy ${user}`)

 }
 saludar('Pepe') esto mismo lo comenta y nos vamos a la linea 4 para hacer un método*/

//let datos = new Array()
//podría poner let user1=new User() pero no tengo la function pues en vez de name se pone User function User(nombre,edad)
//pero me entrarían como variables y me gustaría guardarlas como funcion constructora por eso ponemos this, qué propiedades quieres
//que tenga tu objeto pues nombre y edad así que hay que darle valor, con el this no hace falta let
//propiedad parametro son dos cosas distintas: this.nombre la propiedad que quiero guardar en el objeto y nombre es el parametro
//Pepe es un objeto, Elena ha nadico vinculada a un prototipo por eso pone user cuando le des node

//let aDatos = [2, 4]
//let aNombres = ['Pepe', 'Juan']

/*aDatos.join()
aNombres.join()//imagínate que todo lo tuvieramos que hacer esto se guarda en el prototipo de los arrays
//para guardar cosas en nuetra function constructora y ya tiene una propiedad prototype User.prototype.saludar*/
//estos son prototipos no clases

//Diferencia entre prototipos y clases

//Dependencia: método adopatarMascota

//Asociación: atributo mascota = new Mascota, no se pasa por el método

user3.mascotas[0] = new Mascota('Piolin', 'canario')
console.log(user3.mascotas[0].nombre)



/**
 * Notación literal o JSON 
 */
//como no hay clases en JS es un conjuinto de objetos y tienen que coincidir las propiedades que coincidan
//son dinamicos
 //user1 = new Usuario
 //user2 = new Usuario una clase me marca si por ejemplo tiene que tener clase o no


let user1 = {
    nombre: 'Pepe',//nombre es la propiedad
    edad: 24, //sin embargo aquí sí es mejor el calculo para que te calcule cuando vayas aumentando
    isAlumno: true, //propiedad booliana
    direccion: {
        calle: 'Pez',
        num: '3',//es un string lo pone como texto porque es siempre el nº de la calle
        poblacion: 'Madrid'
        //podemos poner una funcion y me invento un nombre Ej: saludar
    }, //creo un objeto dentro de otro objeto, 
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this,edad} años`)//esto es una creacion de objeto no se pone user nombre sino que ere this, tu mismo
    }
}//esto es las propiedades que le quieras poner

let user2 = {
    nombre: 'Rosa',
    edad: 27,
    curso: 'Front'
}
user1.nombre= 'Jose'
user1.curso=  'Back'//lo que nunca vas a poder hacer son propiedades nuevas o están o no
//

user1.saludar()//para ejecutar una funcion se pone parentesis, a estas funciones 
//dentro de las funciones en objetos se llaman métodos, son propiedades todas saludar este 
//es de un tipo objeto
//casi siempre en mi pagina voy a trabajar con objetos de datos
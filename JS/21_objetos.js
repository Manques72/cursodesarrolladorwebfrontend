/**
 * Notación literal o JSON 
 */
//como no hay clases en JS es un conjunto de objetos y tienen que coincidir las propiedades que coincidan
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

//let user1= new Object, o mayuscula porque crea objetos
//todos los objetos tienen prototypes y el propio objeto tiene un null, no se usa para nada
//es como undefined, y así los objetos de new Object, no significa nada pero para que lo sepamos
//en la práctica vamos a usar no el prototipo de Object sino el literal.
//Nuestros objetos van a tener propiedades, pueden ser de todos los tipos que conocemos, propiedad nombre que es string, edad es number, alumno es bulian
//dirección es un object
//saludar es una propiedad muy especial es una función se denominan métodos, porque en otros lenguajes tb se llaman así.
//eso lo invocamos con nombre del objeto: user1.saludar() si tu pones saludar te dará error poruqe esta dentro del objeto
//no le estamos pidiendo algo qeu existe, lo métodos se invocan, dentro como están declarados en la creación del objeto
//tienen una palabra reservada this y si yo quiero que se utilicen los nombres esta función  
//let user1 = new Object()
//user1.nombre= 'Pepe'
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
//En otros lenguajes esto no es así porque se utilizan class. Lenguajes orientados mas a clases y no a objetos. Para crear un obj en JAVA o en C
//necesito tener una clase por ej alumno y elijo que tienen que tener instancio tantos objetos como necesito. Modelo de esta clase
//13 para nosotros este alumno tiene este nombre, esta edad y si en la clase no he definido la altura no podría hacerlo porque no he creado
//una clase de eso porque el sistema trabaja por moldes. En JS se programa de otra manera, se basa en el concepto de prototipos es parecido
//a las clases pero no es exactamente. Los objetos se crean let {y se pone lo que se quiera}, el obj user1, user2 no comparten nada
//comparten dos propiedades no hay ninguna relación por detras son lenguajes de variables con let
//let user1= new Object, o mayuscula porque crea objetos
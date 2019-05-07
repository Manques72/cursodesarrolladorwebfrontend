function main() {
    let cadena = 'Hola amigo'
    let alumno = {
    // let alumno=por detras de esto se ha ejecutado new Object, el prototipo de alumno es object
        saludar: function() {}
    }
    let users = ['Pepe', 'Elena', 'Julia']
    // let users = new Array hacen un prototipo particular y así crea un object y una serie de objetos que usan objcet como prototipo
    //pero hace mas cosas
    console.log(typeof users)
    cadena.lenght //esto no lleva llaves porque4 no es una propiedad
//alumno mi objeto puede agrupar saludar si pongo users muchas mas
//porque es el prototipo de los arrays y así puedo hacer operaciones con los arrays
//si nosotros cogemos cadena es un string no son objetos pero sin embargo nos muestran
//mas propiedades
//cadena.toLowerCase //la propiedad lo convierte en minusculas
//si no es un objeto por qué tiene propiedades. En la mayoria de los lenguajes de programación
//se les pasa el objeto cadena. Las variables primitivas en otros lenguajes tiene el sistema metido
//en JS lo envuelve y es del tipo string por debajo se hace un let cadenaTemp = new String es una funcion
//constructora de objetos, si pones cadena y un punto puedes ver todas las qeu tiene
//trata a los string como si fueran objetos. esos objetos se ejecutan y desaparecen
console.log(cadena.length)
console.log(cadena.toLocaleLowerCase())

let aCadena = cadena.split(' ')//a veces nos viene bien en separar las cadenas el inverso de split
//que ya no es una cadena de arrays sino que es un parametro
let cadenaSinEspacios = aCadena.join(' ')
//mientras lo que me devuelva sea del tipo adecuado las puedo ir concatenando una detras de otra
//una cadena se posiciona igual que una array
cadena = cadena.toUpperCase().split(' ').join('')//esto es concatenación de operaciones
console.log(cadena)//puedo concatenar da igual uppercase luego join y luego split porque son arrays
//no es que concatenar sea
let url ='https://www.cife.es/alumnos'
//url.indexOf('//')
let urlTemp = url.slice(url.indexOf('//')//2 por delante de la doble barra
+2)//, pongo 2 para quitar los dos caracteres 
//es para qeu empieze y termine en otro sitio
urlTemp = urlTemp.slice(0, urlTemp.indexOf('/'))
console.log(urlTemp)
//main()si no pones el main no sale nada
//slice y substring es lo mismo
//esto es para ver un host, una url y conocer todo

//hacerlo tb desde la array de la url: aUrl

//let aUrl = url.split('/')
//aUrl[1]esto es un miembro del array vamos es un string
console.log(url.split('/')[2])
console.log(url[12])
}
//tb esta indexOf, tb codigos unicode charCode y front
main()
//function puede ser un nº (acostumbrarnos a que el 0 significa todo minusculas y el 1 todo mayusculas y el 2 min y may), true o false
//Siempre es comprobar y mostrar
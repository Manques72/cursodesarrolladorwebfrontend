let user = {
    nombre: 'Pepe',
    edad: 23,
    curso: 'Front'//esto es un objeto pero querría mandarle a un back esto y como no es de JS no lo entiende
} //para intercambiar información con los sistemas

//let userString = "{nombre: 'Pepe', edad: 23, curso: 'Front'}" //esto si lo entenderían
//esta operacion no se usa nunca se usa el objeto JSON

//si le ponemos un punto me aparece stringify, vamos a hacer un console.log de un objeto
console.log(user)
let cadena = JSON.stringify(user)
console.log(JSON.stringify(user))

console.log(cadena)

console.log(JSON.parse(cadena))//crea un objeto nuevo, lo clona

let alumno1 = {
    nombre: 'Elena',
    edad: 28,
    curso: 'JavaScript'
}

//alumno2 = alumno1
//alumno2.curso = 'Diseño', en vez de esto le vamos a poner JSON y serían dos objetos no uno

alumno2 = JSON.parse(JSON.stringify(alumno1))//este es recursivo
alumno2.nombre= 'Carlos'//he clonado el objeto por un lado JSON y parse

alumno3 = Object.assign({}, alumno1)//este tb te lo clona pero no es recursivo, si no es objeto no te lo clona
alumno3.nombre = 'Raul'

console.log(alumno1)
console.log(alumno2)


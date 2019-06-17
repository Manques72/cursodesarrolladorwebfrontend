let nombre: string;
let edad: number;
let isAlumno: boolean;

nombre = 'Pepe';
edad = 23
isAlumno = true;

let profesion = 'Programador' //no hace falta poner el string algunos sí lo ponen
//ha creido el tipo se dice infiere el tipo se puede poner el tipo como string
let cualquierCosa
//profesion = 34para que una variable tenga un tipo lo podemos declarar en algun momento

let cualquierOtraCosa: any

let id: string | number;

id = 34
id = 'x-34'

let aDatos: [number]
let aPersonas: Array<string>  //Array<any>

aDatos = [4,8,9] //los corchetes y por delante el tipo que quiero asignar y con las '' no se puede asignar a este array porqeu es de numbers
aPersonas = ['Pepe', 'Juan', 'Elena']
aTresValores = [0, 0, 0]

let oDatos: {
    nombre: string
    edad: number
}//o porque es un objeto


oDatos = {
    nombre: 'Pepe',
    edad: 34
}

oDatos = 'Pepe'

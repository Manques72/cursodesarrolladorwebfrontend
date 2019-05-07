//array es un objeto
let datos = [] //por debajo se está ejecutando new Array
// let datos = new Array () qeu están guardados en el prototipo de los Arrays
//son dinamicos y modificables
datos = [1,2,3,5,7,9]//podriamos poner nombres aunqeu no se suele poner porque no tiene sentido
//igual que ya no crezca, sí los arrays se puede poner sino tendríamos que poner= datos.push(45)
//podríamos poner ya: let datos [1,2,3,5,7,9] y asi me ahorro una linea
function numeroAlAzar100() {
    return parseInt(Math.random()*100)
}
/**
 * otra function que crea un array de n aleatorios como mínimo 1
 * function aleatorios
 * @param: límite, ya me dice qué es lo que voy a guardar es un number
 * @returns: devuelve un array de números array [number]
 */
function aleatorios(limite=1) {
//como tiene un return hay que poner el resultado
    //let r = ['']//le digo que va a ser un array
   // r.length()//como he creado un array vacio length vale 0 como es una function se pone ()
    let r = []

    //let cadena = 'Hola'
    //cadena.lenght
//ahora relleno lo que quiero es un bucle o sea para que me repita un for en el 
//array.lenght pongo limite y en el constant, la posición i de array y en el array pongo r qeu es la variable de resultado
//i++ es yendo de uno en uno si quisiera de dos: i=i + 2 y solo tendría 6 numeros y 6 huecos
    for (let i = 0; i < limite; i++) {
        r[i]=numeroAlAzar100();
        
    }
    return r
    
}
console.log(aleatorios(12))

//console.log(59835678 % 23)//me da 5 lo que quiero es el resto entonces se pone %
//59835678M
function prueba() {
    let datos = [1,7,3,2]
    let masDatos = [1,4,6]//para que no me lo ponga mal necesito la function concat
    let arrayFinal = datos.concat(masDatos)
    //importancia de los arrays, el método array me devuelve algo
    //console.log(datos + masDatos) 
    console.log(arrayFinal)
    //datos.sort()//sort es para ordenar
    //console.log(datos)//la function con cat no cambia con sort sí cambia y ya no los podría recuperar
    //pero bueno decimos hacemos una copia del array let temp= datos, temp.sort()
    
    //let temp = datos//esto es copiar referencias y no sirve para una copia de seguridad
    //necesitaríamos clonar un array que es un poco rara, reside en los prototipos de los arrays
    //pero no puedo poner datos. y no me sale nada y se quedan en el protopipo y escribo el array en mayuscula
    //y me da las funciones del prototipo
    //CLONAR UN ARRAY
    let temp = datos.slice(0)//esto es para clonar un array
    //la funcion sort solo numera alfabeticamente por lo que si tenemos: 1,7,3,70,9, nos pondría: 137709 así que tendríamos que poner una function
//de ordenado que sería temp.sort(function(a,b)){return a-b} y seria las ahorro function se pone con =>
    temp.sort((a,b)=> a-b) //numera alfabéticamente y reverse al contrario
    //son implementadas como mutables me alteran todo por ello habría que clonar
    console.clear()
    console.log('Esto es temp')
    console.log(temp)
    console.log('Esto es datos')
    //console.log(datos)
    console.log(datos.join(''))//devolvería 1732 si quisiera numero se pone +datos.join y saldría nº
}

prueba()
//es una lista, sucesión de elementos
let numeros = [1, 2, 4, 6]
let amigos = ['Pepe', 'Rosa', 'Juan']
let deTodo = [1, 45, 'Perro', 'Gato', true, { nombre: 'Pepe' }]//normalmente son o números o texto
//console.log(deTodo) te lo va a hacer sin problemas
//array tiene longitud ilimitada a no ser que la controles, están muy relacionadas con los bucles
//ir por la posición desde el ppio hasta el final
//para decir hola a tus amigos y te lo da casi hecho, snipes viene
//se cambia en vez de arrays amigos
for (let i = 0; i < amigos.length; i++) {
    const element = amigos[i];//element es cada uno de los nombres de amigos Ej Rosa si da un 1, Pepe si da un 0etc
    //si yo les quiero saludar pondría hola element y como no quiero concatenar pongo los $
    console.log(`Hola ${element}`)

}

/**
 * Un programa que compruebe si un nombre ha sido usado alguna vez por un rey de España
 * establecer un array
 */

/**
 * Function isRey
 * @name: string
 * @returns: boolean casi todas las funciones se llaman is Rey si isRey devuelve true y sino false
 */
function isRey(name) {
    let reyes = ['Fernando', 'Isabel', 'Carlos', 'Felipe',
        'Luis', 'Jose', 'Amadeo', 'Juan Carlos', 'Alfonso']
    //quiero ver si name es Fernando, si name es Isabel etc o sea que tengo qeu poner un array es decir un for
    for (let i = 0; i < reyes.length; i++) {//en array ponemos reyes
        const rey = reyes[i];//element lo vamos a llamar rey
        //if () nunca se comparan strings o todo mayusculas o todas minusculas en vez de poner ===name pongo toLowerCase y asi comparo todo 
        //minusculas, vamos estandarizarlo
        if (rey.toLowerCase() === name.toLowerCase())
            return true
    }
    return false//como no quiero que de vueltas innecesarias me interesa que el return este aquí
}


//necesito poner la function mostrar para que en vez de verdadero falso me salga la frase que quiero como r
//@param tiene que tener un nombre de tipo string: @param name: string
//si le paso el nombre le paso un booliano pero es mejor desde dentro para que solo haya un parametro
//@returns: la function mostrar es mostrar por pantalla no es devolver es solo mostrar y no devuelve nada y se llaman void
//@returns: void

function mostrar(name) {
    //tiene que mostrar un mensaje o una frase y hay dos y me creo un array de mensajes
    let i = 1
    let mensajes = [
        `El nombre ${name} ha sido usado por un rey de España`,
        `Ningún rey de España se ha llamado nunca ${name}`
    ]
    if (isRey(name))//ya la he hecho booliana antes así que no necesito qeu sea igual a nada
    {
        i = 0
    }
    //tengo un mensaje y tengo que poner i y tengo que calcular un i
    console.log(mensajes[i])
}

let name = 'carlos'
mostrar(name)

let data = 11
console.log(duplicar(data))
console.log(data)


//si ponemos function duplicar(data) el valor que me daría sería 11 y no 22
//Los datos primitivos pasan a la función como valores

function duplicar(x) {
    x = x * 2
    return x
}
//una cosa es el dato y otra cosa es el parametro

let user = {nombre: 'Pepe', edad: 23}
matricular(user)
console.log(user)

function matricular(obj) {//obj es un parametro y eso es una cajita
    obj.curso = 'JavaScript'
//desde fuera se le ve con user y desde dentro se le ve obj pero es lo mismo aunque sean nombres diferentes
//son dos referencias distintas pero se guardan en el mismo sitio. La unica ventaja es que yo no accedo de forma global
}

//Ej la funcion matricular requiere un 2º paramatro que es curso y le digo =
//a 'Javascript' si la funcion matricular tiene un 2º parametro lo coge como valor y si no le
//doy ningún valor Javascript

function matricular(obj, curso = 'JavaScript'){
   obj.curso = curso //podría llamarse x el curso pero es mejor curso
    //user1.curso = curso //solo me matricularía a uno y con obj.curso = curso podría matricular a todos
}//cuando yo digo obj.curso es desde dentro de matricular y user1 es desde fuera
let user1 = {nombre: 'Pepe', edad: 23}
matricular(user1, 'HTML')
console.log(user1)
let user2 = {nombre: 'Rosa'}
matricular(user2)
console.log(user2)


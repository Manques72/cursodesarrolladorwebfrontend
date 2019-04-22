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

}

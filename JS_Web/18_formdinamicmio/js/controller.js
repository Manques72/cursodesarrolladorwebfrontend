import { GENEROS } from "./datos.js";

export function controller () {
    console.log('Controller cargado')
    console.log(GENEROS)
    const aGeneros = GENEROS
    let html = ''

    let selectGeneros = document.querySelector('#generos')
    let selectAutores = document.querySelector('#autores')

    aGeneros.forEach (item => {
        console.log(item)
        html += `<option value="${item.value}">${item.label}</option>`

    })
    console.log(HTML)

}


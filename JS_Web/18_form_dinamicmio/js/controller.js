import { GENEROS } from "./datos.js";

export function controller () {
    console.log('Controller cargado')
    console.log(GENEROS)
    const aGeneros = GENEROS
    let iGenero
    let iAutor
    let html = ''

    let selectGeneros = document.querySelector('#generos')
    let selectAutores = document.querySelector('#autores')
    let btnPedir = document.querySelector("#btnPedir")

    selectGeneros.addEventListener('change', onChangeGenero)
    selectAutores.addEventListener('change', onChangeAutores)
    btnPedir.addEventListener('click', onClickPedir)//se necesitan dos parametros, uno el click y luego la funcion que sera onclickpedir 
    //o como quieras que se llame
    //esta es la forma de pedirlo: btnPedir.onclick = onClickPedir

    aGeneros.forEach ( item => {
        html += `<option value="${item.value}">${item.label}</option>`     
    })

    selectGeneros.innerHTML = html

    function onChangeGenero(ev) {
        iGenero = ev.target.selectedIndex
        let aAutores = []
        html = '<option value=""></option>'
        if (iGenero) {
            aAutores = aGeneros[iGenero].autores
            aAutores.forEach ( item => { 
                html += `<option value="${item.value}">${item.label}</option>`     
            })    
            selectAutores.focus()
        } 
        selectAutores.innerHTML = html
        btnPedir.textContent = 'Pedir titulos'
        btnPedir.disabled = true

    }
     

    function onChangeAutores (ev) { 
        if (ev.target.selectedIndex) {
            iAutor = ev.target.selectedIndex - 1
            btnPedir.textContent = 'Pedir titulos de ' + aGeneros[iGenero].autores[iAutor].label
            btnPedir.disabled = false
        } else {
            btnPedir.textContent = 'Pedir titulos'
            btnPedir.disabled = true
        }
    }

    function onClickPedir (ev) {
        console.clear()
        console.log('Iniciando Peticion')
        ajax((aGeneros)[iGenero].autores[iAutor].value)
    }
    

}


//Para AJAX 1º se instancia en un objeto y se hace con new object, new array, new persona, etc
//cuidado con las mayusculas
function ajax() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${clave}&fields=items(volumeInfo(publisher,title,language))`
    const http = new XMLHttpRequest ()
//2º Defino la funcion que quiero que responda a un evento determinado. Luego tendrá un método
//es un manejador de evento y lo hacemos con el addEventlistener y de qué objeto del ready
http.addEventListener('readystatechange', onResponse)//1º es un string y luego la funcion
//la forma antigua = htpp.onreadystatechange = onResponse

//3º Lanzar la petición al servidor tiene un método open para preparar la conexion y el método send que lanza
//la conexion el open quiere saber el método y es el HTTP y es el GET que quieres usar y la url
http.open('GET', url)
http.send(null)
//4º la funcion de respuesta y nos va a dar las siguientes propiedades el readystate, statustext y response me aparece si pongo httpa
function onResponse () {
    //va a leer según este el sistema y pasa por los estados 0, 1, 2, 3 y 4
    //cuando se va a hacer el AJAX cuando de el usuario a pedir así qeu habrá que hacer la funcion onClickPedir
    console.log(http.readyState)
    if (http.readyState == 4 && http.status ==200) {
        procesarRespuesta(http.responseText)//esto ya es algo más específico para este caso concreto
        //hago una función específica y se cogería un objeto, un array y procesarlo
    }


}

}
function procesarRespuesta(response) {
    let aDatos = JSON.parse(response).items 
   
    let aDatosFinal = aDatos.map( item => item.volumeinfo)
    console.log(aDatosFinal)
    mostrarRespuesta(aDatosFinal)
}
//¿cómo queremos mostrar los datos, ej en crear tabla
function mostrarRespuesta(aDatos) {
        let output =
        let tabla = '<tabla>'
        table += '<tr><th>Titulo</th><th>Editorial</th><th>Idioma</th></tr>'
        aDatos.forEach( (item) => tabla += `
        <tr>
        <td>$(item.title)</td>
        <td>$(item.pubisher)</td>
        <td>$(item.language)</td>
        <td></td></tr>`)
        tabla += '</table>'
        this.tabla.innerHTML = tabla
    }
}
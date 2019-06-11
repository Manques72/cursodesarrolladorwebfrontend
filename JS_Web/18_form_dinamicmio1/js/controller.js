import { GENEROS } from "./datos.js";
import {ajax} from "./ajax.js";
import {formhelper} from "./form_helper.js


export function controller () {
    console.log('Controller cargado')
    
    /**declaracion de variables */
    const aGeneros = GENEROS
    const URLBASE = 'https://www.googleapis.com/books/v1/volumes'//PONEMOS urlbase y va a ser una constante de configuración por eso va en
    let iGenero
    let iAutor
    let html = ''
    /* Elementos del DOM*/
    let selectGeneros = document.querySelector('#generos')
    let selectAutores = document.querySelector('#autores')
    let btnPedir = document.querySelector("#btnPedir") //es un nodo del DOM   QUE ES UN QUERYSELECTOR
    let inNum = document.querySelector('#num')//querySelector me devuelve una node list un conjunto de arrays tipo nodo
    let aLangRbtns = document.querySelectorAll('[name]="lang"')

    /**MANEJADORES DE eventos */
    selectGeneros.addEventListener('change', onChangeGenero)
    selectAutores.addEventListener('change', onChangeAutores)
    btnPedir.addEventListener('click', onClickPedir)

    //btnPedir.onclick =  onClickPedir
    /**Inicializacion */
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

    function onClickPedir() {
        console.clear()
        console.log('Iniciando peticion')
        //como recojo la propiedad del input es un valor y ahí recogeríamos el valor que el usuario escriba el 30, 38 el que sea
        setRadio

        let url = URLBASE + `?q=inauthor:${aGeneros[iGenero].autores[iAutor].value}`
        url += `&fields=items(volumeInfo(publisher,title,language))`
        url += `&maxResults=20`
        ajax (url, 'GET', procesarRespuesta)
    }
    function procesarRespuesta(response) {
        //esta no es generica es solo para el api de google
        let aDatos = JSON.parse(response).items
        console.log(aDatos)
        let aDatosFinal = aDatos.map( item => item.volumeInfo )
        console.log(aDatosFinal)
        mostrarRespuesta(aDatosFinal)
    }
    
    function mostrarRespuesta(aDatos) {
        let output = document.querySelector('#output')
        let tabla = '<table class="tabla">'
        tabla += '<tr><th>Título</th><th>Editorial</th><th>Idioma</th></tr>'
        aDatos.forEach( (item) => tabla += `
            <tr>
            <td>${item.title}</td>
            <td>${item.publisher?item.publisher:''}</td>
            <td>${item.language}</td></tr>`)
        tabla += '</table>'
        output.innerHTML = tabla
        //así las publisher que no las encuentre pues mejor ponemos en fila 108 se puede dejar vacío n/d no disponible
        //para que no salga undefined
    }

   
            }
        )
    }
}




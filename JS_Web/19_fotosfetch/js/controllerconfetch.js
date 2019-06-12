//import { ajax } from "./ajax.js"; porque lo voy a hacer por ajax

export function controller() {
    const URL = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
    //estos señores nos van a dejar modificar los datos usando en vez del GET el PUT y el DELETE
  
    const aFotos = []
    let sectionFigures = document.querySelector('#figures')

    //SE PODRÍA HACER CON ajax pero tambien se puede hacer por fetch para no tener que importar el ajax
    //hace peticiones ajax, es nativo y el navegador ya lo sabe, versión moderna de conexiones ajax
    //ajax(URL, 'GET', getFotos )
//le pasaríamos una URL y por defecto hace GET y aquí es donde viene la gran diferencia entre fethc y ajax en lugar
//de callback coge la funcion getFotos y luego haz algo con ella utiliza promesas cuando llegue la información
//haré lo que que tiene que hacer
/**fetch(URL).then(x)
 * function x(response) {
 * return response.json()} pero lo pongo mejor con una funcion anonima para no escribir tanto
 * si no quiero hacer el archivo de ajax
 * parse del string nos lo convierta a un objeto
 */
    fetch(URL)
    .then(response => response.json())
    .then (getFotos)//conjunto de datos ya parseado ya en forma de objetos

    // Elementos del DOM
    const btnAdd = document.querySelector('#put')
    let aBtnModificar 
    let aBtnBorrar 

    const AddFotoDlg = document.querySelector('#addFotoDlg')
    const btnAddFoto = document.querySelector('#btnAddFoto')
    const btnCancelAddFoto = document.querySelector('#btnCancelAddFoto')
    // Manejadores de eventos
    btnAdd.addEventListener('click', onAdd)
    

    /*  "albumId": 1,
    */   
    function getFotos(response) {
        console.log(response)
        let html = ''
       // JSON.parse(response)  le quito porque ahora uso fetch   
            response.forEach( item => {
                html += `
                    <figure>
                        <a href="${item.url}">
                        <figcaption>${item.title}</figcaption>
                        <img src="${item.thumbnailUrl}" alt="">
                        </a>
                        <button class="post" id="post_${item.id}">Modificar</button>
                        <button class="delete" id="delete_${item.id}">Borrar</button>
                    </figure>
                `
            });

        sectionFigures.innerHTML = html
        aBtnModificar = document.querySelectorAll('.post')
        aBtnBorrar= document.querySelectorAll('.delete')
        aBtnModificar.forEach( item => item.addEventListener('click', onModify))
        aBtnBorrar.forEach( item => item.addEventListener('click', onDelete))
    }


    function onAdd () {
        
        AddFotoDlg.showModal()
    }

    function onClickDlgAdd(ev) {
        let id = ev.target.id //esto es para saber si me pincha en un boton u otro se guarda en una variable si tiene que hacer un id
        if (id== 'btnAddFoto') {
            //añadir

            } else
    }

    function onModify(ev) {
        console.log('Modificando', ev.target.id)
    }

    function onDelete(ev) {
        console.log('Borrando', ev.target.id)
    }
}
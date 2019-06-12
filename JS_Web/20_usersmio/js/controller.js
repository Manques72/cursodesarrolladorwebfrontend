import { ajax } from "./ajax.js";

export function controller() {

    console.log('Controller cargado')
    //Inicializacion de variables
    
    const url = 'https://randomuser.me/api/'

    //si queremos mas de un usuario habría que poner: const url users = 'https://randomuser.me/api/?results[10]'habría
    //que hacer luego un bucle

//Nodos del dom y son el output y al button del html y tendre que poner un id

const output = document.querySelector('#output')
const btnUser = document.querySelector('#btnUser')
const btnBorrar = document.querySelector('#btnBorrar')

//Manejadores de eventos no implica que todos los nodos sean manejadores de eventos pero 
//como no quiero qeu maneje todo el usuario pues solo el que tiene que usar el usuario que es el boton

btnUser.addEventListener('click', onClickUser)
btnBorrar.addEventListener('click', onClickUser)

//si uno borra y otro pinta no hace falta poner dos ponemos en los dos lo mismo
//cuando una funcion maneja dos eventos lo sé por ev.target.id y la puedo guardar en una
//variable let boton= ev.target.id



//Funciones añadidas que mejor meterlas al controller para que quede encapsulado

function onClickUser (ev) //el navegador tiene un objeto evento y te coloca dentro del ()todo y te lo manda como tipo evento
//si a tí no te importa porque solo tienes un evento pues no haría falta pero lo puedes poner siempre
//no se pone dir porque no es un nodo es un objeto
{ console.log(ev)
    //lo mas importante es el type y el target y ahí se distingue que boton se ha pulsado,
    //se mira en console
//para lanzar una funcion alguien tiene que escribir onClickUser() intervienen: El programador, el usuario y es el sistema operativo
//es el navegador no es un agente pasivo, el navegador renderiza, parsea y ejecuta el js, quién ejecuta, el navegador
//cuando el usuario haga click en el navegador y se lo dice al addEventListener
//si quiero que cuando pinche el boton que aparezca He pulsado el boton un output es un parrafo
//si quiero que sea mas especifico por si hay varios botones
let boton = ev.target.id//siempre que quiero que haga dos cosas sería un if: btnUser o btnBorrar

if (boton == 'btnUser') {
    //para pedir los datos lo haré por ajax y como ya tengo la función en el archivo
    
    ajax(url, 'GET', getUser)

    //output.innerHTML = `Has pulsado el boton ${boton}`//dolar es para que interpole y en vez de que ponga ev.target.id ponga el mensaje
} //no haría falta hacer un else porque si no hay un user se borra{
else {
    output.innerHTML = '' //innerHTML es una propiedad
}
}
//si nos vamos a randomuser.me/api nos va a dar los datos que vemos en la página
//haremos una function para que luego recoja los datos
function getUser(datos) {
//los datos siempre vienen como string por ello hay qeu procesarlos. En el archivo de ajax podríamos hacerlo
    console.log(datos.results[0])
    let imagen = datos.results[0].picture.thumbnail//picture lo miro en el console del localhost y lo que hago copio y pego
    let userName = datos.results[0].name
    let genero = datos.results[0].gender //como quiero qeu me distinga color entre un sexo u otro hago un if
    //quiero hacer una transformación de female a chica
    //si queremos un icono vamos a fontawesome.com
    let correo = datos.results[0].email
    if (genero == 'female'){
        genero = 'chica'
    } else {
        genero = 'chico'
    }
    
    //como quiero ver la imagen en grande hago un hiperenlace: a href
    output.innerHTML = `

<a href="${datos.results[0].picture.large}"> 
    <figure>
    <figcaption class="${genero}">${userName.title} ${userName.first} ${userName.last}
    </figcaption>

    <img src="${imagen}" alt="Imagen del usuario">
   </a>
   </figure>
   <div><a href="mailto://${correo}" class="fas fa-mail-bulk"></a></div>/
`
//mailto según este configurado seguramente me mande un correo, si esta en una red anonima no le va a funcionar
//si queremos un hipervinculo se pone a href
}



}
/**{"results":[{"gender":"female","name":{"title":"mrs","first":"ada","last":"da luz"},"location":{"street":"8329 rua josé bonifácio ","city":"bagé","state":"são paulo","postcode":45146,"coordinates":{"latitude":"-76.0070","longitude":"168.2957"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"email":"ada.daluz@example.com","login":{"uuid":"0466d51f-60c9-4092-89ef-4c3260504db8","username":"yellowelephant794","password":"tuscl","salt":"bUMaKjGK","md5":"d09d889bdd3eb79bdfa88bbe91d06dce","sha1":"20168bc8ec457f5f48861d938fda869411d3b085","sha256":"37d66dcba42154e3f1933b42f8194b68bec4ad50e4c57ec9da2ad5b7b9cc31a9"},"dob":{"date":"1956-11-27T16:02:09Z","age":62},"registered":{"date":"2004-08-17T09:17:28Z","age":14},"phone":"(03) 0287-5943","cell":"(67) 3905-3041","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/41.jpg","medium":"https://randomuser.me/api/portraits/med/women/41.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/41.jpg"},"nat":"BR"}],"info":{"seed":"a4182dd3e7cc94af","results":1,"page":1,"version":"1.2"}} */

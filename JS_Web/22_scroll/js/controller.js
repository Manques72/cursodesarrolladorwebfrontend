export function controller() {
    console.log('Controller cargado')
//Variables
let isSticky = false;
//Nodos
let header = document.querySelector('#main-header')
let aItemsMenu = document.querySelectorAll('main-menu a')
//para ver las posiciones de las secciones hay que hacer un array
let aSections = document.querySelectorAll('.main-content section')

//la section portfolio tiene un desplazamiento de 929 del origen
console.dir(aSections)

//Manejadores de eventos
window.addEventListener('scroll', onscroll)
aItemsMenu.forEach(Item => Item.addEventListener('click', onClickMenu))

function onscroll(ev) {
//se puede quitar el window para saber de donde saco el scroll
if(scrollY >= 40 && !isSticky) {//significa que cuando pase por 40 me lo pone sticky haga un toggle un cambio del estado
    //como no me funciona el == pongo >40 pero como no quiero que todo el rato me lo repita me creo una variable
    //de estado ques es isSticky !isSticky no es sticky
    console.dir(window.scrollY)
    console.log(isSticky)
    header.classList.add('sticky-header')
    isSticky = true
} else if (scrollY < 40 && isSticky){
    //normal. Como son dos condiciones tengo qeu poner el else if
    header.classList.remove('sticky-header')
    isSticky = false
}
}

function onClickMenu (ev) {
    ev.preventDefault()
    //los hiperenlaces son los items los elementos navegan

    let id = ev.target.dataset.orden
    let destino = 0
    console.dir('Item', id)
    //item es cada uno de los nodos
    aItemsMenu.forEach (item => item.classList.remove('activo') )//desactivo todos
    aItemsMenu[id].classList.add('activo')//y ahora los activo
    //items es un hiperenlace
    
    //desplazamiento aSections[id].offsetTop
    if(id) {
        destino = aSections[id].offsetTop -100}
       
        window.scroll(0, destino)
        console.log('Y final', scrollY)
    }
}

//me voy al localhost y miro la propiedad scrollY y miro a ver donde estamos según bajo la barra de desplazamiento
//yo quiero fijar un header mas estrecho puedo cambiar las clases aplicadas a mi header y otro teniendo un header alternativo

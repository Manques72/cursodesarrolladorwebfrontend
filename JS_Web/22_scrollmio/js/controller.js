export function controller() {
    console.log('Controller cargado')


//Variables
let isSticky = false;
//Nodos
let header = document.querySelector('#main-header')
let aItemsMenu = document.querySelectorAll('main-menu a')
//para ver las posiciones de las secciones hay que hacer un array
let aSections = document.querySelectorAll('.main-content section')
let aOffSets = calculaOffSets() //me invento un array, en vez de trabajar con las sections

//la section portfolio tiene un desplazamiento de 929 del origen
console.dir(aSections)

//Manejadores de eventos
window.addEventListener('scroll', onScroll)
aItemsMenu.forEach(Item => Item.addEventListener('click', onClickMenu))

function calculaOffSets() {
    let aDatos = []
    aSections.forEach(item => aDatos.push(item.offsetTop))//como no es un array de verdad la sections
    //es un map, en el array de nodos no hay un map y me lo invento el aDatos y por cada section hago un item.offsetTop
    aDatos[0] = 0
    console.dir(aDatos)
    return aDatos
}

function onScroll(ev) {
//se puede quitar el window para saber de donde saco el scroll
if(scrollY >= 40 && !isSticky) {//significa que cuando pase por 40 me lo pone sticky haga un toggle un cambio del estado
    //como no me funciona el == pongo >40 pero como no quiero que todo el rato me lo repita me creo una variable
    //de estado ques es isSticky !isSticky no es sticky
    console.dir(window.scrollY)
    console.log(isSticky)
    header.classList.add('sticky-header')
    isSticky = true
    aOffSets = calculaOffSets()
} else if (scrollY < 40 && isSticky){
    //normal. Como son dos condiciones tengo qeu poner el else if
    header.classList.remove('sticky-header')
    isSticky = false
}
let id
//para crear intervalos con el if
if(scrollY < aOffSets[1] - 50){ //estoy en inicio
    id = 0
} else if (scrollY < aOffSets[2] - 50){
    //estoy en seccion 1 portfolio
    id = 1
} else if (scrollY < aOffSets[3] - 50){
    //estoy en seccion2 que es clientes
    id = 2
} else {
    //estoy en seccion3 que es nosotros
    id = 3
}
function onClickMenu(ev) {
    ev.preventDefault()
    //los hiperenlaces son los items los elementos navegan

    let id = +ev.target.dataset.orden
    if (id && !isSticky ) {
        header.classList.add('sticky-header')
        isSticky = true
    }
    

    aItemsMenu.forEach (item => item.classList.remove('activo') )//desactivo todos
    aItemsMenu[id].classList.add('activo')//y ahora los activo
    //items es un hiperenlace
    const altoStickyMenu = 50
    
    let destino = 0
    let offset = aOffSets[id]
    console.dir('Item', id)
    console.log('offset', offset)
    destino = offset - altoStickyMenu //que es el menu sticky hay que salvarlo
    //item es cada uno de los nodos
    window.scrollTo(0,destino)
    ponActivo(id)
    
    //desplazamiento aSections[id].offsetTop
    
    }
}

//me voy al localhost y miro la propiedad scrollY y miro a ver donde estamos según bajo la barra de desplazamiento
//yo quiero fijar un header mas estrecho puedo cambiar las clases aplicadas a mi header y otro teniendo un header alternativo

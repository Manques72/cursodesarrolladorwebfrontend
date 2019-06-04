//coger el de Alex porque no lo tengo completo
export class Controller {
//cualquier clase tiene un constructor y se ejecuta al usar una clase
constructor() {
    console.log('Instanciado el controller')
//el array son los []

    this.aAnimales = []
    //1. Nodos del DOM

    this.inAnimal = document.querySelector('#inAnimal')
    this.btnAdd = document.querySelector('#btnAdd')
    this.lista = document.querySelector('.lista')
    this.tabla = document.querySelector('.tabla')

//2.Manejadores de eventos
this.inAnimal.addEventListener('change', this.addAnimal.bind(this))
}
//this.btnAdd.addEventListener('click', this.addAnimal.bind(this))

//el this como es tipo callback hay que poner un bind(this)

//la lista que os sugiere pues un array y me genero una lista y pongo arriba this.aAnimales y los corchetes 
addAnimal(){

if (this.inAnimal.value) {
    this.aAnimales.push(this.inAnimal.value.toLowerCase)()
    this.inAnimal.value = ''
}


console.log(this.aAnimales)
this.saveAnimales()
this.crearlista()
this.crearTabla()
}
crearLista() {
    let lista = '<ul>'
    //cuantos animales hay? los que tenga el array
    this.aAnimales.forEach( item => lista +=`<li>${item}</li>`)
    lista += '</ul>'
    this.lista.innerHTML = lista 
}
//el usuario debería de elegir hacer una lista o tabla un selection lista o tabla
//fuente de persistencia son las cookies es la persistencia de las páginas web
crearTabla() {
    let tabla = '<table>'
    this.aAnimales.forEach( item => tabla += `<tr><td>${item}</td></tr>`)
    tabla += '</table>'
    this.tabla.innerHTML = tabla
}

saveAnimales() {

    //guardo las cosas en storage
    window.localStorage.setItem('animales', JSON.stringify(this.aAnimales))
//necesito cambiarlo el array a objeto a string que son los animales y lo guardo en animales
}

readAnimales() {
    let read = JSON.parse(window.localStorage.getIte)
    //ahora necesito que me lo convierta en objetos y por eso pongo parse al json
}
}

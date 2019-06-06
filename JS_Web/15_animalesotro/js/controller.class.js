export class Controller {

    constructor() {
        console.log('Instanciado el controller')

        // 1. Nodos del DOM

        this.inAnimal = document.querySelector('#inAnimal')
        this.btnAdd = document.querySelector('#btnAdd')
        this.btnClear = document.querySelector('#btnClear')
        this.lista = document.querySelector('.lista')
        this.tabla = document.querySelector('.tabla')
        //como hemos creado un elemento nuevo que tiene un this.
        this.dlgConfirmarONoElBorrado = document.querySelector('#dlgConfirmarONoElBorrado')
        this.btnBorrarSi = document.querySelector('#btnBorrarSi')
        this.btnBorrarNo = document.querySelector('#btnBorrarNo')


        // 2.Manejadores de eventos
        this.inAnimal.addEventListener('change', this.addAnimal.bind(this))
        this.btnAdd.addEventListener('click', this.addAnimal.bind(this))
        this.btnClear.addEventListener('click', this.clearAnimales.bind(this))
        this.btnBorrarSi.addEventListener('click', this.borrarAnimal.bind(this), true)
        this.btnBorrarNo.addEventListener('click', this.borrarAnimal.bind(this))
        
        // presentar datos inicialmente
        this.aAnimales =  this.readStorageAnimales()
        this.crearLista()
        this.crearTabla()
        
        this.aEraser = document.querySelectorAll('.borrar')
        this.aEraser.forEach( item => item.addEventListener('click', this.avisarBorrado.bind(this)))
    }

    addAnimal() {
        if (this.inAnimal.value) {
            this.aAnimales.push(this.inAnimal.value.toLowerCase())
            this.inAnimal.value = ''
        }
        console.log(this.aAnimales)
        this.saveStorageAnimales()
        this.crearLista()
        this.crearTabla()
    }

    clearAnimales() {
        this.aAnimales = []
        this.crearTabla()
        this.crearLista()
        this.removeStorageAnimales() 
    }

    avisarBorrado(ev) {
        //console.dir(ev.target.dataset.index)
        this.dlgConfirmarONoElBorrado.open = true;
    }

    borrarAnimal(ev) {
       // console.log(ev.target.id)

        if (ev,target.id == 'btnBorrarNo') {
            dlgConfirmarONoElBorrado.open= false;
            return//es como si fuera un else implicito
        }
        console.dir('Borrando animal')
        //this.aAnimales.splice(ev.target.dataset.index,1)
        console.dir(this.aAnimales)
        //console.dir(ev.target.dataset.index)
        //this.dlgConfirmarONoElBorrado.open = true
        //tendríamos que poner
        //Metodos de arrays slice me devuelve una rebanada, splice me modifica el array, si ponemos a. y es un array
        //this.aAnimales.splice(2, 1)//vete al elemento 2 escúpelo y el array me quedaría con uno menos, lo quita y por eso pone luego 1
        //que valor quiero quitar ev.target.dataset.index,1
        //this.aAnimales.splice(ev.target.dataset.index,1)
        //el console se haría del array que es el de animales
        //console.dir(this.aAnimales) 
        //si hemos borrado un animal tenemos que actualizar todos los datos por ello se tiene que poner
        //de nuevo this.saveStorageAnimales(), crear lista y crear tabla
        //en HTMl es donde la hemos guardado y interacciónar con ese trocito y recuperar el valor, resultado que si yo digo que borre gdfs
        //y de storage para que ya no aparezca mas y a esto le podríamos añadir un control del borrado
        //a veces nos equivocamos, es una pantalla que aparecen para ver si estas seguro de alert y se llaman modales no son ventanas emergentes
        //son div ocultos que de repente se abren y en HTML es una etiqueta nueva qeu se llama dialogs
        this.saveStorageAnimales()
        this.crearLista()
        this.crearTabla()
    }

    crearLista() {
        let lista = '<ul>'
        this.aAnimales.forEach( item => lista += `<li>${item} <i class="borrar far fa-trash-alt"></i></li>`)
        lista += '</ul>'
        this.lista.innerHTML = lista
        this.aEraser = document.querySelectorAll('.borrar')
    }
//para seleccionar todos los nodos es Query selector All cuando tengo un array de nodos como tengo que hacer
//el bucle de asignación forthis, cada vez que hagamos clic en una papelera borrar el animal
//recibe un objeto evento y tiene una propiedad dataset es una propiedad standar, para recoger un index, data set.index
    crearTabla() {
        let tabla = '<table>'//todo esto se hace el i que lo guarde como número pongo data-index=${i} cada elemento en sí mismo guarde la aparición del array
        //oye me quiero borrar soy el elemento 2, te lo dice porque lo guardas y porque este bucle forEach tiene un i index el nombre me lo invento
        this.aAnimales.forEach( (item, i)=> tabla += `<tr><td>${item} <i data-index=${i} class="borrar far fa-trash-alt"></i></td></tr>`)
        tabla += '</table>'
        this.tabla.innerHTML = tabla
    }
//para qeu la 
    saveStorageAnimales() {
        window.localStorage.setItem('animales', JSON.stringify(this.aAnimales))
    }

    readStorageAnimales() {
        let read = []
        let cadena = window.localStorage.getItem('animales')
        if (cadena) {
            read = JSON.parse(cadena)
        }
        return read
    }

    removeStorageAnimales() {
        window.localStorage.removeItem('animales')
    }
}
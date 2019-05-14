/** normalmente a las clases se las pone verbos y las clases son objetos sustantivos */
export class Saludador {
    //ya nos sugiere que es un método porque es un verbo y el que no se nos olvide
    //constructor, saludar y despedirse
    constructor() {
        //this.msg = ['Hola', 'Adios'] en vez de comillas le pongo las francesas y le pongo ya Hola con el $¨y this.aQuien
        //que otra variable tengo que poner para saludar a alguien, el nombre a quien quiero saludar
        //pongo aQuien, 1º en vez de msg para que me salga 1º el nombre
        this.aQuien = ''
        this.msg = [`Hola ${this.aQuien}`, `Adios ${this.aQuien}`]
        //para que salga un string se pone vacío''
    /** Seleccionar nodos del DOM, este nodo del DUM lo pongo o queryselector o addenventlistener
     * queryselector no tiene sentido ponemos querySelector
     */
    this.inNombre = document.querySelector('#in-nombre')
    this.btnSaludar = document.querySelector('#btn-saludar')
    this.btnDespedirse = document.querySelector('#btn-despedirse')
    this.btnBorrar = document.querySelector('#btn-borrar')
    this.output = document.querySelector('#output')
    /**asignar manejadores a los nodos, en vez de onclick que es antiguo ponemos
     * en modrno primero ponemos addEventListener('click', this.saludar.bind(this)) y luego despedirse
     * 
    */
       this.btnSaludar.addEventListener('click', this.saludar.bind(this))
       this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
       this.btnBorrar.addEventListener('click', this.borrar.bind(this))
    }
    saludar() {//si queremos que cuando no pongamos un nombre en nuestra pagina
        //no nos salude tendríamos que poner un if
        if (this.inNombre.value) {
        this.aQuien = '<b>' + this.inNombre.value + '</b>'
        this.output.innerHTML = this.msg[0] + this.aQuien
        } 
        //value es lo que haya escrito la persona en el input lo que no se es si se
        //van a actualizar los valores
        //console.dir(this.inNom)
        
        //console.log(this.msg[0] + this.aQuien)//ponemos el this aquien para que lo recargue
    }
    despedirse() {
        this.aQuien = '<b>' + this.inNombre.value + '</b>' 
        //console.log(this.msg[1] + this.aQuien)
        this.output.innerHTML = this.msg[1] + this.aQuien
            }
    borrar() {
                //this.aQuien = '<b>' + this.inNombre.value + '</b>' esto no se pondría
                //console.log(this.msg[1] + this.aQuien)
                this.output.innerHTML = ''
                this.inNombre.value = ''//esto es para borrar el valor del Nombre
                    }

}
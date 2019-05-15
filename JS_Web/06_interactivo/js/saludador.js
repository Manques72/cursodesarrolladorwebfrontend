/** ahora vamos a hacerlo a la antigua ya no va a ser una clase*/
export function main () {
        let aQuien = ''
        let msg = [`Hola`, `Adios`]
    
    /** Seleccionar nodos del DOM, este nodo del DUM lo pongo o queryselector o addenventlistener
     * queryselector no tiene sentido ponemos querySelector
     */
   let inNombre = document.querySelector('#in-nombre')
   let btnSaludar = document.querySelector('#btn-saludar')
   let btnDespedirse = document.querySelector('#btn-despedirse')
   let btnBorrar = document.querySelector('#btn-borrar')
   let btnOutput = document.querySelector('#btn-output')

    /**asignar manejadores a los nodos, en vez de onclick que es antiguo ponemos
     * en moderno: primero ponemos addEventListener('click', this.saludar.bind(this)) y luego despedirse
     * 
    */
       btnSaludar.addEventListener('click', saludar)
       btnDespedirse.addEventListener('click', despedirse)
       btnBorrar.addEventListener('click', borrar)
    //si alguien quiere reescribirla a funcion arrow y le da mas ES6
    //tambien podemos poner let saludar = () => {aQuien = inNombre.value 
        //console.log(msg[0] + aQuien)}
    
    function saludar() {
        aQuien = '<b>' + inNombre.value + '</b>' //value es lo que haya escrito la persona en el input lo que no se es si se
        //console.log(msg[0] + aQuien)
        output.innerHTML = msg[0] + aQuien
    }
    function despedirse() {
        aQuien = '<b>' + inNombre.value + '</b>'
        //console.log(msg[1] + aQuien)
        output.innerHTML = msg[1] + aQuien
            }
    function borrar() {
                //this.aQuien = '<b>' + this.inNombre.value + '</b>' esto no se pondría
                //console.log(this.msg[1] + this.aQuien)
                output.innerHTML = ''
                inNombre.value = ''//esto es para borrar el valor del Nombre
                    }
    }

//¿como convertimos algo en class? poniendo muchos this, por eso aquí no hay.

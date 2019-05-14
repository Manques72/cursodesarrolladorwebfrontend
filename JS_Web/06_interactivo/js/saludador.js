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

    /**asignar manejadores a los nodos, en vez de onclick que es antiguo ponemos
     * en modrno primero ponemos addEventListener('click', this.saludar.bind(this)) y luego despedirse
     * 
    */
       btnSaludar.addEventListener('click', saludar)
       btnDespedirse.addEventListener('click', despedirse)
    //si alguien quiere reescribirla a funcion arrow y le da mas ES6
    //tambien podemos poner let saludar = () => {aQuien = inNombre.value 
        //console.log(msg[0] + aQuien)}
    
    function saludar() {
        aQuien = inNombre.value //value es lo que haya escrito la persona en el input lo que no se es si se
        console.log(msg[0] + aQuien)
    }
    function despedirse() {
        aQuien = inNombre.value
        console.log(msg[1] + aQuien)
            }
    }

//como convertimos algo en class poniendo muchos this
import { ajax } from "./ajax.js";

export function controller() {

    console.log('Controller cargado')

    // Inicializacion de variables
    // Inicializacion de variables
      /** Declaración de variables  */
      const aReyes = REYES
      const aReinas = REINAS
      
   
    // Nodos del DOM
    
    const isRey = document.querySelector('#reyes')
    const isReina = document.querySelector('#reinas')

    const output = document.querySelector('#output')
    const btnVerdadero = document.querySelector('#btnVerdadero')
    const btnFalso = document.querySelector('#btnFalso')
    const input = document.querySelector('#input')

    // Manejadores de eventos
    selectReyes.addEventListener('change', isRey)
    selectReinas.addEventListener('change', isReina)
    
    btnVerdadero.addEventListener('click', onClickVerdadero )
    btnFalso.addEventListener('click', onClickFalso)
    btnOutput.addEventListener('change', output)
    btnInput.addEventListener('change', input)

   /** Inicialización */
   aReyes.forEach ( item => {
    html += `<option value="${item.value}">${item.label}</option>`     
})

selectReyes.innerHTML = html
aReinas.forEach ( item => {
    html += `<option value="${item.value}">${item.label}</option>`     
})

selectReinas.innerHTML = html


    // Funciones

    function isRey(name) {
        let reyes = ['Fernando', 'Carlos I', 'Carlos III', 'Felipe II',
            'Luis', 'Jose', 'Amadeo', 'Juan Carlos', 'Alfonso']
        //quiero ver si name es Fernando, si name es Isabel etc o sea que tengo qeu poner un array es decir un for
        for (let i = 0; i < reyes.length; i++) {//en array ponemos reyes
            const rey = reyes[i];//element lo vamos a llamar rey
            //if () nunca se comparan strings o todo mayusculas o todas minusculas en vez de poner ===name pongo toLowerCase y asi comparo todo 
            //minusculas, vamos estandarizarlo
            if (rey.toLowerCase() === name.toLowerCase())
                return true
        }
        return false//como no quiero que de vueltas innecesarias me interesa que el return este aquí
    }
    
       
    function mostrar(name) {
        //tiene que mostrar un mensaje o una frase y hay dos y me creo un array de mensajes
        let i = 1
        let mensajes = [
            `El nombre ${name} ha sido usado por un rey de España`,
            `Ningún rey de España se ha llamado nunca ${name}`
        ]
        if (isRey(name))//ya la he hecho booliana antes así que no necesito qeu sea igual a nada
        {
            i = 0
        }
        //tengo un mensaje y tengo que poner i y tengo que calcular un i
        console.log(mensajes[i])
    }
    
    let name = 'carlos'
    mostrar(name)
    
    function isReina(name) {
        let reinas = ['Isabel I', 'Ana de Austria', 'Isabel de Francia', 'Mariana de Austria',
            'Maria Luisa']
        //quiero ver si name es Fernando, si name es Isabel etc o sea que tengo qeu poner un array es decir un for
        for (let i = 0; i < reinas.length; i++) {//en array ponemos reyes
            const reinas = reinas[i];//element lo vamos a llamar rey
            //if () nunca se comparan strings o todo mayusculas o todas minusculas en vez de poner ===name pongo toLowerCase y asi comparo todo 
            //minusculas, vamos estandarizarlo
            if (reina.toLowerCase() === name.toLowerCase())
                return true
        }
        return false//como no quiero que de vueltas innecesarias me interesa que el return este aquí
    }
    
       
    function mostrar1(name) {
        //tiene que mostrar un mensaje o una frase y hay dos y me creo un array de mensajes
        let i = 1
        let mensajes = [
            `El nombre ${name} ha sido usado por una reina de España`,
            `Ninguna reina de España se ha llamado nunca ${name}`
        ]
        if (isReina(name))//ya la he hecho booliana antes así que no necesito qeu sea igual a nada
        {
            i = 0
        }
        //tengo un mensaje y tengo que poner i y tengo que calcular un i
        console.log(mensajes[i])
    }

    let name = 'isabel'
    mostrar1(name)  
    
    function verdadero(name) {
        let name = input.value
        mostrar(nombre)
    }

    let name = 'fernando'
    verdadero(name)

    function falso (name) {
        let name = input.value
        mostrar(nombre)
    }

    let name = 'pedro'
    falso(name)
       

}
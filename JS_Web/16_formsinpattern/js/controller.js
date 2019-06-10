export function controller() {
    console.log('Controller cargado')

    let formData = {}
    
    let form_curso = document.querySelector('#form_curso')
//la validación solo arranca cuando aparece submit, cuando damos a un boton debemos de tener
//un proceso de validación onSubmit y no quiero que lo haga pero me lo cargo cuando ha hecho su proceso de validación
//el sistema lo sabe y salta la validación así que como luego no lo necesito pongo ev.preventDefault y los required
//así me vale para poder introducir cualquier tipo de datos en el formulario
//no solo te dice que el campo es requerido si tu no lo rellenas y pones una letra tambien te dice qeu no lo puedes enviar
//Ej en el mail te dirá que completes un mínimo de 3 caracteres, y luego ya si quiero enviar sigo
//con el required ya lo entiende

form_curso.addEventListener('submit', onSubmit)

let dni = document.querySelector('#dni')
//para que no ponga un dni, defino que hay un setcustomvalidity

dni.setCustomValidity('Letra del DNI incorrecta')

    function onSubmit(ev) {
        console.log('Formulario enviado')
        ev.preventDefault()
        //para validar el dni

       /* if (true) {Mirarlo en el de ALejandro que es el form
            dni.setCustomValidity('')//porque se lo he puesto y luego se lo he quitado le pongo ''para que salga vacío
        }*/

        let aControles = document.querySelectorAll(`[type="text"], 
                                                        [type="email"], 
                                                        [type="password"], 
                                                        textarea`)

        aControles.forEach(item => formData[item.id] = item.value)                                        
        
        let aChecks = document.querySelectorAll('[ type="checkbox"]')

        aChecks.forEach(item => formData[item.id] = item.checked)

        let aRadioSede = document.querySelectorAll('[name="sede"]')
        setRadio(aRadioSede, formData)

        let aRadioTurno = document.querySelectorAll('[name="turno"]')
        setRadio(aRadioTurno, formData)

        let aSelects = document.querySelectorAll('select')

        aSelects.forEach(
            item => setSelect(item, formData )
        )
        
        setConfirmar(formData)
    }
}


function setRadio(radio, data) {
    radio.forEach(
        item => {
            if (item.checked) {
                // data[item.name] = item.value
                data[item.name] = {id: item.value, value: item.id}
                return
            }
        }
    )
}

function setSelect(select, data) {
    console.dir(select)
    data[select.name] = {
        id: select[select.selectedIndex].value, 
        value: select[select.selectedIndex].text
    }
    /* {
        clave: select.selectedOptions[0].value, 
        nombre: select.selectedOptions[0].text
    } */
}

function setConfirmar(data) {
    let dialog = document.querySelector('#confirmar')
    // dialog.open = true
    
    let datosOutput = document.querySelector('#datosOutput')
   
    datosOutput.innerHTML = mostrarObjeto(data)
    
    dialog.showModal()

    document.querySelector('#btnConfirmar')
        .addEventListener('click', ()=>{
            dialog.close()
            form_curso.submit()
        })
    
    document.querySelector('#btnNoConfirmar')
        .addEventListener('click', ()=>{
            dialog.close()
        })
   

}

function mostrarObjeto(obj) {
    let cadena = '<ul>'
    for (const key in obj) {
        const element = obj[key]
        if (typeof element != 'object') {
            cadena +=`<li>${key}: ${element}</li>`
        }
        else {  
            cadena += '<li>'+ key
            cadena +=  mostrarObjeto(element) 
            cadena += '</li>'
        }
    }
    cadena += '</ul>'
    console.log(cadena)
    return cadena
}


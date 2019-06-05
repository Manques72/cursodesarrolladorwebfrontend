export function controller() {
    console.log('Controller cargado')

    //nos creamos una variable que va a ser un objeto porque son muchos datos nombre, contraseña, etc
    //y como recojo los datos con los documentquerySelector puede ser a mano o mediante algo automatizado
    //en este no tengo muchos campos, en este formulario tengo inputs de tipor text, luego email, checkboxes, son
    //elementos qeu me permiten distinguir puedo inventarme una clase para todos los que sean parecidos o podrían poner un id
    //y hacerlo a mano
    //quiero tener todos los nodos que tienen control por ejemplo me creo una variable let aControles 
    //quiero seleccionar el atributo todos los elementos de tipo texto: type-"text"
//formData quiero guardar los nombres
    let formData = {}
    
    //let aControlesText = document.querySelectorAll('[type-"text"])
    //let aControlesEmail = document.querySelectorAll('[type="email"]')
    //para que contatenen los arrays se pone un mas, no se concatenan porque no son arrays
    //habría que poner concat
    //pongo un solo selector
    let aControles = document.querySelectorAll(`[type-"text"], 
    [type="email"], [type-"password"], [type-"comentarios"]`))
   // console.log(aControles)
    
    //let aControles = aControlesText.concat + aControlesEmail
    //console.dir(aControles)
//ahora quiero hacer un bucle para aControles.forEach
   /* aControlesEmail.forEach(
        item => {aControles[aControles.lenght] =item}
           
    )*/

    aControles.forEach(Item => {FormData[Item.id]= item.value
        
    });

    console.log(formData)

    let form_curso = document.querySelector('#form_curso')

    //un evento que no conocemos que es el submit y solo lo tienen los formularios y se dispara
    //con un elemento
    form_curso.addEventListener('submit', onSubmit)
    //si no hago nada mas y lo dejo como función: function onSubmit va a ejecutar 
    function onSubmit (ev) {
    console.log('Formulario enviado')
    ev.preventDefault()
    /*setTimeout(() => {
        form_curso.submit()//le quito el formulario por defecto para que no sea tan rapido
    }, 3000) */
}
}
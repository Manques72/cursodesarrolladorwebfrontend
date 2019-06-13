export function controller() {

    const URL = 'https://jsonplaceholder.typicode.com/photos'
    const URL_ALBUM1 = URL+'?albumId=1'
    let aFotos = [] //es superimportante en vez de darselo a renderfotos (pintarfotos) se lo damos a getfotos
    let itemActual = 0 //se pone let en vez de const

    /**me tengo que comunicar con un servidor, JSONPLACEHOLDER y sabemos que funciona
     * aFotos es un array son mis datos las fotos si aFotos se desactualiza se tiene que 
     * reflejar un cambio en el array para que no se pierda en el servidor
     * cuando yo borre o modifique necesito saber qué registro se borra o modifica y tenemos
     * que tener una constante global y la pondremos como actual, para borrar o modificar: registroactual, itemactual, etc
     * ahí voy a guardar un número, la posición que ocupa en el array el item en el que estoy
     * inicializamos a cero, luego nos creamos una referencia del DOM para ver donde nos vamos a crear las figuras
     * let sectionFigures = document.querySelector('#figures') la hacemos local mandandola a function
     *      
     */
    

    /* fetch(URL).then(x)
    
    function x(response) {
        return response.json(), 

    }    
    fetch(URL_ALBUM1) esto lo vamos a poner como function por si luego la necesitamos
    .then( response => response.json())
    .then( getFotos ) Encapsulo la información en pedirDatos para no tener qeu estar escribiendo todo el rato
    */
 // Elementos del DOM
    const btnAdd = document.querySelector('#put')
    let aBtnModificar //No existe hasta pedir y renderizar datos ahora mismo no tengo botones
    //tendre botones cuando haga la funcion pedirDatos que ahora es getFotos
    let aBtnBorrar 

    //Elementos del DOM de los dialog (modales) inicialmente invisibles

    const addFotoDlg = document.querySelector('#addFotoDlg')
    const btnAddFoto = document.querySelector('#btnAddFoto')
    const btnCancelAddFoto = document.querySelector('#btnCancelAddFoto')

    const deleteFotoDlg = document.querySelector('#deleteFotoDlg')
    const btnDeleteFoto = document.querySelector('#btnDeleteFotoDlg')
    const btnCancelDeleteFotoDlg = document.querySelector('#btnCancelDeleteFotoDlg')
    const modifyFotoDlg = document.querySelector('#modifyFotoDlg')
    const btnModifyFoto = document.querySelector('#btnModifyFoto')
    const btnCancelModifyFoto = document.querySelector('#btnCancelModifyFoto')

//ahora mismo hay 5 botones
    
 // Manejadores de eventos
    btnAdd.addEventListener('click', onAdd)
    btnAddFoto.addEventListener('click', onClickDlgAdd)
    btnCancelAddFoto.addEventListener('click', onClickDlgAdd)
    btnDeleteFoto.addEvenlistener('click', onClickDlgDelete)
    btnCancelDeleteFotoDlg.addEvenlistener('click', onClickDlgDelete)
    deleteFotoDlg.addEvenlistener('click', onDelete)

    btnModifyFoto.addEventListener('click', onClickDlgModify)
    btnCancelModifyFoto.addEventListener('click', onClickDlgModify)


    //Código inicial, ¿qué hace mi función? Pedir datos

getFotos(URL_ALBUM1)

   function getFotos(url) {//en vez de datos la hemos llamado getFotos, pide los datos y los guarda
       fetch(url)//fetch devuelve una promesa y en esa funcion se inyecta algo
       //el then se espera, response salen los datos y para que queremos hacer con response
       //guardarlo en mi variable principal, aDatos, aFotos, antes de render en vez const es let el aFotos
       //aFotos = response
       .then (response => response.json()//hay qeu ponerlo sí o sí porque es fetch los datos que te de fetch son 
       //muchos tipos de datos pero para los apis son siempre datos json si un servidor nos envía fotos

       .then( response => {
           aFotos = response//ahora todos mis datos estan en aFotos
           console.log(aFotos)
           renderFotos()
       }))
    //.then cuando tenga una funcón que haga algo, cuando acabe todo haz esto que no tiene nombre y hace render fotos      
       //.then (renderFotos))//si damos al boton dcho y buscamos el nombre del simbolo y en vez
       //de getFotos vamos a poner renderFotos

   }
    
   

    /*  "albumId": 1,
    */   
    function renderFotos() {//una vez que los datos estan en el array renderiza las fotos
       //no hace falta poner en el parentesis aFotos porque esta todo embebido en una sola funcion controller
       //si no sí que habría que ponerlo
       
        //console.log(response)//esto es ahora mismo lo mas importante la subimos ahora
        let sectionFigures = document.querySelector('#figures')
        let html = ''
        aFotos.forEach( item => {
                html += `
                    <figure>
                        <a href="${item.url}">
                        <figcaption>${item.title}</figcaption>
                        <img src="${item.thumbnailUrl}" alt="">
                        </a>
                        <button class="post" id="post_${item.id}" data-id-db="${item.id}">Modificar</button>
                        <button class="delete" id="delete_${item.id}" data-id-db="${item.id}">Borrar</button>
                    </figure>
                `
            });

        sectionFigures.innerHTML = html //esto es lo que renderiza, el html, es el que pinta
//la función innerHTML es una mejora y se usa mucho, en cuanto hay un inner o un outer estamos renderizando HTML
        //Elementos del DOM recien renderizada
        aBtnModificar = document.querySelectorAll('.post')
        aBtnBorrar= document.querySelectorAll('.delete')
        aBtnModificar.forEach( item => item.addEventListener('click', onModify))
        aBtnBorrar.forEach( item => item.addEventListener('click', onDelete))
    }


   /** EN VEZ DE ESTO LO PONEMOS COMO FUNCION ANONIMA btnAdd.AddEvenListener*/ 
    function onAdd () {//añadir una foto en el servidor, otro actualiza en el array y luego volver a pintarla
        //es lo que aparece cuando damos al boton add
        addFotoDlg.showModal()
    }

    function onClickDlgAdd(ev) {

        let id = ev.target.id // btnAddFoto o btnCancelAddFoto
        if (id == 'btnAddFoto') {
            //no quiero poder añadir una foto sin titulo y por ello pongo un if si esto vale algo:
            if (document.querySelector('#title').value){}
                        // añadir
            let datos = {}//hago un fetch de tipo post
            datos.albumId = document.querySelector('#albumId').value
            datos.title = document.querySelector('#title').value//este value no quiero qeu se mantenga aquí
            //una vez que ya he guardado los datos borro el valor en datos.title
            datos.thumbnailUrl = document.querySelector('#thumbnailUrl').value
            datos.url = document.querySelector('#url').value
        
            let myHeaders = new Headers({
                "Content-Type": "application/json"
            });
              
//para esta funcion hago un fetch para que me lo muestre a posteriori, hemos hecho un stringiify de tipo JSON, es un estandar universal
//todos saben hacer un parse, cuando yo escribo algo me lo responde el servidor, hago una actualización de mis datos, se lo tengo que decírselo al array
//le he dicho que añada un registro al servidor lo añado a un array, y tengo que hacer push para añadir a un array y eso es un data nos hemos inventado la palabra
//
            fetch(URL, {method: 'POST', body: JSON.stringify(datos), headers: myHeaders})
            .then (response => response.json()) //como es la respuesta se llama response
            .then (data => { //data podría llamarse response, es coger response y se parsea y lo llamamos data que son los datos
                //lo que usamos es el data que es lo que hay en el data lo normal el data de respuesta a un post es todos los datos 
                console.log(data)
                aFotos.push(data)
                renderFotos
            }            )
        }
        addFotoDlg.close()

    }

    function onModify(ev) {
        itemActual = ev.target.dataset.idDb//esta variable se va a perder porque solo lo conoce onMOdify y lo 
        //guardo en la variable itemActual
        console.log('Modificando', itemActual)
        modifyFotoDlg.showModal()
    }
    function onDelete(ev) {
        itemActual = ev.target.dataset.idDb//esta variable se va a perder porque solo lo conoce onMOdify y lo 
        //guardo en la variable itemActual
       
        deleteFotoDlg.showModal()
    }


    function  onClickDlgModify(ev) {
        let id = ev.target.id // 
        if (id == 'btnModifyFoto') {
            let datos = {}
            datos.title = document.querySelector('#modi_title').value

            let myHeaders = new Headers({
                "Content-Type": "application/json"
            });
            let url = URL + `/${itemActual}`
            fetch(url, {method: 'PATCH', body: JSON.stringify(datos), headers: myHeaders})
            .then (response => response.json())
            .then (data => {//si en algún momento encuentra lo que busca y devolvemos true se nos sale del bucle,
                //some es igual que un for each
                aFotos.splice(indexFoto(), 1, data)
                indexFoto()
                 console.log(index)
                 console.log(data)
                 //tengo que localizar el elemento del array, encontrar el elemento en el array
               //como sustituyo un array por un objeto  item.id == itemActual quiero que esto sea un data
                 aFotos.splice(index,1,data)//el splice ya lo ha hecho la actualizacion del array es como el push de antes
                 renderFotos()
            
        })
    }
        modifyFotoDlg.close()
    }

    function onClickDlgDelete() {
        let id = ev.target.id // 
        if (id == 'btnDeleteFoto') {
            let url = URL + `/${itemActual}` 
            datos.title = document.querySelector('#deleteFotoDlg').value

           
            fetch(url, {method: 'PATCH', body: JSON.stringify(datos), headers: myHeaders})
            .then (response => response.json())
            .then (data => {//si en algún momento encuentra lo que busca y devolvemos true se nos sale del bucle,
                //some es igual que un for each
                aFotos.splice(indexFoto(), 1, data)
                indexFoto()
                 console.log(index)
                 console.log(data)
                 //tengo que localizar el elemento del array, encontrar el elemento en el array
               //como sustituyo un array por un objeto  item.id == itemActual quiero que esto sea un data
                 aFotos.splice(index,1,data)//el splice ya lo ha hecho la actualizacion del array es como el push de antes
                 renderFotos()
            
        })
    }
        modifyFotoDlg.close()
    }

    }

    function indexFoto(){
            let index
                
                 //item.id es un contador de la base de datos es lo mismo que un index of
                 aFotos.some((item, i) => {if(item.id == itemActual) {
                     index = i
                     return true//lo he puesto en otra funcion distinta al onclickDlgMofify porque lo voy a hacer mas veces

                 }})
                }
    function onDelete(ev) {
        itemActual = ev.target.dataset.idDb
        console.log('Borrando', itemActual )
        let url = URL + `/${itemActual}`
        console.log(url)
        fetch(url, {method: 'DELETE'})
        .then (response => response.json())
        .then (data =>  
        { if (data){
            aFotos.splice(indexFoto(), 1)
            renderFotos()
    } else {
            console.log(data)
       // .catch (error => console.error(error))este lo quito porque no he puesto en ninguno error
    }
    })}
    
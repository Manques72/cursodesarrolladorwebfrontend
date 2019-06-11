import { ajax } from "./ajax.js";

export function controller() {
    const URL ='https://jsonplaceholder.typicode.com/photos'
    const aFotos = []
    ajax(URL, 'GET', getFotos) //QUIERE que le digas la url, el método y la funcion callback que va a ser getfotos
    /** "albumId": 1,
    "id": 1,
    "title": 
    "url": 
    "thumbnailUrl": */

    function getFotos(response) {
        console.log(response)

        response.forEach( item => {

        });
    }
    console.log
}
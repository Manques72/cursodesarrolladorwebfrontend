/**
 * La funcion setTimeout
 * Permite un proceso asincrono, diferido en el tiempo
 */


 console.log('Primero')

//dentro de un rato console.log('Segundo') esto se llama setTimeout se mide en milisegundos
// stTimeout (paraLuego, 2000)
setTimeout(() =>//es una arrow)
{
    console.log('Segundo')

}, 2000)

 console.log('Tercero')

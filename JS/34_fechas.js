/*let hoy = new Date()
console.log(hoy)

let fecha = new Date(75844656)
console.log(fecha)

let nacim = new Date(1972,09,03)
console.log(nacim), esto sería globales pero para que me haga una funcion y así miro
los getDate*/
(function () {
let hoy = new Date()
console.log(hoy)

let fecha = new Date(75844656)
console.log(fecha)

let nacim = new Date(1972,09,03)
console.log(nacim.toLocaleString())//si pongo el punto al nacim. hay un monton de funciones que puedes escoger

console.log(fechaEnEspañolToString(nacim))
})()

/**
 * Mostrar fecha como "Dia de la semana, dia de Mes del Año"
 * Domingo Agosto 29 del 1965
 */

 /**
  * fechaEnEspañolToString
  * @param fecha: Date
  * @return: string
  * 
  */

  function fechaEnEspañolToString(fecha = new Date()){
      const aDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado']
      //hay que poner los días de la semana en arrays y los meses tb
        const aMeses = ['Enero', 'Febrero', ' Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
        'Agosto', 'Septiembre', ' Octubre', 'Noviembre', 'Diciembre']
      /* let fechaToString = ''//como quiero los días y meses en español necesito un array
        fechaToString += aDias[fecha.getDay] + ', '//se podría poner todo del tiron y no poner tanta fechaToString sino habría que ponerlo +
        fechaToString += fecha.getDate() + ' de '
        fechaToString += aMeses[fecha.getMonth()] + ' de '
        fechaToString += fecha.getFullYear()*/
        let fechaEnEspañolToString = ''
        fechaEnEspañolToString = aDias[fecha.getDay()] + ', '//se podría poner todo del tiron y no poner tanta fechaToString sino habría que ponerlo +
         + fecha.getDate() + ' de '
         + aMeses[fecha.getMonth()] + ' de '
         + fecha.getFullYear()
        return fechaEnEspañolToString
        }//es una funcion de formato

 
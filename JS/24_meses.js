//meses en español es una propiedad y el mes = y el valor en ingles
//Creamos un objeto con los nombres de los meses en español
//como propiedades y sus equivalentes en otro idioma
//y añadimos una función que muestre por consola la frase el mes 
//... en ingles se dice ... para cada uno de los meses
let mesesEnIngles = {
    enero: 'January',
    febrero: 'febraury',
    marzo: 'march',
    abril: 'april',
    mayo: 'may',
    junio: 'june',
    julio: 'julio',
    agosto: 'august',
    septiembre: 'september',
    octubre: 'october',
    noviembre: 'november',
    diciembre: 'december',
    toString: function() {//la function es this por cada vuelta tengo el key en español y en ingles tengo el valor
        let output = ''
        for (const key in this) {
            const element = this[key]
            if (typeof element === 'function') {
                continue
            }
            output += `El mes ${key} en ingles se dice ${element}` + '\n'
        }//es lo mismo que poner = output
        return output
    },
    mostrar: function() {
        console.log(this.toString())
    }
}
//console.log (mesesEnIngles)
mesesEnIngles.mostrar()
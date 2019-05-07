function areaCirculo(radio=1)//porque es un número
 {
    let area = Math.PI * radio * radio
        //area es de tipo number
        // el fixed es para poner solo 2, 3 decimales lo que queramos y lo transforma de number a string
        return area.toFixed(2)
//la function random para probar números al azar y otras son max y min nos permite ordenar
}
console.log(areaCirculo(2))

/*function numeroAlAzar() {
    return Math.random()
}
console.log(numeroAlAzar())*/

//si quiero que me salga entero con el parseInt
function numeroAlAzar() {
    return parseInt(Math.random()*10)
}
for (let i = 0; i < 20; i++) {
    console.log(numeroAlAzar())
    
}

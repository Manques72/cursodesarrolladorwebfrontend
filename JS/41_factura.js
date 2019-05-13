/**
 * Objeto Facturas: Definir la estructura de un objeto que almacena una factura.
 * las facturas están formadas 
 * -por la información de la propia empresa (nombre, dirección, tfo, NIF)
 * -la información del cliente (similar a la de la empresa),
 * -una lista de elementos (descripción, precio, cantidad)
 * -información básica de la factura (importe total, tipo de IVA, forma de pago).
 * Añadir un método que calcule el importe total de la factura
 * y actualice el valor de la propiedad correpondiente.
 * Por último, añadir otro método que muestre por pantalla el importe total de la factura
 * en un formato HTML adecuado
 *  1º ponemos los datos y luego ponemos una function para calcular los datos
 * esto es un array de objetos porque tiene numeros y letrasl
 * para que quiere un método para ver un valor, vemos que es algo innecesario el importe total
 * es una variable calculada, generalmente no se guardan, porque siempre va a volver a calcular la propiedad sobre la marcha
 * como no me han dicho que haga un diseño lo dejo como está. Importe total
 * como tenemos un array de objetos habrá que mapear el array de números son las funciones map y reduce, tb se podía haber hecho como 
 * un for un bucle. Yo quiero saber cuanto factura por el primer elemento, 2º elemento si tengo un array de objetos y quiero uno de nº 
 * lo mapeo, map proyecta un array, la única función que hay es map: [2,4,5], si quieres su cuadrado y lo calculas esto se llama proyección
 * si pongo pepe al cuadrado será NaN
 * en el ejercicio siguiente la haremos constructora para no estar continuamente generando todo de nuevo 
 */
(function(){

 factura = {
    empresa: {nombre: 'Ediciones Boracay', dirección: 'c/Pez', teléfono: '916583764', NIF: 'B-56214857'},
    cliente: {nombre: 'Libros Tuatalug', dirección: 'c/Marques', teléfono: '917256983', NIF: 'M-64584741'},
    items: [
        {descripción: 'Libro 1', precio: '20', cantidad: '1'},
        {descripción: 'Libro 2', precio: '15', cantidad: '1'},
        {descripción: 'Libro 3', precio: '10', cantidad: '1'},
    ],
    importeTotal: 0,//no los pone de objeto porque no lo ve pero se podría poner como objetos
    tipoIVA: 0.23,//lo ve mas propiedades de la factura
    formaPago: 'efectivo',
    calculaImporte: function() {
        let iva = this.tipoIVA <1 ? 1 + this.tipoIVA : this.tipoIVA
       return this.items.map(item => item.precio*item.cantidad).reduce((a,b) => a+b)*iva//lo de las{} es un callback, necesita que le digas que proyección quieres hacer
       //1º elemento va a ser precio*cantidad de cada uno es un array de numbers y siempre me devuelve el mismo nº de elementos [20x12, 15x1, 10x1]
       //la funcion reduce no hace nada si no poneis nada quiere la suma, reduce entra un array a un number
       //siempre va a devolver un number, un string, un boolian, se suele usar para operaciones matematicas y sin embargo en reduce me devuelve un nº
       //reduce solo va actuando con dos parametros
             },//el considera que una cosa es calcular y otra es describir, actualiza un valor, set en vez de actualizar y luego una función mona de actualizar importe

       actualizaImporte: function () {
           
        this.importeTotal = this.calculaImporte ()
       },
       muestraImporte: function () {
           //this.actualizaImporte()no haría falta esto
          // let msg = 'El importe total (IVA incluido) es ' + this.importeTotal.toFixed(2) + ' €'mejor poner calculaimporte porque importeTortal cambia y calcula no
           let msg = 'El importe total (IVA incluido) es ' + this.calculaImporte().toFixed(2) + ' €'
           //eso es lo que se llama una función calculada, no se guarda
           console.log(msg)

       }
}
}())
factura.muestraImporte()
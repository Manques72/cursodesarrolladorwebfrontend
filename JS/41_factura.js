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
 */
factura = {
    empresa: {nombre: '', dirección: '', teléfono: '', NIF: ''},
    cliente: {nombre: '', dirección: '', teléfono: '', NIF: ''},
    items: [
        {descripción: '', precio: '', cantidad: ''},
        {descripción: '', precio: '', cantidad: ''},
        {descripción: '', precio: '', cantidad: ''},
    ],
    importeTotal: 0,
    tipoIVA: 0.23,
    formaPago: 'efectivo',
    calculaImporte: function() {
        let iva = iva<1 ? 1+iva: iva
       return this.items.map(item => {item.precio*item.cantidad}).reduce((a,b) =>a+b)*i
       },
       actualizaImporte: function () {
           this.importeTotal = this.calculaImporte ()
       },
       muestraImporte: function () {
           this.actualizaImporte()
           console.log(this.importeTotal)
       }
}

factura.muestraImporte()
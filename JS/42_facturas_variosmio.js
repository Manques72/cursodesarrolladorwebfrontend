/**
 *Reacemos el ejercicio empleado una función constructora, siempre van con mayuscula en nombre y en minúscula
 *coge cosas y las guarda en otra, this no se que y ya está
 */
function Factura(empresa, cliente, items, tipoIVA, formaPago)//los parametros da igual el nombre lo importante es el nombre de this que es el objeto
//viendo que tenemos 6 propiedades lo ponemos entre parentesis le quitamos el Importe total poruqe no vale para nada
{   this.empresa = empresa//esto va con = es una funcion porque esta mandando variables aunqeu no sean numeros
    this.cliente = cliente
    this.items = items
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
    //this.calculaImporte = function() {}cada funcion te copiaría el código las funciones quiero que vayan fuera pero dentro
    //de los corchetes en el prototipo en parte de la function constructora

    function Empresa(nombre, direccion, telefono, NIF)
{   this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.NIF = NIF}
    
    function iTEM(descripcion, precio, cantidad)
{   this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}
Factura.prototype.CalculaImporte = function() {
    let iva = this.tipoIVA <1 ? 1 + this.tipoIVA : this.tipoIVA
    return this.items.map(item => item.precio*item.cantidad).reduce((a,b) => a+b)*iva
}
Factura.prototype.muestraImporte = function() {
    let msg = 'El importe Total (IVA incluido) es ' + this.calculaImporte().toFixed(2) + ' €'
    console.log(msg)}
  factura1 = new Factura(
      new Empresa('Ediciones Boracay', 'c/Pez', '916583764', 'B-56214857'),
      //ahora vendría la 2ª empresa qeu es el cliente que otro objeto literal
      new Empresa('Libros Tuatalug', 'c/Marques', '917256983', 'M-64584741'),
    [  new Item('Libro1', 20, 12), new Item ('Libro2', 15, 1)], new Item ('Libro 3', 10, 1),
   
    0.23,
    'efectivo')


console.log(factura1)
factura1.muestraImporte()
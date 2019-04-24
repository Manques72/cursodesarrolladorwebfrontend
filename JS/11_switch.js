//Siempre tienen que ser valores discretos, es un if sobre valores discretos
//de una sola variable no tendría x>5 no valdría porque son infinitos tampoco poner
//un switch x==2 && y ==3 ya no es solo una variable y pondría if y sería casi siempre etiquetas string
//vamos texto
let cargo //Gerente, Senior, Junior, Becario, es discreto tiene un nº limitado son solo 4
cargo = 'Gerente'
let bonus
switch (cargo.toLowerCase()) {
    case 'Gerente':
    bonus = 10000
    break
    case 'Senior':
    bonus =  1000
    break
    default:
    bonus = 0
        break
}

console.log(`Como eres ${cargo} Tu bonus es ${bonus}€`)

//En Java, C..
//string name = 'Pepe'
//string nameMay = UpperCase(name)


let array = []
array.push()//son las propiedades del objeto

let name = 'Pepe'//cojo el elemento y busco 
let nameMin = name.toLowerCase()
let nameMay = name.toUpperCase()

console.log(name, nameMin, nameMay)


let user = {nombre: 'Pepe', edad: 25}
console.log

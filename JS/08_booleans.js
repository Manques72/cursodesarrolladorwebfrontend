
 /* Condicionales en JS: if(condicion) {
   código se va a ejecutar cuando se cumpla la condición
    también puedo poner la condición pero si se ejecuta una se cambia else y se pone codigo B
    y sino otra es añadir otras condiciones else if y con 2º bloque de codigo
}

if(condicion) {
    //codigo A
} else if(condicion) {
    //codigo B
} else {
    //codigo C
}*/

let x = 3
x = 5
 x= '3' //tb te dice que es verdadero porque hace un casting

//siempre hay que poner dos = porque sino no te lo pregunta si es igual lo da por hecho con un solo igual
if(x == 3) {
   console.log('Es verdadero')
} else {
    console.log('Es falso')
}

if(x === 3) {//en comparación valor y tipo son 3 iguales y por eso te lo pone falso
    console.log('Es verdadero')
 } else {
     console.log('Es falso')
 }

 //Comparacion distinto es AltGr + 1= |=es el contrario del igual
 //Comparacion no identico !==
 //>< o >= <= funcionan como ya conocemos
//casting automatico abuliano si tu pones if(x) hace casting a abuliano en truly o falsy
//Casting a boolean
//Valores falsy - > false
x = false
x = undefined
x = ''//es un string vacío
x = NaN
x = 0
x = null

//Valores truly -> true
x = true
x = 25
x = 'Pepe'
x = {}
x = []
x = function () {}

if(x) {
    console.log('Es verdadero')
 } else {
     console.log('Es falso')
 }



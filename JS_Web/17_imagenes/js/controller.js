export function controller() {
    console.log('Controller cargado')

    let img1_dragon = true
    let img2_dragon = false //porque en esta no esta el dragon

    let aBotones = document.querySelector('.button')
    aBotones.forEach(item => {
        item.addEventListener('click', onClickImg)
    });
    

    function onClickImg(ev) {
        let nodoImg = ev.target.previousElementSibling.firstElementChild
        console.log(nodoImg.id)//aquí tengo el boton que voy a hacer click
    if (nodoImg.id == 'img1') {

       if (img1_dragon) {
        nodoImg.src = "./assets/iguana.png"
        } else {
        nodoImg.src = "./assets/dragon_komodo.jpg"
    
    }
    img1_dragon = !img1_dragon
   // dragon = !dragon //esto siempre se pone, dragon igual a no dragon
   else if ((nodoImg.id == 'img2') {
    if (img2_dragon) {
        nodoImg.src = "./assets/iguana.png"
        } else {
        nodoImg.src = "./assets/dragon_komodo.jpg"

   }
   img2_dragon = !img2_dragon
}
}

let tecla = document.querySelectorAll(`.tecla`)
let link = document.querySelector(`.link_char`)
let enemy = document.querySelector(`.enemy_char`)


var letra_seleccionada = 0
var n = "a"
var m = "a"

let palabra = palabras[Math.floor(Math.random() * palabras.length)]

let array_palabra = palabra.split("")

console.log(palabra) 
console.log(array_palabra) 
console.log(palabra.length) 

for(var l = 0; l < palabra.length; l += 1){
    document.querySelector(`.display`).innerHTML +=
    `
    <input type="text">
    `
}


function ahorcado() {
    n = array_palabra.indexOf(letra_seleccionada)
}

for(var i = 0; i <= tecla.length; i += 1){
    tecla[i].addEventListener("click",function(e){

        var aciertos = []
        letra_seleccionada = e.target.classList[1]  
        console.log(letra_seleccionada)
        n = array_palabra.indexOf(letra_seleccionada)
        m = array_palabra.indexOf(letra_seleccionada)


        while (n != -1) {
            aciertos.push(n);
            n = array_palabra.indexOf(letra_seleccionada, n + 1)
        }

        console.log(aciertos)
        console.log(m)
        console.log(aciertos.length)
        console.log(aciertos[0])


        let input = document.querySelectorAll(`input`)


        if(m != -1){
            console.log("si esta la letra")
            link.classList.add(`l_ataque`)
            input[m].value = letra_seleccionada
        } else {
            console.log("no esta la letra")
            enemy.classList.add(`e_ataque`)
        }

        setTimeout(function() {
            link.classList.remove(`l_ataque`);
            enemy.classList.remove(`e_ataque`);
          }, 1500);


    })
}



///////////////////////////////////////////////////////////////

/*


let tecla = document.querySelectorAll(`.tecla`)
let input = document.querySelector(`input`)

var letra_seleccionada = 0
var n = 0

let palabra = palabras[Math.floor(Math.random() * palabras.length)]

let array_palabra = palabra.split("")

console.log(palabra) 
console.log(array_palabra) 
console.log(palabra.length) 

for(var l = 0; l < palabra.length; l += 1){
    document.querySelector(`.display`).innerHTML +=
    `
    <input type="text">
    `
}

function detectar_letra(e) {
    letra_seleccionada = e.target.classList[1]  
    console.log(letra_seleccionada)
}

function ahorcado() {
    n = array_palabra.indexOf(letra_seleccionada)
}

/*
function detectar_letra(e) {
    console.log(e.target.classList[1])
    input.value = input.value + e.target.classList[1]
}
*//*

for(var i = 0; i <= tecla.length; i += 1){
    tecla[i].addEventListener("click",detectar_letra)
}

*/




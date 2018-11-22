let tecla = document.querySelectorAll(`.tecla`)
let link = document.querySelector(`.link_char`)
let enemy = document.querySelector(`.enemy_char`)

let modal_bg = document.querySelector(`.modal_back`)
let modal = document.querySelector(`.modal_element`)

let reload = document.querySelector(`.recargar`)

let corazon_1 = document.querySelector(`.c1`)
let corazon_2 = document.querySelector(`.c2`)
let corazon_3 = document.querySelector(`.c3`)

var vida_link = 6

let status = 0

let palabra = palabras[Math.floor(Math.random() * palabras.length)]
let resultado = palabra

let array_palabra = palabra.split("")

/*
console.log(palabra) 
console.log(array_palabra) 
console.log(palabra.length)
*/

let vida_enemigo = palabra.length

for(var l = 0; l < palabra.length; l += 1){
    document.querySelector(`.display`).innerHTML +=
    `
    <input type="text" disabled>
    `
}

reload.addEventListener("click", function(){
    window.location.reload()
 })

for(var i = 0; i < tecla.length; i += 1){
    tecla[i].addEventListener("click",function(e){
    

        if(status == 0){

            status = status + 1

            var letra_seleccionada = e.target.classList[1]
            var n_l = e.target.classList[2]

            tecla[n_l].classList.add(`click`)

            console.log(letra_seleccionada)
            
            var aciertos = []
            var n = array_palabra.indexOf(letra_seleccionada)
            var m = array_palabra.indexOf(letra_seleccionada)
            var s  = array_palabra.indexOf(letra_seleccionada)
    
            while (n != -1) {
                aciertos.push(n);
                n = array_palabra.indexOf(letra_seleccionada, n + 1)
            }
            
            /*
            console.log(aciertos)
            console.log(m)
            console.log(aciertos.length)
            console.log(aciertos[0])
            */
    
            let input = document.querySelectorAll(`input`)
            
            if(m != -1){
                console.log("si esta la letra")
                link.classList.add(`l_ataque`)
                enemy.classList.add(`e_golpe`)
                while (s != -1) {
                    input[s].value = letra_seleccionada
                    s = array_palabra.indexOf(letra_seleccionada, s + 1)
                }
                vida_enemigo = vida_enemigo - aciertos.length
            } else {
                    console.log("no esta la letra")
                    enemy.classList.add(`e_ataque`)
                    link.classList.add(`l_golpe`)
                    vida_link = vida_link - 1
            }
    
            setTimeout(function() {
                link.classList.remove(`l_ataque`);
                link.classList.remove(`l_golpe`)
                enemy.classList.remove(`e_ataque`);
                enemy.classList.remove(`e_golpe`);
              }, 2000);
    
    
            if(vida_link == 5){
                corazon_1.classList.add(`medio`)
            } else {
                if(vida_link == 4){
                    corazon_1.classList.add(`vacio`)
                } else {
                    if(vida_link == 3){
                        corazon_2.classList.add(`medio`)
                    } else {
                        if(vida_link == 2){
                            corazon_2.classList.add(`vacio`)
                        } else {
                            if(vida_link == 1){
                                corazon_3.classList.add(`medio`)
                            } else {
                                if(vida_link == 0){
                                    corazon_3.classList.add(`vacio`)
                                    link.classList.add(`l_muerte`)
                                    link.classList.remove(`l_default`)
                                    setTimeout(function(){
                                        modal_bg.classList.remove(`hide`)
                                        modal.classList.remove(`hide`)
                                        document.querySelector(`.palabra_resultado`).innerHTML +=
                                        `
                                        La palabra era<br><br>"${resultado}"
                                        `                                    
                                    }, 2000)
                                }
                            }
                        }
                    }
                }
            }
    
            if(vida_enemigo == 0){
                link.classList.add(`l_victoria`)
                enemy.classList.add(`e_muerte`)
                setTimeout(function(){
                    enemy.classList.remove(`e_default`)
                }, 2000)
                setTimeout(function(){
                    window.location.reload()
                }, 4000)
            }

            setTimeout(function(){
                status = status - 1
            }, 1000)

        } 
    })

}


/////////////////////////////////////////////////////////

/*


let tecla = document.querySelectorAll(`.tecla`)
let link = document.querySelector(`.link_char`)
let enemy = document.querySelector(`.enemy_char`)

let modal_bg = document.querySelector(`.modal_back`)
let modal = document.querySelector(`.modal_element`)

let reload = document.querySelector(`.recargar`)

let corazon_1 = document.querySelector(`.c1`)
let corazon_2 = document.querySelector(`.c2`)
let corazon_3 = document.querySelector(`.c3`)

var vida_link = 6

let palabra = palabras[Math.floor(Math.random() * palabras.length)]
let resultado = palabra

let array_palabra = palabra.split("")

console.log(palabra) 
console.log(array_palabra) 
console.log(palabra.length)

let vida_enemigo = palabra.length

for(var l = 0; l < palabra.length; l += 1){
    document.querySelector(`.display`).innerHTML +=
    `
    <input type="text" disabled>
    `
}

reload.addEventListener("click", function(){
    window.location.reload()
 })

for(var i = 0; i <= tecla.length; i += 1){
    tecla[i].addEventListener("click",function(e){
    
        var letra_seleccionada = e.target.classList[1]
        console.log(letra_seleccionada)
        
        var aciertos = []
        var n = array_palabra.indexOf(letra_seleccionada)
        var m = array_palabra.indexOf(letra_seleccionada)
        var s  = array_palabra.indexOf(letra_seleccionada)

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
            enemy.classList.add(`e_golpe`)
            while (s != -1) {
                input[s].value = letra_seleccionada
                s = array_palabra.indexOf(letra_seleccionada, s + 1)
            }
            vida_enemigo = vida_enemigo - aciertos.length
        } else {
                console.log("no esta la letra")
                enemy.classList.add(`e_ataque`)
                link.classList.add(`l_golpe`)
                vida_link = vida_link - 1
        }

        setTimeout(function() {
            link.classList.remove(`l_ataque`);
            link.classList.remove(`l_golpe`)
            enemy.classList.remove(`e_ataque`);
            enemy.classList.remove(`e_golpe`);
          }, 2000);


        if(vida_link == 5){
            corazon_1.classList.add(`medio`)
        } else {
            if(vida_link == 4){
                corazon_1.classList.add(`vacio`)
            } else {
                if(vida_link == 3){
                    corazon_2.classList.add(`medio`)
                } else {
                    if(vida_link == 2){
                        corazon_2.classList.add(`vacio`)
                    } else {
                        if(vida_link == 1){
                            corazon_3.classList.add(`medio`)
                        } else {
                            if(vida_link == 0){
                                corazon_3.classList.add(`vacio`)
                                link.classList.add(`l_muerte`)
                                link.classList.remove(`l_default`)
                                setTimeout(function(){
                                    modal_bg.classList.remove(`hide`)
                                    modal.classList.remove(`hide`)
                                    document.querySelector(`.palabra_resultado`).innerHTML +=
                                    `
                                    La palabra era<br><br>"${resultado}"
                                    `                                    
                                }, 1500)
                            }
                        }
                    }
                }
            }
        }

        if(vida_enemigo == 0){
            link.classList.add(`l_victoria`)
            enemy.classList.add(`e_muerte`)
            setTimeout(function(){
                enemy.classList.remove(`e_default`)
            }, 2000)
            setTimeout(function(){
                window.location.reload()
            }, 4000)
        }

    })

}

*/
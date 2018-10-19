/*
    Objetivo de hoy lunes:

    1. Planeación de su juego, decidir que
    tema llevará y obtener imagenes 
    representativas de las opciones que
    se usarán

    2. Crear layout de su juego con las
    siguientes características:
      - Encabezado con nombre de juego
      - Colores personalizados de fondo
        y textos
      - Botones grandes con las 3 opciones
        del juego (piedra, papel, tijera)
      - Cuadro de texto que muestre los 
        resultados del juego (estilos)

    Recuerden utilizar flexbox para su
    estructura de elementos.

    Ideas de temas alternos:
    
    En ciertos paises asiaticos juegan con:
        pajaro, agua y piedra

    Versión difícil (ver alt.png):
    piedra, papel, tijera, lagartija, spock
*/
////////

/*
function juego(e){
  document.querySelector(`#jugador_1`).src = e.target.src;
}
*/

/*
function juego(e){
  let opciones = [ "A", "B", "C", "D", "E"];
  let random = opciones[Math.floor(opciones.length * Math.random())]
  console.log(random)
  document.querySelector(`#jugador_1`).src = e.target.src;
}
*/

var p1 = 0
var p2 = 0

let btn_rock = document.querySelector(`#rock`)
let btn_paper = document.querySelector(`#paper`)
let btn_scissors = document.querySelector(`#scissors`)
let btn_lizard = document.querySelector(`#lizard`)
let btn_spock = document.querySelector(`#spock`)
let btn_leyenda = document.querySelector(`.leyenda`)
let score_p1 = document.querySelector(`.score_1`)
let score_p2 = document.querySelector(`.score_2`)

function juego(e){
  let opciones = 
    [ document.querySelector(`#rock`), 
    document.querySelector(`#paper`), 
    document.querySelector(`#scissors`), 
    document.querySelector(`#lizard`), 
    document.querySelector(`#spock`)];

  let random = opciones[Math.floor(opciones.length * Math.random())]

  document.querySelector(`#jugador_1`).src = e.target.src;
  document.querySelector(`#jugador_2`).src = random.src;

  /*
  setTimeout(function() {
    document.querySelector(`#jugador_2`).src = random.src;
  }, 1500);
  */

  let seleccion_jugador_1 = e.target.getAttribute("id")
  let seleccion_jugador_2 = random.getAttribute("id")

  console.log(seleccion_jugador_1)
  console.log(seleccion_jugador_2)

  if(seleccion_jugador_1 == seleccion_jugador_2){
    document.querySelector(`body`).style.background = "rgb(253, 147, 6)"
    var empate = "Ha sido un empate"
    console.log(empate)
    btn_leyenda.innerText = `¡Ha sido un empate!`
    return
  }

  let reglas = {
    rock : ["scissors","lizard"],
    paper : ["spock", "rock"],
    scissors : ["paper", "lizard"],
    lizard : ["spock" , "paper"],
    spock : ["scissors", "rock"]
  }

  var resultado = reglas[seleccion_jugador_1].indexOf(seleccion_jugador_2)

  if(resultado != -1){
    document.querySelector(`body`).style.background = "rgb(72, 208, 49)"
    console.log("Has ganado")
    btn_leyenda.innerText = `¡Has ganado!`
    score_p1.innerText = (p1 += 1) 
  } else {
    document.querySelector(`body`).style.background = "rgb(212, 38, 21)"
    console.log("Has perdido")
    btn_leyenda.innerText = `¡Has perdido!`
    score_p2.innerText = (p2 += 1) 
  }

}

btn_rock.addEventListener("click",juego)
btn_paper.addEventListener("click",juego)
btn_scissors.addEventListener("click",juego)
btn_lizard.addEventListener("click",juego)
btn_spock.addEventListener("click",juego)

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

let jugada_j1 = null
let jugada_j2 = null
let j1_src = null

function jugador_1(e){
  document.querySelector(`#jugador_1`).src = e.target.src;
  j1_src = e.target.src;
  jugada_j1 = e.target.getAttribute("id")

  btn_rock.removeEventListener("click",jugador_1)
  btn_paper.removeEventListener("click",jugador_1)
  btn_scissors.removeEventListener("click",jugador_1)
  btn_lizard.removeEventListener("click",jugador_1)
  btn_spock.removeEventListener("click",jugador_1)

  setTimeout(function() {
    document.querySelector(`#jugador_1`).src = "../Iconos/random.gif"  
    document.querySelector(`body`).style.background = "rgb(161, 60, 255"
    btn_leyenda.innerText = `Turno del Jugador 2`
  }, 1000);

  btn_rock.addEventListener("click",jugador_2)
  btn_paper.addEventListener("click",jugador_2)
  btn_scissors.addEventListener("click",jugador_2)
  btn_lizard.addEventListener("click",jugador_2)
  btn_spock.addEventListener("click",jugador_2)
  
}

function jugador_2(b){
  document.querySelector(`#jugador_2`).src = b.target.src;
  jugada_j2 = b.target.getAttribute("id")

  setTimeout(function() {
    btn_leyenda.innerText = `¡Esperen!`
    document.querySelector(`#jugador_2`).src = "../Iconos/random.gif"
  }, 1000);

  setTimeout(function() {
    document.querySelector(`#jugador_1`).src = j1_src;
    document.querySelector(`#jugador_2`).src = b.target.src;

    if(jugada_j1 == jugada_j2){
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
  
    var resultado = reglas[jugada_j1].indexOf(jugada_j2)
  
    if(resultado != -1){
      document.querySelector(`body`).style.background = "rgb(89, 60, 255)"
      console.log("El Jugador 1 ha ganado")
      btn_leyenda.innerText = `¡El Jugador 1 ha ganado!`
      score_p1.innerText = (p1 += 1) 
    } else {
      document.querySelector(`body`).style.background = "rgb(161, 60, 255"
      console.log("El Jugador 2 ha ganado")
      btn_leyenda.innerText = `¡El Jugador 2 ha ganado!`
      score_p2.innerText = (p2 += 1) 
    } 
  }, 4000);


  setTimeout(function() {
    btn_leyenda.innerText = `Turno del Jugador 1`
    document.querySelector(`body`).style.background = "rgb(89, 60, 255)"
    document.querySelector(`#jugador_1`).src = "../Iconos/random.gif"
    document.querySelector(`#jugador_2`).src = "../Iconos/random.gif"

  }, 8000);


  btn_rock.removeEventListener("click",jugador_2)
  btn_paper.removeEventListener("click",jugador_2)
  btn_scissors.removeEventListener("click",jugador_2)
  btn_lizard.removeEventListener("click",jugador_2)
  btn_spock.removeEventListener("click",jugador_2)

  btn_rock.addEventListener("click",jugador_1)
  btn_paper.addEventListener("click",jugador_1)
  btn_scissors.addEventListener("click",jugador_1)
  btn_lizard.addEventListener("click",jugador_1)
  btn_spock.addEventListener("click",jugador_1)

}

////////

btn_rock.addEventListener("click",jugador_1)
btn_paper.addEventListener("click",jugador_1)
btn_scissors.addEventListener("click",jugador_1)
btn_lizard.addEventListener("click",jugador_1)
btn_spock.addEventListener("click",jugador_1)

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

let btn_rock = document.querySelector(`#rock`)
let btn_paper = document.querySelector(`#paper`)
let btn_scissors = document.querySelector(`#scissors`)
let btn_lizard = document.querySelector(`#lizard`)
let btn_spock = document.querySelector(`#spock`)

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


function juego(e){
  let opciones = [ document.querySelector(`#rock`).src, document.querySelector(`#paper`).src, document.querySelector(`#scissors`).src, document.querySelector(`#lizard`).src, document.querySelector(`#spock`).src];
  let random = opciones[Math.floor(opciones.length * Math.random())]
  console.log(ramdom)
  document.querySelector(`#jugador_1`).src = e.target.src;
  document.querySelector(`#jugador_2`).src = random;
}




btn_rock.addEventListener("click",juego)
btn_paper.addEventListener("click",juego)
btn_scissors.addEventListener("click",juego)
btn_lizard.addEventListener("click",juego)
btn_spock.addEventListener("click",juego)
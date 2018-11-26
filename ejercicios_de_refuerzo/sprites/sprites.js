
// Declaramos variables booleanas que determinaran
// si el dude se debe mover en cierta dirección
let arriba = false
let derecha = false
let abajo = false
let izquierda = false

// Cuando se presione la respectiva tecla activaremos
// la variable correspondiente
document.addEventListener('keydown', function(e) {
  if(e.key === 'ArrowUp') arriba = true
  if(e.key === 'ArrowRight') derecha = true
  if(e.key === 'ArrowDown') abajo = true
  if(e.key === 'ArrowLeft') izquierda = true
});

// Cuando se desactive la tecla desactivaremos así
// mismo la variable
document.addEventListener('keyup', function(e) {
  if(e.key === 'ArrowUp') arriba = false
  if(e.key === 'ArrowRight') derecha = false
  if(e.key === 'ArrowDown') abajo = false
  if(e.key === 'ArrowLeft') izquierda = false
});

// Utilizaremos las variables x, y para almacenar
// la posicion actual del dude
let x = 300
let y = 300

// El sprite que estamos usando mide 233 x 300
// cada frame y tiene 4 filas (hacia la derecha)
let spriteWidth = 233
let spriteHeight = 300
let filas = 4

// Declaramos dos variables para determinar que
// frame del sprite sheet mostraremos
let fila = 1
let linea = 1

// Declaramos una variable de velocidad que indicará
// cuantos pixeles se moverá el dude cada vez que lo haga
let velocidad = 20

// Obtenemos una referencía al dude
let dude = document.querySelector('.dude')

// Finalmente declaramos la función loop que se llamará
// eternamente una y otra vez y que en base a todo lo
// anterior, manejará la posición y el frame del dude
let loop = function() {

  // Con las variables que declaramos al inicio deducimos
  // que dirección está activada y modificamos la posición
  // x o y del dude así como la linea del sprite sheet que
  // se usará, cada linea del sprite sheet es una dirección
  // de desplazamiento
  if(arriba) {
    y -= velocidad
    linea = 2
  }
  if(abajo) {
    y += velocidad
    linea = 1
  }
  if(derecha) {
    x += velocidad
    linea = 4
  }
  if(izquierda) {
    x -= velocidad
    linea = 3
  }

  // Si alguna de las cuatro variables de movimiento
  // está activada, animamos el dude
  if(arriba || derecha || abajo || izquierda) {
    fila += 1
    if(fila > filas) fila = 1
  }

  let spriteX = (fila - 1) * spriteWidth
  let spriteY = (linea - 1) * spriteHeight

  // Movemos al dude con translate
  dude.style.transform = `translate(${x}px, ${y}px)`

  // Cambiamos al sprite que calculamos
  dude.style.backgroundPosition = `${spriteX}px ${spriteY}px`

  // corremos la función de nuevo una vez terminada
  setTimeout(loop, 150)
  console.log('loop')
}
loop()
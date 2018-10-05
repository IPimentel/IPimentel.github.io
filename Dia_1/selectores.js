//querySelector, solo un elemento
//let miEtiqueta = document.querySelector("h1")

//miEtiqueta.innerHTML = "Me llamo"

//miEtiqueta.innerText = "Me llamo"

// Ejercicio 4
// Por medio un prompt pedirle un nomnbre
// al usuario,, remplazar el nombrem de h2
/*
let miNombre = document.querySelector("h2")
miNombre.innerText = window.prompt(`¿Cómo te llamas?`)
*/

//let miCampo = document.querySelector("input")

//
/*
function poner(){
    let el = document.querySelector("h2")
    let miCampo = document.querySelector(`input`)
    el.innerText = miCampo.value
}
*/

// Ejercicio 5
// Poner un input y un h1, crear una funcion
// que agarre el valor del input, lo
// multiplique por 2 y lo ponga dentro de h1 

/*
function poner(){
    let numero = document.querySelector("h1")
    let miCampo = document.querySelector(`input`)
    numero.innerText = miCampo.value * 2
}
*/

var suma = 0

function sumar(){
    let total = document.querySelector("h3")
    let resultado = document.querySelector("h1")
    let numero_a = document.querySelector("#num1")
    let numero_b = document.querySelector("#num2")
    resultado.innerText = parseInt(numero_a.value) + parseInt(numero_b.value)
    suma = suma + (parseInt(numero_a.value) + parseInt(numero_b.value))
    total.innerText = suma
}


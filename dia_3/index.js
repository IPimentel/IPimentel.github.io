// Ejercicio para el día 3 Calculadora

// Utilizar css para darle una
// mejor presentación al html

// Generar funciones para las acciones
// de sumar, restar, multiplicar y dividir
// (Aún no se escribirá la funcionalidad)

// Generar variables que obtengan la
// referencia a los elementos de html
// (3 inputs y 4 botones)

// Asignar eventos a los botones para que
// ejecuten las funciones correspondientes

// Escribir la funcionalidad de las 4
// posibles operaciones de la calculadora

let numero_1 = document.querySelector(`.num1`)
let numero_2 = document.querySelector(`.num2`)
let mi_resultado = document.querySelector(`.resultado`)
let boton_suma = document.querySelector(`.botonMas`)
let boton_resta = document.querySelector(`.botonMenos`)
let boton_multiplica = document.querySelector(`.botonPor`)
let boton_divide = document.querySelector(`.botonEntre`)
let boton_limpar = document.querySelector(`.botonClear`)
let boton_exponenciar = document.querySelector(`.botonExponencial`)

function sumar(){
    mi_resultado.value =
        parseFloat(numero_1.value) + parseFloat(numero_2.value)
}

function restar(){
    mi_resultado.value =
        parseFloat(numero_1.value) - parseFloat(numero_2.value)
}

function multiplicar(){
    mi_resultado.value =
        parseFloat(numero_1.value) * parseFloat(numero_2.value)
}

function dividir(){
    mi_resultado.value =
        parseFloat(numero_1.value) / parseFloat(numero_2.value)
}

function exponenciar(){
    mi_resultado.value =
        parseFloat(numero_1.value) ** parseFloat(numero_2.value)

}

function limpiar(){
    mi_resultado.value = "Resultado"
    numero_1.value = 0
    numero_2.value = 0
}

function detectarEnter(e) {
    if(e.key == `Enter`){
        mi_resultado.value =
        parseFloat(numero_1.value) + parseFloat(numero_2.value)
    }
}

boton_suma.addEventListener("click",sumar)
boton_resta.addEventListener("click",restar)
boton_multiplica.addEventListener("click",multiplicar)
boton_divide.addEventListener("click",dividir)
boton_limpar.addEventListener("click", limpiar)
boton_exponenciar.addEventListener("click", exponenciar)


numero_1.addEventListener("keyup",detectarEnter)
numero_2.addEventListener("keyup",detectarEnter)


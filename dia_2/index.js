/*
let miBoton = document.querySelector(`button`)

function diHola(){
    window.alert(`Hola!`);
}

miBoton.addEventListener("click",diHola)
*/

// Ejercicio 1
// Asignale un evento al botón que pida un
// nombre por medio de un prompt, una vez que
// lo ingrese el usuario mostrarlo con alert

/*
let miBoton = document.querySelector(`button`);

let nombre = document.querySelector(`.nombre`);
let apellido = document.querySelector(`.apellido`);


function diHola(){
    window.alert(`Hola ${nombre.value} ${apellido.value}!`);
}

miBoton.addEventListener("click",diHola);
*/

//Función Anónima
/*
miBoton.addEventListener("click",function(){
    window.alert(`hola`)
});
*/

// Ejericio 2
// Tienen que hacer una aplicación que se usará
// para proteger una boveda, con un input pedirán
// la clave al usuario y cuando el usuario presioné
// un botón checará si la contraseña es correcta
// mostrar el resultado en otro input

/*
let password = "pizza"

let mi_boton = document.querySelector(`button`)
let respuesta = document.querySelector(`.respuesta`)
let password_ingresado = document.querySelector(`.clave`)

/*
function log_in(){
    if(password_ingresado.value === password){
        respuesta.value = "Acceso concedido"
    } else {
        respuesta.value = "Acceso denegado"      
    }
}

mi_boton.addEventListener("click",log_in)
*/

// Ejercicio extra - Hacer que tenga un numero limitado de intentos 

let password = "pizza"
var n = 0
var i = 3

let mi_boton = document.querySelector(`button`)
let respuesta = document.querySelector(`.respuesta`)
let password_ingresado = document.querySelector(`.clave`)
let intentos = document.querySelector(`h2`)

function log_in(){
    if(n <= i){
        if(password_ingresado.value === password){
            respuesta.value = "Acceso concedido"
        } else {
            respuesta.value = "Acceso denegado"
            n += 1
            intentos.innerText = (i -= 1)
        }
    } else {
        intentos.innerText = 0
        respuesta.value = "Intentos agotados"
    }
}

mi_boton.addEventListener("click",log_in)

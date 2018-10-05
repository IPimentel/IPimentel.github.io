//Modals

window

//Alert

//window.alert("Esta es una alerta")

//Confirm

//window.confirm("¿Seguro que quieres hacer eso?")

/*
if(window.confirm("Seguro?")){
    window.alert("Sí")
} else {
    window.alert("No") 
}
*/

//Ejericio 1
//Declarar 2 variables con numeros
//Preguntar con un Confirm si desea sumar
//en caso de si, mostrar la suma de los 2
// con alert, en caso de que no mostrar
//la resta

/*
let num1 = 50
let num2 = 30

if(window.confirm(`¿Quieres sumar los números? ${num1} y ${num2}`)){
    window.alert(num1 + num2)
} else {
    window.alert(num1 - num2)
}
*/

//Prompt 

// Ejercicio 2
// Pedir 2 valores con prompt y
// Mostrar con alert la suma de los dos

/*
let numpero_1 = window.prompt(`Ingresa el primer numero`)
let numpero_2 = window.prompt(`Ingresa el segundo numero`)

let numero_1_real = parseInt(numpero_1)
let numero_2_real = parseInt(numpero_2)

window.alert(numero_1_real + numero_2_real)
*/

// Ejercicio 3
// Comiste en un restaurante y el mesero 
// te trae la terminal para que pagues
// debes ingresar cuanto pagaras, una
// vez ingresando te pregunta si deseas
// agregar propina, imprime el total que
// te cobraron a tu tarjeta

/*
let cuenta = window.prompt(`Ingresa la cuenta total`)
if(window.confirm(`¿Quieres agregar la propina?`)){
    window.alert("La cuenta con propina es de $" + parseInt(cuenta * 1.10))
} else {
    window.alert("La cuenta es de $" + cuenta)
}
*/

// Ejercicio Extra


let cantidad = window.prompt(`¿Cuántos números quieres sumar?`)
let n = 1   
var suma = 0

while(n < (parseInt(cantidad)+1)){
    var numero = window.prompt(`Ingresa el numero ${n}`)
    n += 1
    suma = suma + parseInt(numero)
}
window.alert(`El total es de ${suma}`)

// Crear una app que te diga cual es tu
// indice de masa corporal

// Utilizar css para que se vea presentable

// Usar inputs para pedir los datos

// La formula es  peso(kg) / altura(m) ^ 2

// 30 o más obesidad

// 25 a 30 sobrepeso

// 18.5 a 25 normal

// menos de 18.5 es falta de peso

// Con document body
// document.body.style.background = "#fff"

// Con querySelector
// document.querySelector(`body`).style.background = "#fff"

// Con querySelector guardado en una variable
// let body = document.querySelector(`body`);
// body.style.background = "#fff";


let altura = document.querySelector(`.altura`)
let peso = document.querySelector(`.peso`)
let resultado = document.querySelector(`.resultado`)
let mi_boton = document.querySelector(`.boton`)
let imc = document.querySelector(`.imc`)

function sacar_imc(){
    let total = parseFloat(peso.value) / (parseFloat(altura.value)**2)  
    if(total > 30){
        resultado.innerText = `Tu IMC es de  ${total.toFixed(2)}`
        imc.innerText = `Tienes Obesidad`
        document.querySelector(`.resultado`).style.color = "#E20414"
        document.querySelector(`.imc`).style.color = "#E20414"
        document.querySelector(`body`).style.background = "linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)"
    } else {
        if(total > 25){
            resultado.innerText = `Tu IMC es de  ${total.toFixed(2)}`
            imc.innerText = `Tienes Sobrepeso`
            document.querySelector(`.resultado`).style.color = "#E86504"
            document.querySelector(`.imc`).style.color = "#E86504"
            document.querySelector(`body`).style.background = "linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)"       
        } else {
            if(total > 18.5){
                resultado.innerText = `Tu IMC es de  ${total.toFixed(2)}`
                imc.innerText = `Tienes tu peso ideal`
                document.querySelector(`.resultado`).style.color = "#19c003"
                document.querySelector(`.imc`).style.color = "#19c003" 
                document.querySelector(`body`).style.background = "linear-gradient( 135deg, #70F570 10%, #49C628 100%)"                    
            } else {
                resultado.innerText = `Tu IMC es de  ${total.toFixed(2)}`
                imc.innerText = `Estas por debajo de tu peso`
                document.querySelector(`.resultado`).style.color = "#029081"
                document.querySelector(`.imc`).style.color = "#029081"
                document.querySelector(`body`).style.background = "linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%)"               
            }
        }
    }
} 

mi_boton.addEventListener("click",sacar_imc)

/*
function sacar_imc(){
    let total = parseFloat(peso.value) / (parseFloat(altura.value)**2)  
    resultado.value = total.toFixed(2)
    if(total > 30){
        document.querySelector(`.resultado`).style.borderColor = "#E20414"
        document.querySelector(`.resultado`).style.color = "#E20414"
    } else {
        if(total > 25){
            document.querySelector(`.resultado`).style.borderColor = "#E86504"
            document.querySelector(`.resultado`).style.color = "#E86504"    
        } else {
            if(total > 18.5){
                document.querySelector(`.resultado`).style.borderColor = "#19c003"
                document.querySelector(`.resultado`).style.color = "#19c003"        
            } else {
                document.querySelector(`.resultado`).style.borderColor = "#029081"
                document.querySelector(`.resultado`).style.color = "#029081"        
            }
        }
    }
} 
*/
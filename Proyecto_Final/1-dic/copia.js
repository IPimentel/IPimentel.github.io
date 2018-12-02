let submit = document.querySelector(`.submit`)

//Inputs

let input_cliente = document.getElementById("cliente")
let input_proyecto = document.getElementById("proyecto")

let producto_anchura = document.getElementById("anchura")
let producto_altura = document.getElementById("altura")

let input_cantidad = document.getElementById("cantidad")

// Radios

let con_rebase = document.getElementById("con_rebase");
let sin_rebase = document.getElementById("sin_rebase")

//Select

let select_producto = document.getElementById("tipo_producto")
let select_papel = document.getElementById("tipo_papel")
let select_puntaje = document.getElementById("puntaje")
let select_tintas_frente = document.getElementById("tintas_frente")
let select_tintas_vuelta = document.getElementById("tintas_vuelta")

//Arrays

let array_medidas = [[9,5],[15,5],[21.5,14],[15,9],[28,21.5],[28,21.5]]
let array_puntaje = [

    //Papeles para editorial

    ["130 gr/m2","150 gr/m2","250 gr/m2","300 gr/m2"],
    ["75 gr/m2","90 gr/m2","120 gr/m2"],
    ["75 gr/m2","90 gr/m2"],
    ["75 gr/m2"],

    //Papeles para envase

    ["12","14","16","18","20","22","24"],
    ["12","14","16","18","20","22","24"],

    //Papeles especiales

    ["125 gr/m2"],
    ["150 gr/m2"],
    ["225 gr/m2"],
    ["150 gr/m2"],
    ["350 gr/m2"]

]

let area_carta = 526.5
let area_oficio = 643.5


//Variables globales

var cliente = 0
var proyecto = 0

var tipo_producto = 0
var cantidad_producto = 0

var anchura_producto = 0
var altura_producto = 0

var anchura_producto_rebase = 0
var altura_producto_rebase = 0

var area_producto = 0

var tintas_frente = 0
var tintas_vuelta = 0
var papel_producto = 0
var puntaje_papel = 0
var estado_rebase = "Sin rebase" 

///////////////////////////////////////////////////////////

//Funciones globales

function area_del_producto(){
    
    if(sin_rebase.checked !== true){
        area_producto = parseFloat((anchura_producto_rebase*altura_producto_rebase).toFixed(2))
    } else {        
        area_producto = anchura_producto * altura_producto
    }

}

//////////////////////////////////////////////////////////////

//Nombre del cliente

input_cliente.addEventListener("input",function(){

    cliente = input_cliente.value

})

//Descripción del proyecto

input_proyecto.addEventListener("input",function(){

    proyecto = input_proyecto.value

})


//Tipo de Producto

select_producto.addEventListener("input", function(){

    var i = select_producto.selectedIndex;
    var opcion = select_producto.options[i];
    tipo_producto = opcion.text;
    var value = opcion.value;
    var n = (value - 1)

    if(i == 0 || i == 7){
        producto_anchura.value = ``
        producto_altura.value = ``     
    } else {
        producto_anchura.value = array_medidas[n][0]
        producto_altura.value = array_medidas[n][1]     
    }

    anchura_producto = parseFloat(producto_anchura.value)
    altura_producto = parseFloat(producto_altura.value)

    anchura_producto_rebase = anchura_producto + .6
    altura_producto_rebase = altura_producto +.6

    area_del_producto()

})

//Cantidad de productos

input_cantidad.addEventListener("input", function(){

    valor = input_cantidad.value
    cantidad_producto = parseInt(valor.split(/\./)[0].match(/\d/g).join(''))

})

//Anchura del producto

producto_anchura.addEventListener("input",function(){

    anchura_producto = parseFloat(producto_anchura.value)
    anchura_producto_rebase = anchura_producto + .6

    area_del_producto()

})

//Altura del producto

producto_altura.addEventListener("input",function(){

    altura_producto = parseFloat(producto_altura.value)
    altura_producto_rebase = altura_producto +.6

    area_del_producto()

})

// Número de tintas Frente

select_tintas_frente.addEventListener("input", function(){

    var i = select_tintas_frente.selectedIndex;
    var opcion = select_tintas_frente.options[i];
    tintas_frente = parseInt(opcion.value);

})

//Número de tintas Vuelta

select_tintas_vuelta.addEventListener("input",function(){

    var i = select_tintas_vuelta.selectedIndex;
    var opcion =select_tintas_vuelta.options[i];
    tintas_vuelta = parseInt(opcion.value);

})


//Tipo de papel

select_papel.addEventListener("input", function(){

    var i = select_papel.selectedIndex;
    var opcion = select_papel.options[i];
    papel_producto = opcion.text;
    var value = opcion.value;
    var n = (value - 1)

    /*
    console.log(value)
    console.log(array_puntaje[n]["length"])
    */

    select_puntaje.innerHTML =
    `

    `

    for(index = 0; index < array_puntaje[n]["length"]; index += 1){
        select_puntaje.innerHTML +=
        `
        <option>${array_puntaje[n][index]}</option>
        `
    }

    var index_puntaje = select_puntaje.selectedIndex;
    var opcion_puntaje = select_puntaje.options[index_puntaje];
    puntaje_papel = opcion_puntaje.text

})

//Puntaje del Papel

select_puntaje.addEventListener("input", function(){

    var i = select_puntaje.selectedIndex;
    var opcion = select_puntaje.options[i];
    puntaje_papel = opcion.text;
    var value = opcion.value

})

//Rebase

con_rebase.addEventListener("click",function(){

    estado_rebase = "Con rebase"

    area_del_producto()

})


sin_rebase.addEventListener("click",function(){

    estado_rebase = "Sin rebase"

    area_del_producto()

})

///////////////////////////////////

function area_del_producto(){
    
    if(sin_rebase.checked !== true){
        area_producto = anchura_producto_rebase * altura_producto_rebase
    } else {        
        area_producto = anchura_producto * altura_producto
    }

}

submit.addEventListener("click",area_del_producto)




/*
while(area_producto < area_carta){
       
    console.log(area_producto)

    area_producto = area_producto**productos_formato 
}
*/



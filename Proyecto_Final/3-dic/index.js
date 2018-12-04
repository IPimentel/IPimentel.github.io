let submit = document.querySelector(`.submit`)

//Inputs

let input_cliente = document.getElementById("cliente")
let input_proyecto = document.getElementById("proyecto")

let producto_anchura = document.getElementById("anchura")
let producto_altura = document.getElementById("altura")

let input_cantidad = document.getElementById("cantidad")

//Display

let concepto_papel = document.getElementById("concepto_papel")
let precio_unitario_papel = document.getElementById("precio_unitario_papel")

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

let array_papel_precios = [

    //Couche
    [
        //130gr
        [1.40,1.55,1.70],

        //150gr
        [1.50,1.65,1.80],

        //250gr
        [2.20,2.50,2.80],

        // 300gr
        [2.40,2.70,3.00]
    ],

    //Bond blanco
    [
        //75gr
        [0.80,1.00,1.20],

        //90gr 
        [0.95,1.15,135],

        //120gr
        [1.30,1.50,1.70]
    ],

    //Bond ahuesado
    [
        //75gr
        [0.90],

        //90gr
        [1.40]
    ],

    //Capuccino
    [
        //75gr
        [1.10,1.20,1.30]
    ]

]

/*
array_medidas_papel = [

    ["Carta",20.5,26],
    ["Oficio", 20.5,32],
    ["Doble carta",27,41],
    ["Doble oficio",33,41],
    ["Cuatro cartas",42,54],
    ["Cuatro oficios",42,66],
    ["Ocho cartas",56,85]
    ["Ocho oficios",67,84]

]
*/

let array_medidas_papel = [
    {
        formato:'Carta', anchura: 20.5, altura: 26, formatos: 8, indice: 0,
    },    {
        formato:'Oficio', anchura: 20.5, altura: 32, formatos: 8, indice: 1,
    },    {
        formato:'Doble carta', anchura: 27, altura: 41, formatos: 4, indice: 2,
    },    {
        formato:'Doble oficio', anchura: 33, altura: 41, formatos: 4, indice: 3,
    },    {
        formato:'Cuatro cartas', anchura: 42, altura: 54, formatos: 2, indice: 4,
    },    {
        formato:'Cuatro oficios', anchura: 42, altura: 66, formatos: 2, indice: 5,
    },    {
        formato:'Ocho cartas', anchura: 56, altura: 85, formatos: 2, indice: 6,
    },    {
        formato:'Ochco oficios', anchura: 67, altura: 84, formatos: 1, indice: 7,
    },
    
]

let array_area_formato = [

    {
        nombre:'Carta',area: 553,
    },{
        nombre:'Oficio',area: 656,
    },{
        nombre:'Doble carta',area: 1107,
    },{
        nombre:'Doble oficio',area: 1353,
    },{
        nombre:'Cuatro cartas',area: 2268,
    },{
        nombre:'Cuatro oficios',area: 2772,
    },{
        nombre:'Ocho carta',area: 4760,
    },{
        nombre:'Ocho oficio',area: 5628,
    },
]

//Variables globales

var cliente = 0
var proyecto = 0

var tipo_producto = 0
var cantidad_producto = 0

var anchura_producto = 0
var altura_producto = 0

var anchura_producto_original = 0 
var altura_producto_original = 0

var anchura_producto_rebase = 0
var altura_producto_rebase = 0

var area_producto = 0

var tintas_frente = 0
var tintas_vuelta = 0

var tipo_maquina = 0

var papel_producto = 0
var papel_producto_indice = ""

var puntaje_papel = 0
var puntaje_papel_indice = ""

var estado_rebase = "Sin rebase" 

//Variables para formulas

var tipo_formato = ""
var tipo_formato_indice = ""

var formatos_pliego = ""

var productos_formato = ""

///////////////////////////////////////////////////////////

//Funciones globales

function area_del_producto(){
    
    area_producto = parseFloat((anchura_producto *altura_producto).toFixed(2))

    /*
    if(sin_rebase.checked !== true){
        area_producto = parseFloat((anchura_producto_rebase*altura_producto_rebase).toFixed(2))
    } else {        
        area_producto = parseFloat((anchura_producto *altura_producto).toFixed(2))
    }
    */

}

function tamaño_maquina(){

    if(tintas_frente > 2 || tintas_vuelta > 2){
        tipo_maquina = "Maquina grande"
    } else {
        tipo_maquina = "Maquina chica"
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

    anchura_producto_original = anchura_producto
    altura_producto_original = altura_producto

    formato()
    area_del_producto()
    productos_por_formato()

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

    formato()
    area_del_producto()
    productos_por_formato()

})

//Altura del producto

producto_altura.addEventListener("input",function(){

    altura_producto = parseFloat(producto_altura.value)
    altura_producto_rebase = altura_producto +.6

    formato()
    area_del_producto()
    productos_por_formato()

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
    anchura_producto = anchura_producto_rebase;
    altura_producto = altura_producto_rebase

    formato()
    area_del_producto()
    productos_por_formato()

})


sin_rebase.addEventListener("click",function(){

    estado_rebase = "Sin rebase"
    anchura_producto = anchura_producto_original
    altura_producto = altura_producto_original

    formato()
    area_del_producto()
    productos_por_formato()

})

///////////////////////////////////

submit.addEventListener("click",productos_por_formato)

function productos_por_formato(){

    var area_orignal = area_producto
    var area = area_producto

    var i = 0

    while(area < array_area_formato[tipo_formato_indice].area){       

        area = area + area_orignal

        i += 1
    
    }
    productos_formato = i

}

//Función formatos que obtengo por pliego

function formato(){

    array_tipo_formato = array_medidas_papel.filter(formato => (formato.anchura >= anchura_producto && formato.altura >= altura_producto) || (formato.anchura >= altura_producto && formato.altura >= anchura_producto) )

    tipo_formato = array_tipo_formato[0].formato
    tipo_formato_indice = array_tipo_formato[0].indice
    formatos_pliego = array_tipo_formato[0].formatos

}

// Función Display Papel

function display_papel(){

    concepto_papel.innerHTML =
    `
    ${papel_producto} ${puntaje_papel}
    `

    precio_unitario_papel.innerHTML =
    `
    $${array_papel_precios[select_papel.selectedIndex-1][select_puntaje.selectedIndex]}
    `

}
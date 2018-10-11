// cambiando clases de un elemento

let x = document.querySelector('.elemento_x');
let y = document.querySelector('.elemento_y');
let z = document.querySelector('.elemento_z');

// classList

// add
// y.classList.add(`chico`)

// remove
// y.classList.remove(`chico`)

// toggle
// y.classList.toggle(`chico`)

// Ejercicio
// Hacer toggle de una clase en los divs cuando
// se le presione clic

/*
function  cambio_x(){
    x.classList.toggle("chico");
}

function  cambio_y(){
    y.classList.toggle("grande");
}

function  cambio_z(){
    z.classList.toggle("chico");
}

x.addEventListener("click",cambio_x)
y.addEventListener("click",cambio_y)
z.addEventListener("click",cambio_z)
*/

// Ejercicio extra

//Si x tiene la clase "chico" agregar el estilo "grande"

/*
function  cambio_x(){
    if(x.classList.contains("chico")){
        x.classList.remove("chico");
        x.classList.add("grande");
    } else {
        if(x.classList.contains("grande")){
            x.classList.remove("grande");
        } else {
            x.classList.add("chico");
        }
    }
}

function  cambio_y(){
    if(y.classList.contains("chico")){
        y.classList.remove("chico");
        y.classList.add("grande");
    } else {
        if(y.classList.contains("grande")){
            y.classList.remove("grande");
        } else {
            y.classList.add("chico");
        }
    }
}

function  cambio_z(){
    if(z.classList.contains("chico")){
        z.classList.remove("chico");
        z.classList.add("grande");
    } else {
        if(z.classList.contains("grande")){
            z.classList.remove("grande");
        } else {
            z.classList.add("chico");
        }
    }
}

x.addEventListener("click",cambio_x)
y.addEventListener("click",cambio_y)
z.addEventListener("click",cambio_z)
*/

//Refactor

function  cambio(event){
    console.log(event)
    if(event.target.classList.contains("chico")){
        event.target.classList.remove("chico");
        event.target.classList.add("grande");
    } else {
        if(event.target.classList.contains("grande")){
            event.target.classList.remove("grande");
        } else {
            event.target.classList.add("chico");
        }
    }
}

x.addEventListener("click",cambio)
y.addEventListener("click",cambio)
z.addEventListener("click",cambio)
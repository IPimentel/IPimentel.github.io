let busqueda = document.querySelector(`.buscador`);
let mi_boton = document.querySelector(`.cta`);

function buscar(){
    window.location.href = `https://www.google.com/search?q=${busqueda.value}`;
}

function detectarEnter(e) {
    if(e.key == `Enter`){
        window.location.href = `https://www.google.com/search?q=${busqueda.value}`;
    }
}

mi_boton.addEventListener("click",buscar)
busqueda.addEventListener("keyup",detectarEnter)
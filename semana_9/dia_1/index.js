let btn_img = document.querySelectorAll(`img`)
let background = document.querySelector(`.background`)
let modal = document.querySelector(`.modal`)
let imagen = document.querySelector(`.imagen`)
let close = document.querySelector(`.close`)


function mensaje(e) {
    console.log(e.target.src)
    background.classList.add(`modal_back`);
    modal.classList.add(`modal_element`);
    imagen.classList.remove(`hide`)
    document.querySelector(`.imagen`).src = e.target.src
    close.classList.remove(`hide`)
}


for(var i = 0; i < btn_img.length; i += 1){
    btn_img[i].addEventListener("click",mensaje)
}

close.addEventListener("click", function() {
    background.classList.remove(`modal_back`);
    modal.classList.remove(`modal_element`);
    imagen.classList.add(`hide`)
    close.classList.add(`hide`)

})
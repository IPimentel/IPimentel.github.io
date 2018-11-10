let btn_leonardo = document.querySelector(`.btn_leonardo`)
let btn_miguel = document.querySelector(`.btn_miguel`)
let btn_rafael = document.querySelector(`.btn_rafael`)
let btn_donatello = document.querySelector(`.btn_donatello`)

let info_leonardo = document.querySelector(`.info_leonardo`)
let info_miguel = document.querySelector(`.info_miguel`)
let info_rafael = document.querySelector(`.info_rafael`)
let info_donatello = document.querySelector(`.info_donatello`)

function cambiar(e) {
    console.log(e.target.className)
    var clase = e.target.className

    info_leonardo.classList.add(`hide`)
    info_miguel.classList.add(`hide`)
    info_rafael.classList.add(`hide`)
    info_donatello.classList.add(`hide`)
    
    if(clase === "btn_leonardo" ){
        info_leonardo.classList.remove(`hide`)
    } else {
        if(clase === "btn_miguel") {
            info_miguel.classList.remove(`hide`)
        } else {
            if(clase === "btn_rafael") {
                info_rafael.classList.remove(`hide`)
            } else {
                info_donatello.classList.remove(`hide`)
            }
        }
    }
}

btn_leonardo.addEventListener("click", cambiar)
btn_miguel.addEventListener("click", cambiar)
btn_rafael.addEventListener("click", cambiar)
btn_donatello.addEventListener("click", cambiar)


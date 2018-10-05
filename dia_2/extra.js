let clave = document.querySelector(`.clave`)
let clave_encriptada = document.querySelector(`.encriptada`)
let mi_boton = document.querySelector(`button`)

function encriptar(){
    let clave_a = clave.value 
    clave_a = clave_a.replace(/e/g,3)
                     .replace(/a/g,4)    
                     .replace(/o/g,0)    
                     .replace(/i/g,1)    
    clave_encriptada.value = clave_a
}

mi_boton.addEventListener("click",encriptar)
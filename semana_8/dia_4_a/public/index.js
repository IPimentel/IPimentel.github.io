var provider = new firebase.auth.GoogleAuthProvider();

let btn_log_in = document.querySelector(`.log_in`)
let btn_log_out = document.querySelector(`.log_out`)
let btn_cambiar_valor = document.querySelector(`.valor`)
let btn_sumar_valor = document.querySelector(`.sumar`)
let btn_restar_valor = document.querySelector(`.restar`)


let cambio_de_usuario = function(usuario) {
    if(usuario) {
        document.querySelector(`.mensaje`).innerHTML = `Hola ${usuario.displayName}`
        document.querySelector(`.correo`).innerHTML = usuario.email
        btn_log_in.classList.add(`hide`);
        btn_log_out.classList.remove(`hide`);
        btn_cambiar_valor.classList.remove(`hide`);
        btn_sumar_valor.classList.remove(`hide`);
        btn_restar_valor.classList.remove(`hide`);
    } else {
        document.querySelector(`.mensaje`).innerHTML = `Por favor inicie sesión`
        document.querySelector(`.correo`).innerHTML = ` `
        btn_log_in.classList.remove(`hide`);
        btn_log_out.classList.add(`hide`);
        btn_cambiar_valor.classList.add(`hide`);
        btn_sumar_valor.classList.add(`hide`);
        btn_restar_valor.classList.add(`hide`);
    }
    console.log(`El usuario cambió...`)
    console.log(usuario)
}

firebase.auth().onAuthStateChanged(cambio_de_usuario)

//Iniciar sesión

let login_exito = function(resultado) {
    console.log(`Login con exito`)
    console.log(resultado)
}

let login_error = function(error) {
    console.log(`Ocurrió un error al iniciar sesión`)
    console.log(error)
}



btn_log_in.addEventListener("click",function(){
    firebase.auth().signInWithPopup(provider)
    .then(login_exito)
    .catch(login_error);
})

btn_log_out.addEventListener("click", function() {
    firebase.auth().signOut()
})

let e = 0

// Database

let db = firebase.database()

let actualizar_contador = function(valor) {
    db.ref(`/contador`).set(valor);
}

let contador_se_actualizo = function(respuesta) {
    let valor = respuesta.val()
    e = valor
    document.querySelector(`.contador`).innerHTML = `Contador: ${valor}`
}

btn_cambiar_valor.addEventListener("click",function() {
    actualizar_contador(0)
})

btn_sumar_valor.addEventListener("click", function() {
    let i = (e += 1)
    actualizar_contador(i)
})

btn_restar_valor.addEventListener("click", function() {
    let i = (e -= 1)
    actualizar_contador(i)
})

db.ref(`/contador`).on(`value`,contador_se_actualizo)





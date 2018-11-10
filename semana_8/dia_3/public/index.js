var provider = new firebase.auth.GoogleAuthProvider();

let btn_log_in = document.querySelector(`.log_in`)
let btn_log_out = document.querySelector(`.log_out`)

let cambio_de_usuario = function(usuario) {
    if(usuario) {
        document.querySelector(`.mensaje`).innerHTML = `Hola ${usuario.displayName}`
        document.querySelector(`.correo`).innerHTML = usuario.email
    } else {
        document.querySelector(`.mensaje`).innerHTML = `Por favor inicie sesión`
        document.querySelector(`.correo`).innerHTML = ` `
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


// Database

let db = firebase.database()

let actualizar_contador = function(valor) {
    db.ref(`/contador`).set(valor);
}


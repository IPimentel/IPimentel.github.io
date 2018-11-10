
// Flow de authentication
let provider = new firebase.auth.GoogleAuthProvider()
let cambioDeUsuario = function(usuario) {
  // Si no hay usuario solicita login
  if(!usuario) {
    firebase.auth().signInWithPopup(provider)
  }
}
firebase.auth().onAuthStateChanged(cambioDeUsuario)


// Descarga de archivos de firebase storage
// https://firebase.google.com/docs/storage/web/download-files

// Subida de archivos de firebase storage
// https://firebase.google.com/docs/storage/web/upload-files


// Sacamos una referencia al storage
let storage = firebase.storage().ref()


// Creamos una funcion que cambie la imagen
// del elemento, el parametro es la url

/*
let mostrar = function(url) {
  let imagen = document.querySelectorAll('img')

  for(var i = 0; i < imagen.length; i += 1){
    imagen[i].src = url 
  }
}
*/

let mostrar_uno = function(url) {
  let imagen_uno = document.querySelector('.img_uno')
  imagen_uno.src = url 
}

let mostrar_dos = function(url) {
  let imagen_dos = document.querySelector('.img_dos')
  imagen_dos.src = url 
}

let mostrar_tres = function(url) {
  let imagen_tres = document.querySelector('.img_tres')
  imagen_tres.src = url 
}

// Esta función le solicitará a firebase
// el url de la imagen

let solicitarLink_uno = function() {
  storage.child('/test.jpg')
  .getDownloadURL()
  .then(mostrar_uno)
}

let solicitarLink_dos = function() {
  storage.child('/test_dos.jpg')
  .getDownloadURL()
  .then(mostrar_dos)
}

let solicitarLink_tres = function() {
  storage.child('/test_tres.jpg')
  .getDownloadURL()
  .then(mostrar_tres)
}


// Llamamos la función para que cargue la
// imagen cuando cargue la página

solicitarLink_uno()

solicitarLink_dos()

solicitarLink_tres()


// Finalmente manejamos el input para subir
// la imagen que seleccionemos

let input_uno = document.querySelector('.input_uno')
document.querySelector('.guardar_uno').addEventListener('click', function() {
  if(input_uno.files.length) {
    storage.child('test.jpg')
      .put(input_uno.files[0])
      .then(solicitarLink_uno)
  }
})

let input_dos = document.querySelector('.input_dos')
document.querySelector('.guardar_dos').addEventListener('click', function() {
  if(input_dos.files.length) {
    storage.child('test_dos.jpg')
      .put(input_dos.files[0])
      .then(solicitarLink_dos)
  }
})

let input_tres = document.querySelector('.input_tres')
document.querySelector('.guardar_tres').addEventListener('click', function() {
  if(input_tres.files.length) {
    storage.child('test_tres.jpg')
      .put(input_tres.files[0])
      .then(solicitarLink_tres)
  }
})

let input = document.querySelectorAll('input')
document.querySelector('.guardar_uno').addEventListener('click', function() {
  if(input_uno.files.length) {
    storage.child('test.jpg')
      .put(input_uno.files[0])
      .then(solicitarLink_uno)
  }
})
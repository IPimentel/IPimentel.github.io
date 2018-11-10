// https://firebase.google.com/docs/database/web/lists-of-data

// Referencia a la base de datos
var database = firebase.database()

// Con esta función recibiremos los contactos
// y los mostraremos con un template
let agregarContactos = function(respuesta) {
  let contacto = respuesta.val()
  let template = `
  <div class="contacto" id="${respuesta.key}">
    <div class="nombre">${contacto.nombre}</div>
    <div class="telefono">${contacto.telefono}</div>
    <div class="nacionalidad">${contacto.nacionalidad}</div>
    <div class="eliminar">X</div>
  </div>
  `

  // Ya que tenemos el template se lo agregamos
  // al contenedor de contactos
  document
    .querySelector('.contactos')
    .innerHTML += template
}


// Ponemos un evento para que cuando
// se agregue un usuario se llame
// la función de agregarContactos
database.ref('/contactos/')
  .on('child_added', agregarContactos)


// Ahora manejaremos el formulario para agregar
// contactos, primero guardamos referencias a
// los elementos:
let botonAgregar = document.querySelector('.agregar')
let nombre = document.querySelector('.nombreFormulario')
let telefono = document.querySelector('.telefonoFormulario')
let nacionalidad = document.querySelector('.nacionalidadFormulario')

// Luego agregamos un evento click al boton de
// agregar
botonAgregar.addEventListener('click', function() {
  // Formamos un objeto con los datos dentro de 
  // los inputs
  let nuevoContacto = {}
  nuevoContacto.nombre = nombre.value
  nuevoContacto.telefono = telefono.value
  nuevoContacto.nacionalidad = nacionalidad.value

  // Para añadir un objeto a una lista en firebase
  // solamente necesitamos llamar la función push
  // dentro de la referencia a la llave, le 
  // pasamos el objeto directamente
  database.ref('/contactos/').push(nuevoContacto)
})


// Finalmente manejaremos la funcionalidad de
// eliminar contactos, aprovecharemos 

// Agregamos un evento al contenedor de contactos
// que verificará si el target fue el botón de
// eliminar, si lo fue obtendrá el id del contacto
// y le enviará la petición a firebase para eliminarlo
let contactos = document.querySelector('.contactos')
contactos.addEventListener('click', function(event) {
  if(event.target.classList.contains('eliminar')) {
    let id = event.target.parentElement.id
    database.ref('/contactos/' + id).remove()
  }
});

// Ya que firebase elimine el objeto en la nube
// nos enviará una notificación, para llamar una
// función cuando esto pase escuchamos el evento
// child_removed en la referencía de contactos
// y en la función eliminamos el elemento que tenga
// el id que firebase nos diga
let eliminarContacto = function(respuesta) {
  let id = respuesta.key
  document.querySelector('#' + id).remove();
}
database.ref('/contactos/')
  .on('child_removed', eliminarContacto)
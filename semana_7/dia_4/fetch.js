/*
  Fetch te permite solicitar recursos por medio
  de la red, generalmente hacia otros servidores

  Se utiliza el protocolo HTTP

  A traves de una URL se obtendrá una respuesta

  la respuesta puede ser un objeto de javascript
  o puede ser texto plano

  https://rickandmortyapi.com/

*/

// Fetch aplicado al API de rick and morty

let prev = document.querySelector(`.prev`)
let next = document.querySelector(`.next`)

var index_next = null
var index_prev = null


let cargar = function(url) {
  fetch(url)
  .then(res => res.json())
  .then(respuesta)
}

let respuesta = function(res) {
  index_next = res.info.next
  index_prev = res.info.prev
  console.log(index_next)
  console.log(index_prev)
  console.log(res);
  console.log(res.results.length);

  let n = res.results.length

  for(var i = 0; i < n; i += 1) {
    console.log(res.results[i].name)
    document.querySelector(`.contenedor`).innerHTML +=
    `
    <div class="ficha">
    <div class="contenedor_foto">
      <div>${res.results[i].name}</div>
      <img class="foto_ficha" src="${res.results[i].image}">
    </div>
    <div class="contenedor_info">
      <div class="info">
        <div class="status">
          <h1>Status</h1>
          <p>${res.results[i].status}</p>    
        </div>
        <div class="especie">
          <h1>Species</h1>
          <p>${res.results[i].species}</p>    
        </div>
        <div class="genero">
          <h1>Gender</h1>
          <p>${res.results[i].gender}</p>  
        </div>
        <div class="origen">
          <h1>Origin</h1>
          <p>${res.results[0].origin.name}</p>  
        </div>
      </div>
    </div>
  </div>
    `
  }

}

cargar(`https://rickandmortyapi.com/api/character/?page=1`)

next.addEventListener("click",function(){
  if(index_next){
    document.querySelector(`.contenedor`).innerHTML =
    `
  
    `
    cargar(index_next)
  }
})

prev.addEventListener("click", function(){
  if(index_prev){
    document.querySelector(`.contenedor`).innerHTML =
    `
  
    `
    cargar(index_prev)
  }
})

///////

/*
let respuesta = function(res) {
  console.log(res);
  document.body.innerHTML +=
    `
      <div>
        <img class="foto" src="${res.results[0].image}">
        <div>${res.results[0].name}</div>
        <div>${res.results[0].species}</div>
      </div>
    `
}

fetch("https://rickandmortyapi.com/api/character/")
  .then(res => res.json())
  .then(respuesta)
*/

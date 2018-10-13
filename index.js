// Creación de portafolio

/*
- Crear los archivos en su carpeta
  principal

- Debe tener al menos una imagen

- Utilizar css para dar estilos

- Incluir un font de Google fonts

- Poner una lista con ul de links 
  hacia sus ejercicios pasados

- Crear repositorio en su cuenta de
  github

- Dar push a su portafolio
*/

let semana_1 = document.querySelector(`#semana_1`)

function mostrar(){
    semana_1.classList.add("mostrar");
}

semana_1.addEventListener("click",mostrar)
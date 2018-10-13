// Repaso de días anteriores

// Referencias a documentos
let div1 = document.querySelector('.miDiv1');
let div2 = document.querySelector('.miDiv2');
let div3 = document.querySelector('.miDiv3');

// Funciones
// Con nombre directo
function unaFuncion() {
    window.alert('Una función!');
}

// Asignadas a variables
let miFuncion = function() {
    window.alert('Mi función');
}

// Eventos (addEventListener)
div1.addEventListener('click', unaFuncion);
div2.addEventListener('click', miFuncion);

// Funciones anonimas
div3.addEventListener('click', function() {
    window.alert('Función anonima');
});
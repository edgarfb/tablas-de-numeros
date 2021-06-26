console.log('hi there!');
let grillaBox = document.querySelector('.grilla__box');
// Este es el conteneor de cada numero
let numBox = document.createElement('div');
let numCantidad = 100;

let seleccion = null;
let numFollower






// crear un contenedor para el numero con su correspondiente contenido.
function crearNumeros() {
    for (let i = 1; i <= numCantidad; i++) {
        let el = document.createElement('div');
        let content = document.createTextNode(i);
        el.classList.add('numero');
        el.appendChild(content);
        grillaBox.appendChild(el);
    }
}

grillaBox.addEventListener('click', seleccionarNumero);
grillaBox.addEventListener('click', contar);
// grillaBox.addEventListener('click', quitarSeleccionAdelante);


// selecciona el numero principal y elemina el eventListener para que sea una unica seleccion
function seleccionarNumero(event) {
    let target = event.target;
    target.classList.add('seleccion');
    // Selecciona el numero principal y lo asigna a la variable 'seleccion'
    seleccion = +target.innerHTML; 
    console.log(seleccion);
    grillaBox.removeEventListener('click', seleccionarNumero);
}

function contar(event) {
    event.stopPropagation();
    console.log(seleccion);
    let target = event.target;
    let targetNum = +target.innerHTML;
    if(targetNum > seleccion) {
      // comprobar si la clase existe
      // si--- remover
      // --- agregar
        
        target.classList.add('contarAdelante');
        
    }
    else {
        // comprobar si la clase existe
      // si--- remover
      // --- agregar
        target.classList.add('contarAtras');
    }
    
    
}

// agregar la funcion de borrar la ultima seleccion
// function quitarSeleccionAdelante(event) {
//     let clase = Array.from(event.target.classList);
//     console.log(event);

// }


// funcion principal que ejecuta el programa
function init() {
    crearNumeros();
}




init();

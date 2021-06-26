
let tabla = document.querySelector('.tabla');
// Este es el conteneor de cada numero
let numBox = document.createElement('div');
let tamanioGrilla = 100;
let reiniciarBtn = document.querySelector('.reiniciar__btn');

let seleccion = null;
let numeroSeguiente = null;
let numeroAnterior = null;






// crear un contenedor para el numero con su correspondiente contenido.
function crearNumeros() {
    for (let i = 1; i <= tamanioGrilla; i++) {
        let el = document.createElement('div');
        let content = document.createTextNode(i);
        el.classList.add('numero');
        el.appendChild(content);
        tabla.appendChild(el);
    }
}

tabla.addEventListener('click', seleccionarNumero);
tabla.addEventListener('click', contar);
reiniciarBtn.addEventListener('click', reiniciar);
// tabla.addEventListener('click', quitarSeleccionAdelante);


// selecciona el numero principal y elemina el eventListener para que sea una unica seleccion
function seleccionarNumero(event) {
    let target = event.target;
    target.classList.add('seleccion');
    // Selecciona el numero principal y lo asigna a la variable 'seleccion'
    seleccion = +target.innerHTML; 
    numeroSeguiente = seleccion;
    numeroAnterior = seleccion;
    tabla.removeEventListener('click', seleccionarNumero);
}


// Realiza el conteo de los numeros y agrega un estilo.
function contar(event) {
    comprobarSiguiente(event);
    comprobarAnterior(event);
    event.stopPropagation();
    let target = event.target;
    let targetNum = +target.innerHTML;
    let clase = Array.from(target.classList);
    if(targetNum > seleccion && targetNum < numeroSeguiente) {
      if(clase.includes('contarAdelante')) {
        target.classList.remove('contarAdelante');
      } 
      else {
        target.classList.add('contarAdelante');
      }
    }
    else if(targetNum < seleccion && targetNum > numeroAnterior) {
      if(clase.includes('contarAtras')) {
        target.classList.remove('contarAtras');
      } 
      else {
        target.classList.add('contarAtras');
      }
    }
}

function comprobarSiguiente(event) {
  let num = event.target.innerHTML;
  if(seleccion === null) {
    numeroSeguiente = seleccion;
  } else if(+num === numeroSeguiente){
    numeroSeguiente += 1;
  }
  return numeroSeguiente;
}

function comprobarAnterior(event) {
  let num = event.target.innerHTML;
  if(seleccion === null) {
    numeroAnterior = seleccion;
  } else if(+num === numeroAnterior){
    numeroAnterior -= 1;
  }
  return numeroAnterior;
}


function reiniciar() {
  location.reload();
}



// funcion principal que ejecuta el programa
function init() {
    crearNumeros();
}




init();

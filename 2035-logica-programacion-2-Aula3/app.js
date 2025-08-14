let listaNumeroSorteados = [];
let numeroMaximo = 10;
let numeroSecreto;
let intentos;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    if (listaNumeroSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
        return null;
    }
    
    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (listaNumeroSorteados.includes(numeroGenerado));

    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log('Número secreto:', numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


/* // 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
    console.log(lenguajesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguagesInversamente() {
  for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguajesDeProgramacion[i]);
  }
}
mostrarLenguagesInversamente();

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioElementosLista(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i ++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = promedioElementosLista(numeros);
console.log('Promedio:', media);

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.}
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros1 = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros1);

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

let suma = calcularSuma(numeros);
console.log('Suma:', suma);

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++){
        if(lista[i] === elemento) {
            return i;
        }
    }
    return -1; 
}

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
const resultado1 = cuadradoLista(lista);
console.log(resultado1);  */
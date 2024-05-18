import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


//Esto es una prueba para verificar si funciona addEventListener cuando se vincula con querySelector
/* let prueba = document.querySelector('[name="user-input"]');
prueba.addEventListener("click", pruebaDos);

function pruebaDos(){
    console.log('hola');
}; */


//Esto es una prueba para verificar si funciona el evento "input", me ayudé de console.log
let palabras = document.querySelector('[name="user-input"]');
palabras.addEventListener("input",contarPalabras);

function contarPalabras(){
    console.log('hola');
};
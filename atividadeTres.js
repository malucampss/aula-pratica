/*
nome: maria luisa campos
3-Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT, Segue a formula (°C × 9/5) + 32.
*/
var teclado = require("prompt-sync")();
var celsius = parseFloat(teclado("Digite a temperatura em celsius: "));
var fahrenheit = (celsius * 9 / 5) + 32;
console.log("Valor da convers\u00E3o \u00E9 " + fahrenheit);

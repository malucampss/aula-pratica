/*
4- Converta a temperatura x (entrada manual) FAHRENHEIT
para CELSIUS, Segue a formula 5/9 (°F -32).

Nome:Maria Luisa Campos
*/

let teclado = require (`prompt-sync`)();

let fahrenheit: number = parseFloat(teclado(`digite a temperatura em °F:`));

let celsius: number = (5/9) * (fahrenheit - 32);

console.log(`O valor da conversão é ${celsius}`);

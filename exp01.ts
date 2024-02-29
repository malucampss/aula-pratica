console.clear();
const teclado = require(`prompt-sync`)();

let ola: string = teclado(`digite uma congratulacao:`);
let nome: string = teclado(`digite seu nome:`);
let passaTempo: string = teclado(`digite um passatempo`);
let diaAniversario: number = teclado(`digite o dia do aniversario`);
let mesAniversario: string = teclado(`digite o mes de aniversario`);
let anoAniversario: number = teclado(`digite o ano de aniversario`);

console.clear();
console.log(`${ola}`);
console.log(`meu nome é ${nome}, nascido no dia ${diaAniversario},`);
console.log(`no mes ${mesAniversario} no ano de ${anoAniversario},`);
console.log(`meu atual passatempo é ${passaTempo}`);






const teclado = require (`prompt-sync`)();

let idade: number = 0;
let salario: number = 0;
let totPessoasNaCondicao: number = 0;
let pessoasContabilizadas: number = 0;

while (pessoasContabilizadas <=4){

idade = parseInt(teclado(`digite a idade do funcionario:`));
salario= parseFloat(teclado(`digite o salario do funcionario:`)); 


if (idade < 30 && salario > 3000){
   totPessoasNaCondicao++;
   pessoasContabilizadas++;
}
    else{
        pessoasContabilizadas++;
    }
}
    console.log(`O total de pessoas que atende a condição é ${totPessoasNaCondicao}`);

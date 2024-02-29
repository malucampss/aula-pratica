var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totPessoasNaCondicao = 0;
var pessoasContabilizadas = 0;
while (pessoasContabilizadas <= 4) {
    idade = parseInt(teclado("digite a idade do funcionario:"));
    salario = parseFloat(teclado("digite o salario do funcionario:"));
    if (idade < 30 && salario > 3000) {
        totPessoasNaCondicao++;
        pessoasContabilizadas++;
    }
    else {
        pessoasContabilizadas++;
    }
}
console.log("O total de pessoas que atende a condi\u00E7\u00E3o \u00E9 " + totPessoasNaCondicao);

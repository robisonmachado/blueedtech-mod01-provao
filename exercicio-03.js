const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 03");
console.log("aluno: Robison Pereira Machado");

console.log("\n\nPOR FAVOR DIGITE SEU SALÁRIO ATUAL [atenção, use  ponto (.) ao invés de vírgula (,) para os centavos]: ")
const salarioAntigo = +prompt();
let novoSalario;
let reajusteGanho;
let percentualGanho;

if(salarioAntigo <= 400){
    percentualGanho = 15;
}else if(salarioAntigo <= 800 && salarioAntigo >= 400.01){
    percentualGanho = 12;
}else if(salarioAntigo <= 1200 && salarioAntigo >= 800.01){
    percentualGanho = 10;
}else if(salarioAntigo <= 2000 && salarioAntigo >= 1200.01){
    percentualGanho = 7;
}else if(salarioAntigo > 2000){
    percentualGanho = 4;
}

reajusteGanho = salarioAntigo * (percentualGanho/100);
novoSalario = salarioAntigo+reajusteGanho;

console.log(`\n\nNovo salário: ${novoSalario.toFixed(2)}\nReajuste ganho: ${reajusteGanho.toFixed(2)}\nEm percentual: ${percentualGanho}%`);

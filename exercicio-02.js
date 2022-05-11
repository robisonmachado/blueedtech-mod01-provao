const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 02");
console.log("aluno: Robison Pereira Machado");

console.log("\n\nDIGITE SUA IDADE EM DIAS: ")
let diasDeIdade = +prompt();
diasDeIdade = diasDeIdade;

let anos = Number.parseInt(diasDeIdade/365);
let meses = 0;
let dias = 0;
let resto = diasDeIdade - (anos*365)

if(resto != 0){
    meses = Number.parseInt(resto/30);
    resto = resto - (meses*30);
}

if(resto != 0){
    dias = resto;
}


console.log(`\n\n${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)\n`);

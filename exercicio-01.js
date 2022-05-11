const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 01");
console.log("aluno: Robison Pereira Machado");

console.log("\n\nDIGITE A HORA INICIAL: ")
const horaInicial = +prompt();

console.log("\n\nDIGITE A HORA FINAL: ")
const horaFinal = +prompt();

let duracao;

if(horaInicial === horaFinal){
    duracao = 24;
}else if(horaFinal > horaInicial){
    duracao = horaFinal - horaInicial;
}else if(horaFinal < horaInicial){
    duracao = 24 + (horaFinal - horaInicial);
}


console.log(`\n\nO JOGO DUROU ${duracao} HORA(S)`);
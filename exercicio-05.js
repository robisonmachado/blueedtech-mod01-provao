const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 05");
console.log("aluno: Robison Pereira Machado");

console.log("\n\nDigite um número inteiro: ")
const numeroInformado = +prompt();

let primo = false;

let contaDivisoes = 2;

if(numeroInformado < 2) contaDivisoes = 1;

for (let index = numeroInformado-1; index > 1; index--) {
    if(numeroInformado === 2) break;

    if(numeroInformado%2 === 0){
        contaDivisoes++;
        break;
    }

    if(numeroInformado%index === 0) {
        contaDivisoes++;
    }
    
    if(contaDivisoes >= 3) break;
}

if(contaDivisoes === 2 ) primo=true;

console.log(`\n\nDIVISÕES: ${contaDivisoes} \n`);

if(primo){
    console.log(`\n\n${numeroInformado} eh primo\n`);
}else{
    console.log(`\n\n${numeroInformado} nao eh primo\n`);
}
const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 06");
console.log("aluno: Robison Pereira Machado");

console.log("\n\nDigite o número inteiro de linhas a ser exibido: ")
const numeroInformado = Number.parseInt(prompt());

let numero = 1;
for (let index = 0; index < numeroInformado; index++) {
    
    let saida = [];
    for (let indexInterno = 0; indexInterno < 4; indexInterno++) {
        if(numero%4 === 0) saida.push("PUM");
        else saida.push(numero);
        numero++;
    }

    console.log(saida.join(" "));
    
}

console.log("\n\n");

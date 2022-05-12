const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 07");
console.log("aluno: Robison Pereira Machado");

console.log("\n\nDigite a quantidade de números que você irá informar: ")
const quantidade = Number.parseInt(prompt());
let dentro = 0;
let fora = 0;

let numerosInformados = [];
for (let index = 0; index < quantidade; index++) {
    console.log(`\n${index+1}) Informe o número: `);
    numerosInformados[index] = Number.parseInt(prompt());
}

numerosInformados.forEach(numeroInformado => {
    if(numeroInformado >=10 && numeroInformado <=20) dentro++;
    else fora++;
});

console.log(`\nRESULTADO:\n${dentro} in\n${fora} out`);

const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 09");
console.log("aluno: Robison Pereira Machado");

vetorNumeros = [];
let totalNumeros = 4;
for (let index = 0; index < totalNumeros; index++) {
    
    console.log(`\nobtendo o ${index+1}º de ${totalNumeros} números\nDigite um número: `)
    vetorNumeros[index] = +prompt();    
}

console.log("\n\nRESULTADO:\n");
vetorNumeros.forEach( (numero, index) => {
    if(numero <= 10) console.log(`A[${index}] = ${numero.toFixed(1)}`);
});

console.log("\n\n");
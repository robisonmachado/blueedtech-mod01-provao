const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 10");
console.log("aluno: Robison Pereira Machado");

console.log(`\nQual o tamanho do vetor que você quer informar`)
const totalNumeros = Number.parseInt(prompt());  

vetorNumeros = [];

for (let index = 0; index < totalNumeros; index++) {
    
    console.log(`\nobtendo o ${index+1}º de ${totalNumeros} números\nDigite um número: `)
    vetorNumeros[index] = +prompt();    
}

let menorNumero = undefined;
let posicaoMenorNumero = undefined;

for(let index = 0; index < vetorNumeros.length; index++) {
    if(index == 0){
        menorNumero = vetorNumeros[index];
        posicaoMenorNumero = index;
        continue;
    }

    if(vetorNumeros[index] < menorNumero){
        menorNumero = vetorNumeros[index];
        posicaoMenorNumero = index;
    }
}

console.log(`\n\nResultado\n\nMenor valor: ${menorNumero}\nPosição: ${posicaoMenorNumero}\n\n`);
const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 08");
console.log("aluno: Robison Pereira Machado");

console.log("\n\nDigite o primeiro número: ")
const primeiroNumero = Number.parseInt(prompt());

console.log("\n\nDigite o segundo número: ")
const segundoNumero = Number.parseInt(prompt());

let maiorNumero = primeiroNumero;
let menorNumero = segundoNumero;

if(primeiroNumero < segundoNumero){
    maiorNumero = segundoNumero;
    menorNumero = primeiroNumero;
}

let soma = 0;
for (let index = menorNumero+1; index <= maiorNumero-1; index++){
    console.log("numero: ", index, " <> resto: ", index%2);
    if(index%2 == 1 || index%2 == -1) soma= soma+index; 
    console.log("soma: ", soma, "\n");    
}

console.log(`\n\nA soma dos números ímpares do intervalo entre ${menorNumero} a ${maiorNumero} é: ${soma}\n\n`);



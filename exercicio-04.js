const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 04");
console.log("aluno: Robison Pereira Machado");


console.log("\n\nDigite quantos casos de teste você gostaria de realizar: ")
const totalCasosDeTeste = Number.parseInt(prompt());

for (let index = 0; index < totalCasosDeTeste; index++) {
    console.log("\n=====================================================");
    console.log(`\t\tCASO DE TESTE ${index+1}`);
    console.log("=====================================================");

    console.log("\n\nInforme a população da cidade A: ")
    const populacaoCidadeA = Number.parseInt(prompt());

    console.log("\n\nInforme a população da cidade B: ")
    const populacaoCidadeB = Number.parseInt(prompt());

    console.log("\n\nInforme o percentual de crescimento anual da população da cidade A: ")
    const percentualCrescimentoCidadeA = Number.parseFloat(prompt()).toFixed(1);

    console.log("\n\nInforme o percentual de crescimento anual da população da cidade B: ")
    const percentualCrescimentoCidadeB = Number.parseFloat(prompt()).toFixed(1);

    let totalAnos = 0;
    let maximoAnos = 100;
    let excedidoMaximoAnos = false;
    
    let novaPopulacaoCidadeA = populacaoCidadeA;
    let novaPopulacaoCidadeB = populacaoCidadeB;

    for (let index = 0; index < maximoAnos; index++) {
        novaPopulacaoCidadeA = novaPopulacaoCidadeA + Number.parseInt((novaPopulacaoCidadeA * (percentualCrescimentoCidadeA/100) ));
        novaPopulacaoCidadeB = novaPopulacaoCidadeB + Number.parseInt((novaPopulacaoCidadeB * (percentualCrescimentoCidadeB/100) ));
        totalAnos++;

        if(novaPopulacaoCidadeA > novaPopulacaoCidadeB) break;
        if(totalAnos == 100 && novaPopulacaoCidadeA < novaPopulacaoCidadeB) excedidoMaximoAnos = true;
    }

    if(!excedidoMaximoAnos){
        console.log(`\n\nRESULTADO\n${totalAnos} anos.\n\n`);
    }else{
        console.log(`\n\nRESULTADO\nMais de 1 século\n\n`);
    }

    
}

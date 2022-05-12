const prompt = require('prompt-sync')();

console.log("PROVÃO BLUEEDTECH - CLASSE 16 - MÓDULO 1 - EXERCÍCIO 04");
console.log("aluno: Robison Pereira Machado");


console.log("\n\nDigite quantos casos de teste você gostaria de realizar: ")
const totalCasosDeTeste = Number.parseInt(prompt());

for (let index = 0; index < totalCasosDeTeste; index++) {
    console.log("\n\nInforme a população da cidade A: ")
    const populacaoCidadeA = Number.parseInt(prompt());

    console.log("\n\nInforme a população da cidade B: ")
    const populacaoCidadeB = Number.parseInt(prompt());

    console.log("\n\nInforme o percentual de crescimento anual da população da cidade A: ")
    const percentualCrescimentoCidadeA = Number.parseFloat(prompt());

    console.log("\n\nInforme o percentual de crescimento anual da população da cidade B: ")
    const percentualCrescimentoCidadeB = Number.parseFloat(prompt());
}
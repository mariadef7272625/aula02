//9. Faça um programa que leia um número e verifique se ele está entre 1 e 100.
var numero = 45; 

// Primeiro verifica se é maior ou igual a 1
if (numero >= 1) {
    // Se for, verifica se também é menor ou igual a 100
    if (numero <= 100) {
        // LÓGICA: Este console.log só executa se o número passou nos DOIS testes.
        // Significa que ele é maior ou igual a 1 E menor ou igual a 100 ao mesmo tempo.
        console.log("O número " + numero + " está entre 1 e 100.");
    } else {
        // LÓGICA: Este console.log roda se o número passou no primeiro teste, mas falhou no segundo.
        // Significa que o número é maior que 1, porém passou do limite máximo (ex: 150).
        console.log("O número " + numero + " NÃO está entre 1 e 100.");
    }
} else {
    // LÓGICA: Este console.log roda se o número falhou logo no primeiro teste.
    // Significa que o número é menor do que 1 (ex: 0 ou números negativos).
    console.log("O número " + numero + " NÃO está entre 1 e 100.");
}
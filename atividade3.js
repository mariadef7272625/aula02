//3. Escreva um programa que leia o salário de um funcionário e aplique um aumento de acordo com a seguinte regra: salários menores que R$1000 recebem 20% de aumento, entre R$1000 e R$2000 recebem 15%, e acima de R$2000 recebem 10%.
// Define o salário inicial do funcionário
var salario = 1500;
var aumento;
var novoSalario;
// Aplica as regras de aumento usando if e else
if (salario < 1000) {
    aumento = salario * 0.20; // 20% de aumento
} else if (salario <= 2000) {
    aumento = salario * 0.15; // 15% de aumento
} else {
    aumento = salario * 0.10; // 10% de aumento
} // Calcula o novo salário somando o aumento
    novoSalario = salario + aumento;
// Exibe os resultados no console
console.log("Salário antigo: R$ " + salario);
console.log("Valor do aumento: R$ " + aumento);
console.log("Novo salário: R$ " + novoSalario);
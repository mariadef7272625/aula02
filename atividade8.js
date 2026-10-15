//8. Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.
// Defina os números e a operação aqui
var num1 = 15;
var num2 = 3;
var operacao = ""; // O operador == vai comparar esta variável com as opções abaixo
var resultado;
// O == compara se o valor de 'operacao' é igual ao sinal de texto correspondente
if (operacao == "+") {
    resultado = num1 + num2;
} else if (operacao == "-") {
    resultado = num1 - num2;
} else if (operacao == "") {
    resultado = num1 * num2;
} else if (operacao == "/") {
    resultado = num1 / num2;
} else {
    resultado = "Operação inválida!";
}
console.log("Resultado: " + resultado);
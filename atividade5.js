//5. Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.
// 1. Definição das variáveis na memória
var numero1 = 15;
var numero2 = 3;
var operacao = "adição"; // Opções: adição, subtração, multiplicação, divisão var resultado;
// 2. Testes condicionais sequenciais
if (operacao == "adição") {
    resultado = numero1 + numero2;
} else if
(operacao == "subtração") {
    resultado = numero1 - numero2;
} else if
(operacao == "multiplicação") {
    resultado = numero1 * numero2;
} else if (operacao == "divisão") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operação não reconhecida";
}
// 3. Concatenação: junta o texto com o valor da variável 'resultado'
console.log("Resultado final: " + resultado);
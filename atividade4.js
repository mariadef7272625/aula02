//4. Escreva um programa que converta uma temperatura de Celsius para Fahrenheit e vice-versa.
// 1. Escolha o tipo de conversão: "C" (Celsius para Fahrenheit) ou "F" (Fahrenheit para Celsius)
var tipo = "C"; 

// 2. Defina o valor numérico da temperatura
var temperatura = 30; 

// 3. Variável para guardar o resultado da conversão
var resultado;


/*
   POR QUE USAR O "===" EM VEZ DE "=="?
   - O operador === é chamado de "Igualdade Estrita" (ou valor e tipo iguais).
   - Ele compara duas coisas e só dá verdadeiro se elas forem IGUAIS e do MESMO TIPO de dado.
   - Exemplo: 5 === "5" é FALSO, porque um é número e o outro é texto.
   - Se usássemos apenas ==, o JavaScript tentaria converter os tipos por baixo dos panos (5 == "5" daria VERDADEIRO).
   - Usar === é uma boa prática que evita bugs e deixa o código mais seguro.
*/
if (tipo === "C") {
    /* 
       A CIÊNCIA POR TRÁS DA CONVERSÃO (C para F):
       - A escala Celsius divide o intervalo entre o congelamento (0°C) e a ebulição da água (100°C) em 100 partes.
       - A escala Fahrenheit divide esse mesmo intervalo (32°F a 212°F) em 180 partes.
       - A proporção entre as duas escalas é de 180/100, o que simplifica para 9/5 (ou 1.8). Ou seja, cada 1°C equivale a 1.8°F.
       - Como o zero da escala Fahrenheit começa 32 graus acima do zero Celsius, multiplicamos por 9/5 e somamos 32 no final.
    */
    resultado = (temperatura * 9 / 5) + 32;
    console.log(temperatura + "°C é igual a " + resultado + "°F");
} else {
    /* 
       A CIÊNCIA POR TRÁS DA CONVERSÃO (F para C):
       - Aqui fazemos o caminho matemático inverso.
       - Primeiro, subtraímos os 32 graus de diferença para alinhar os pontos de congelamento de ambas as escalas no mesmo nível.
       - Depois, multiplicamos pela proporção inversa (5/9) para reduzir a escala de 180 partes de volta para a escala de 100 partes do Celsius.
    */
    resultado = (temperatura - 32) * 5 / 9;
    console.log(temperatura + "°F é igual a " + resultado + "°C");
}
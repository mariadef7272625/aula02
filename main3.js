// Escreva um programa que converta uma temperatura de Celsius para Fahrenheit
// e vice-versa
// F = (°C x 1,8) + 32
// + (°F - 32) x 5/9

var temperatura = 31
var tipoTemperatura = "C"
var temperaturaConvertida = 0

if (tipoTemperatura == "C") {
    console.log("Você escolheu Celsius!")
    temperaturaConvertida = ((temperatura * 1.8) + 32)
} else {
    console.log("Você escolheu Fahrenheit!")
    temperaturaConvertida = ((temperatura - 32) * (5 / 9))
}


console.log("O valor convertido é: " + temperaturaConvertida)
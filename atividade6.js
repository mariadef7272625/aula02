//6. Faça um programa que leia o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado.
// Definindo os valores direto no código (forma mais direta)
var nome = "Carlos";
var nota1 = 8;
var nota2 = 6;
var nota3 = 7;

// Calculando a média
var media = (nota1 + nota2 + nota3) / 3;

// Verificando a situação
if (media >= 7) {
    console.log(nome + " está aprovado.");
} else {
    console.log(nome + " está reprovado.");
}
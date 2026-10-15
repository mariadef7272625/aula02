//10. Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.
// PASSO 1: Definimos a data que queremos testar
var dia = 14;
var mes = 10;
var ano = 2026;

// PASSO 2: Criamos uma regra padrão. 
// Como a maioria dos meses tem 31 dias, começamos dizendo que o máximo é 31.
var limiteDeDias = 31;

// PASSO 3: Se o mês for Abril(4), Junho(6), Setembro(9) ou Novembro(11)...
// Mudamos o limite para 30 dias.
if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    limiteDeDias = 30;
} 

// PASSO 4: Mas se o mês for Fevereiro(2), precisamos fazer uma checagem especial.
else if (mes == 2) {
    /* 
       EXPLICAÇÃO DETALHADA DO PASSO 4:
       Fevereiro é o único mês que muda de tamanho (28 ou 29 dias) dependendo do ano.
       Para descobrir se o ano é bissexto, usamos o símbolo "%" (Módulo), que descobre o RESTO de uma divisão.
       Se o resto for 0, significa que o número é divisível perfeitamente.

       A regra universal do ano bissexto diz que o ano deve cumprir uma destas duas condições:
       
       Condição A: Ser divisível por 4 (ano % 4 == 0) E NÃO ser divisível por 100 (ano % 100 != 0).
       OU (||)
       Condição B: Ser divisível por 400 (ano % 400 == 0). -> (Isso corrige os anos que terminam em "00")
    */
    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        limiteDeDias = 29; // Se passou no teste acima: Ano bissexto = Fevereiro tem 29 dias
    } else {
        limiteDeDias = 28; // Se falhou no teste acima: Ano comum = Fevereiro tem 28 dias
    }
}

// PASSO 5: A grande checagem final!
// O operador "&&" significa "E". Então o computador só aceita se TODAS as condições forem verdadeiras:
if (ano > 0 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= limiteDeDias) {
    // Se tudo deu certo, a data existe!
    console.log("A data " + dia + "/" + mes + "/" + ano + " é VÁLIDA!");
} else {
    // Se qualquer uma das regras ali de cima falhar, a data não existe.
    console.log("A data " + dia + "/" + mes + "/" + ano + " é INVÁLIDA!");
}


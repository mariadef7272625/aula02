// Definindo os três números para comparação
var num1 = 55; 
var num2 = 42; 
var num3 = 23; 

// ESTRUTURA DE DECISÃO PRINCIPAL: Descobre o maior entre três números usando condições aninhadas.
// Esta primeira checagem divide os três números em dois grupos possíveis.
if (num1 >= num2) { 
    // SE CHEGOU AQUI: Significa que 'num1' é maior ou igual a 'num2'.
    // Portanto, 'num2' já está eliminado da disputa pelo posto de maior número.
    // Agora restou apenas comparar o 'num1' com o 'num3'.

    if (num1 >= num3) { 
        // SE CHEGOU AQUI: 'num1' ganhou de 'num2' (no if de cima) e ganhou de 'num3'.
        // Logo, 'num1' é comprovadamente o maior de todos.
        console.log("O maior número é: " + num1); 
    } else { 
        // SE CHEGOU AQUI: 'num1' era maior que 'num2', mas perdeu para 'num3'.
        // Se 'num3' é maior que 'num1', e 'num1' é maior que 'num2', então 'num3' é o maior de todos.
        console.log("O maior número é: " + num3); 
    }

} else { 
    // SE CHEGOU AQUI (no else principal): Significa que 'num1 >= num2' é FALSO.
    // Ou seja, 'num2' é estritamente maior que 'num1'. Portanto, 'num1' está eliminado.
    // Agora restou apenas comparar o 'num2' com o 'num3'.

    if (num2 >= num3) { 
        // SE CHEGOU AQUI: 'num2' ganhou de 'num1' (no else de cima) e ganhou de 'num3'.
        // Logo, 'num2' é comprovadamente o maior de todos.
        console.log("O maior número é: " + num2); 
    } else { 
        // SE CHEGOU AQUI: 'num2' era maior que 'num1', mas perdeu para 'num3'.
        // Se 'num3' é maior que 'num2', e 'num2' é maior que 'num1', então 'num3' é o maior de todos.
        console.log("O maior número é: " + num3); 
    }
}






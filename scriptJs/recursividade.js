
function multiplica (num1, num2) {
    // Multiplicação por 0 é igual a 0
    if (num1 == 0 || num2 == 0) {
        return 0
    }
    // Caso base onde a execução para
    else if (num2 == 1) {
        return num1       
    }
    // Multiplicando atraves da soma com recursividade
    else {
        return (num1 + multiplica(num1, num2 -1))
    }
}

var resultado = multiplica(1,1)

console.log("---- Multiplicação -----");
console.log(resultado)

console.log("----- Contagem Regressiva ---")


function contagemRegressiva(numero) {
    
    let n = numero
    
    if (n < 0 || n > 10) {

        return 0
    }
    else {
        
        console.log(n);
        return contagemRegressiva(n -1)
        
    }
}

contagemRegressiva(10)


console.log('--- Reduce JavaScript ---- ');

const arrayNum = [1, 2, 3, 4];

/*
Paramentros
Acumulador (acc)*
Valor Atual (cur)*
Index Atual (idx)
Array original (src)
*/

// 0 + 1 + 2 + 3 + 4

const valorInicial = 0;
const somaAtualComInicial = arrayNum.reduce(
    (valorAnterior, valorAtual) => valorAnterior + valorAtual, valorInicial
    );

console.log(somaAtualComInicial);
// Saida esperada: 10


// Remover itens duplicados num array
console.log('--- Remover itens duplicados num array ---- ')
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]
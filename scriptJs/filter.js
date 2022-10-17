
const precos = [

    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas a Pagar",
    "R$ 300",
    "R$ 400",
    "Meus Dados"
]

console.log('---- Primeira Função Filter -----')
// Esta função retorna a mesma coisa
const precosFiltro = precos.filter((preco) => {
    if (preco.includes('R$')) {
        return true
    } else {
        return false
    }
})
console.log(precosFiltro)

console.log('---- Segunda Função Filter-----')
// Desta
const precoFiltro = precos.filter(preco => preco.includes('R$'))
console.log(precoFiltro)

//Função Map
console.log('...... Map com Replace.......');
const precosNumero = precosFiltro.map((preco)=>{
//console.log(preco)
return preco.replace("R$ ", "")
})
console.log(precosNumero);

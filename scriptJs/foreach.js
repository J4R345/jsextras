

const itens = ['item1', 'item2', 'item3', 'item4'] // Array de itens

const novosItens = [] // Criar um array vazio

itens.forEach((item, index) => {

    if (index >= 0) {

        console.log(item) //Retorna o item
        console.log(novosItens.push(item)) // reorna o indice
    }
});
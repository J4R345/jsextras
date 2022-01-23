import { fazCalculoComplexo } from "./biblioteca.js"

const [qtdeE1, precoE1, totalE1] = document.querySelectorAll ("#quantidade, #preco, #total")

for (let campoE1 of [qtdeE1, precoE1]){
campoE1.addEventListener('input', ()=> {
    const quantidade = qtdeE1.value
    const preco = precoE1.value
    const total = fazCalculoComplexo(quantidade,preco)
    totalE1.value = total
})
}
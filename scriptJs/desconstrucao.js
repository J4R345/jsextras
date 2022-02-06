// Desconstrução (Destruction) em JavaScrip

//Objeto
let opcoes = {
	title: "Book",
	page: 200,
	species: "scientific",
}
// title = propriedade title
// rest =  objeto com o resto das propriedades
console.log("--------- Primeiro Exemplo ---------")

let { title, ...rest } = opcoes // agora title e igual a "Book"
// E rest e igual a {page: 200, species: scientific}

console.log(opcoes) // Retorna o Objeto Literal

console.log(rest.page) // 200

console.log(rest.species) // scientific

const pessoa = {
	name: "Java",
	idade: 35,
}

console.log("--------- Atribuição via Destruction ----------")
// Atribuir um nome a uma variavel
const { idade: age } = pessoa
console.log(age)

console.log("--------- Destruction em Array -----------")
// Destruction em uma array

const frutas = ["banana", "pera", "maçã"]

const [, , ...resto] = frutas

console.log(resto)

// Usando o operador rest
let [b, ...asoutrasfrutas] = frutas
// b retorna o primeiro item e os ... o restante dos itens

console.log(b)

console.log(asoutrasfrutas)

console.log("------- Desestruturação direto na função -----------")
const fruits = {
	b: "banana",
	p: "pera",
}

function liquidificador({ b, p }) {
	console.log(b, p)
}

const result = liquidificador(fruits)

const brasil = {
	populacao: "226.6 bilhos",
	renda_per_capita: "6.796.86",
	religiao: {
		catolica: "64.6%",
	},
}
const {
	populacao,
	religiao: { catolica },
} = brasil

console.log("---- Desturction Objeto Aninhado ------")

console.log(populacao)
console.log(catolica) // Informar a chave do objeto aninhado

console.log("------- Final ----")


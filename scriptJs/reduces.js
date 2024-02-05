
const numbers = [1, 2, 3, 4, 5, 6]
//Função para somar os numeros do array e adicionar o valor 100
const sum = (acc, num) => acc + num

const total = numbers.reduce(sum, 0)

console.log("------ Reduce/Soma --------")
console.log(total)

// O primeiro elemento do Reduce é um acumulador
// O segundo é o elemento (Cada objeto do array lista)
// O terceiro é o índice
// O quarto é o array

// função para calcular a media dos valores do array
const avg = (acc, el, i, array) => {
	if (i === array.length - 1) {
		return (acc + el) / array.length
	} else {
		return acc + el
	}
}

const media = numbers.reduce(avg)

console.log("------ Reduce-Media --------")
console.log(media)


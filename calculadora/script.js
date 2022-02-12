"use strict"

const display = document.getElementById("display")
const numeros = document.querySelectorAll("[id*=tecla]")
const operadores = document.querySelectorAll("[id*=operador]")

let numeroNovo = true
let operador
let numeroAnterior

const operacaoPendente = () => operador !== undefined

const calcular = () => {
	if (operacaoPendente()) {
		const numeroAtual = parseFloat(display.textContent.replace(",", "."))
		numeroNovo = true
		const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`)
		atualizarDisplay(resultado)
	}
}

const atualizarDisplay = (texto) => {
	if (numeroNovo) {
		display.textContent = texto.toLocaleString("BR")
		numeroNovo = false
	} else {
		display.textContent += texto.toLocaleString("BR")
	}
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)

numeros.forEach((numero) => numero.addEventListener("click", inserirNumero))

const selecionarOperador = (evento) => {
	if (!numeroNovo) {
		calcular()
		numeroNovo = true
		operador = evento.target.textContent
		numeroAnterior = parseFloat(display.textContent.replace(",", "."))
	}
}

operadores.forEach((operador) =>
	operador.addEventListener("click", selecionarOperador)
)

document.getElementById("igual").addEventListener("click", () => {
	calcular()
	operador = undefined
})

document.getElementById("limparDisplay").addEventListener("click", () => {
	display.textContent = ""
})

document.getElementById("limparCalculo").addEventListener("click", () => {
	display.textContent = ""
	operador = undefined
	numeroNovo = true
	numeroAnterior = undefined
})

document.getElementById("backspace").addEventListener("click", () => {
	display.textContent = display.textContent.slice(0, -1)
})

document.getElementById("inverter").addEventListener("click", () => {
	numeroNovo = true
	atualizarDisplay(display.textContent * -1)
})

const existeDecimal = () => display.textContent.indexOf(",") !== -1
const existeValor = () => display.textContent.length > 0

document.getElementById("decimal").addEventListener("click", () => {
	if (!existeDecimal()) {
		if (existeValor()) {
			atualizarDisplay(",")
		} else {
			atualizarDisplay("0,")
		}
	}
})

const mapaTeclado = {
	0: "tecla0",
	1: "tecla1",
	2: "tecla2",
	3: "tecla3",
	4: "tecla4",
	5: "tecla5",
	6: "tecla6",
	7: "tecla7",
	8: "tecla8",
	9: "tecla9",
	"/": "operadorDividir",
	"*": "operadorMultiplicar",
	"+": "operadorAdicional",
	"-": "operadorSubtrair",
	"=": "igual",
	Enter: "igual",
	Backspace: "backspace",
	c: "limparDisplay",
	Escape: "limparCalculo",
	",": "decimal",
}

document.addEventListener("keydown", (evento) => {
	const tecla = evento.key
	const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1

	if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click()
})

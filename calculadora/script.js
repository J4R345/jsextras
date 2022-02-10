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
		const numeroAtual = parseFloat(display.textContent)
		numeroNovo = true
		const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`)
		atualizarDisplay(resultado)
	}
}

const atualizarDisplay = (texto) => {
	if (numeroNovo) {
		display.textContent = texto
		numeroNovo = false
	} else {
		display.textContent += texto
	}
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)

numeros.forEach((numero) => numero.addEventListener("click", inserirNumero))

const selecionarOperador = (evento) => {
	
	if (!numeroNovo) {
		calcular()
		numeroNovo = true
		operador = evento.target.textContent
		numeroAnterior = parseFloat(display.textContent)
		
	}
}
operadores.forEach((operador) =>
	operador.addEventListener("click", selecionarOperador)
)

/*const ativarIgual = () => {
	calcular()
	operador = undefined
}*/

document.getElementById("igual").addEventListener("click", () => {
	calcular()
	operador = undefined
})

document.getElementById("limparDisplay").addEventListener("click", () => {
	display.textContent = ''
})

document.getElementById('limparCalculo').addEventListener('click', () => {
	
	display.textContent = ''
	operador = undefined
	numeroNovo = true
	numeroAnterior = undefined
})

document.getElementById('backspace').addEventListener('click',() => {
display.textContent = display.textContent.slice(0, -1)	
})

document.getElementById('inverter').addEventListener('click', () => {
  numeroNovo = true
  atualizarDisplay (display.textContent *-1)
})

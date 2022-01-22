/*
Composição de Funçoes

Exemplo 01
const gritar = texto =>  texto.toUpperCase()
const enfatizar = texto => `${texto}!!!`

const gritando = gritar( 'composto' )
const enfatizando = enfatizar(gritando)

console.log(enfatizando)
*/
// Exemplo 02
const gritar = (texto) => texto.toUpperCase()
const enfatizar = (texto) => `${texto}!!!`

const compor = (fun1, fun2, texto) => {
	let res = fun1(texto)
	res = fun2(res)

	return res
}
const resultado = compor(gritar, enfatizar, "o grito")

console.log(resultado)

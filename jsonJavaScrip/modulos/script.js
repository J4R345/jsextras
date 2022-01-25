// Converte CSV para Json OnLine
// https://csvjson.com/csv2json

fetch("./modulos/colab.json")
	.then((response) => {
		return response.json()
	})
	.then((jsondata) => {
		const colaborador = jsondata.filter(
			(jsondata) => jsondata.ID === "11002424"
		)

		console.log(colaborador[0].Nome)

		const nome = document.getElementById("debug").innerHTML = colaborador[0].Nome
	})


let busca = 'Mal'


if (busca.search(/image/i) != -1 || 
    busca.search(/v[í|i]deo/i) != -1|| 
    busca.search(/coli[são|diu]/i) != -1|| 
    busca.search(/avari[a|ou]/i) != -1||
    busca.search(/^mal$/i) != -1|| 
    busca.search(/solicita[do|ção]/i) != -1){

    console.log(true)

}

// console.log(texto.search(/coli[são|diu]/i))
// console.log(texto.search(/v[í|i]deo/i))
// console.log(texto.search(/avaria/i))
//console.log(texto.search(/solicita[do|ção]/i))


/*
 if (busca.includes("coli") || busca.includes("video") || busca.includes("avar") 
    || busca.includes("image") || busca.includes("assalt") || busca.includes("queda"))
*/
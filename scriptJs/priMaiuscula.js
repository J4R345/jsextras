

//Opção 01

const minhaFrase = "O freeCodeCamp é um recurso incrível";
const palavras = minhaFrase.split(" ");

for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
}

palavras.join(" ");

console.log(palavras.join(" "));

// Opção 02
// Com Regex
/*
const minhaFrase = "O freeCodeCamp é um recurso incrível";

const fraseFinal = minhaFrase.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());

console.log(fraseFinal);

*/

// Terceira Opção
// com Regex
const priMaiuscula = str => {
    return str.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase());
};

console.log(priMaiuscula('MARIA Clementina FrancisCA Josefa DA Áustria'))
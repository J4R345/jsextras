// Classificar objetos pela chave (key)
  
let pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 20 }
  ];


  pessoas.sort(function(a, b) {
    return a - b;
  });
  
  console.log(pessoas);

  // Classificar números

  let numeros = [10, 2, 15, 5];

numeros.sort((a, b)=> {
  return a - b;
});

console.log(numeros);
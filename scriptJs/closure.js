/*
Closure são funções definidas no escopo de outra função 
E faz uso do contexto lexico da função pai,
Das variaveis da função pai
*/

const nomeCompleto = (n) => {
  const nome = n;
  const formataNome = () => {
    const nomes = nome.split(" ");
    return nomes[0] + " " + nomes[nomes.length - 1];
  };
  return formataNome;
};

const minhaClosure = nomeCompleto("Jarbas Pereira de Souza");

console.log("---- Resultado da Closure ------");
console.log(minhaClosure());

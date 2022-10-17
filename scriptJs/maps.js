// Map
const numbers = [1, 2, 3, 4, 5, 6];
/*Em Array Functions
 * Se tiver apenas um parametro não precisa dos ()
 * E neste caso não precisa passar o return nem {} no *corpo da função
 */
const numbersX2 = numbers.map((el) => el * 2);
console.log("---------------------");
console.log(`Primeiros Numeros: ${numbers}`);
console.log("---------------------");
console.log(`Numeros Multiplicados por 2: ${numbersX2}`);

const students = [
  {name: "Jake", score: 6.4},
  {name: "Susan", score: 8.6},
  {name: "Emma", score: 9.4},
  {name: "Peter", score: 9.1}
];

const getScores = (el) => el.score;
// O primeiro map pega as notas
// O segundo map arredonda as notas
const result = students.map(getScores).map(Math.ceil);

console.log("---------------------");
console.log(`Notas Arredondadas: ${result}`);

// Filter
const numbers = [1, 2, 3, 4, 5, 6]
/*Em Array Functions
 *Se tiver apenas um parametro não precisa dos ()
 * E neste caso não precisa passar o return nem {} no *corpo da função
 */

const greaterThanZero = (el) => el > 4
const greaterThanTen = (el) => el > 10
const even = (el) => el % 2 === 0 // Retorna apenas os numeros pares (% 2 - Mod)

console.log("--------- Numbers ------------")
console.log(numbers.filter(greaterThanZero))
console.log("---------------------")
console.log(numbers.filter((el) => el > 0))
console.log("---------------------")
console.log(numbers.filter(greaterThanTen))
console.log("---------------------")
console.log(numbers.filter(even))

const students = [
	{ name: "Jake", score: 6.4 },
	{ name: "Susan", score: 8.6 },
	{ name: "Emma", score: 9.4 },
	{ name: "Peter", score: 9.1 },
]

const greatStudents = (students) => students.score >= 9

console.log("--------- Students ------------")
console.log(students.filter((students) => students.score >= 9))
console.log("---------------------")
console.log(students)
console.log("---------------------")
console.log(students.filter(greatStudents))

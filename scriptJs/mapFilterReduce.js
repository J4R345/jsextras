
const students = [
	{ name: "Jake", score: 6.4 },
	{ name: "Susan", score: 8.6 },
	{ name: "Emma", score: 9.4 },
	{ name: "Peter", score: 9.1 },
]

const greatStudents = (students) => students.score >= 9

const getScores = (el) => el.score

const avg = (acc, el, i, array) => {
	if (i === array.length - 1) {
		return (acc + el) / array.length
	} else {
		return acc + el
	}
}

const mediaDosMelhores = students
	.filter(greatStudents)
	.map(getScores)
	.reduce(avg)

console.log("----- Media dos Melhores Estudantes -----")
console.log(students.filter(greatStudents).map(getScores).reduce(avg))
console.log("----- Media dos Melhores Estudantes 2 -----")
console.log(mediaDosMelhores)

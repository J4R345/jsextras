// Função construtora

function car (model, year, cor) {

    this.model = model
    this.year = year
    this.cor = cor

    //Car.prototype.carFull = `Veiculo ${this.model} Ano ${this.year}`

car.prototype.carFull = () => {

    return `Veiculo ${this.model} Ano ${this.year}`

    }
}

const c1 = new  car ('Fusca', 1969, 'Verde')

console.log(c1.carFull())


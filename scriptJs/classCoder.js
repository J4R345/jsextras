

class Car {
  constructor(marca, modelo, ano, combustivel) {
      (this.marca = marca),
      (this.modelo = modelo),
      (this.ano = ano),
      (this.combustivel = combustivel);
  }

  get _marca() {
    return this.marca;
  }
  get _modelo() {
    return this.modelo;
  }
  get _ano() {
    return this.ano;
  }
  get _combustivel() {
    return this.combustivel;
  }

  set _setMarca(nMarca) {
    this.marca = nMarca;
  }
}

const carOne = new Car("Volks", "fusca", 1967, "Gasolina");

carOne._setMarca = "Brasilia";

console.log(carOne._marca);

// criando a classe carro
class Carro {
  // Metodo Construtor
  constructor(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.ligado = true;
    this.km = 0;
    this.comb = "Gasolina";
  }

  //Metodos <|> Funcões

  info() {
    console.log(`Marca.......: ${this.marca}`);
    console.log(`Modelo......: ${this.modelo}`);
    console.log(`Cor.........: ${this.cor}`);
    console.log(`Km..........: ${this.km}`);
    console.log(`ligado......: ${this.ligado ? "Sim" : "Não"}`);
    console.log(`Combustivel.: ${this.comb}`);
    console.log("----------------------");
  }

  set setComb(v) {
    // Metodo Set para alterar o valor de um atributo

    if (v !== "Alcool" && v !== "Gasolina") {
      alert("Valor Invalido");
    } else {
      this.comb = v;
    }
  }

  get getComb() {
    // Metodo Get para obter o valor de um atributo

    return this.comb;
  }

  ligar() {
    this.ligado = true;
  }

  desligar() {
    this.ligado = false;
  }

  ligaDesliga(ld) {
    this.ligado = ld;
  }
}

// Instanciando (criando) os carros

let c1 = new Carro("Honda", "HB-20", "Vermelho");
let c2 = new Carro("Volkswagen", "Golf", "Preto");

c2.setComb = "Gasolina";

c1.cor = "Red";

c1.ligaDesliga(false);

c1.info();
c2.info();

console.log(c2.getComb);

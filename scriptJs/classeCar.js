// criando a classe carro
class Carro {
  // Metodo Construtor

  constructor(tpCarro, tpComb) {
    this.tipo = tpCarro;
    this.tipoComb = tpComb;
    this.qtdeComb = 100;
    this.ligado = true;
  }

  //Metodos <|> Funcões

  info() {
    console.log(`Qtde Combustivel..: ${this.qtdeComb}`);
    console.log(`ligado............: ${this.ligado ? "Sim" : "Não"}`);

    if (this.tipo == 1) {
      console.log("Carro.............: De Passeio");
    } else if (this.tipo == 2) {
      console.log("Carro.............: De Transporte");
    } else {
      console.log("Carro.............: De Combate");
    }

    if (this.tipoComb == 1) {
      console.log("Carrbustivel......: Gasolina");
    } else if (this.tipoComb == 2) {
      console.log("Combustivel.......: Diesel");
    } else {
      console.log("Combustivel.......: Alcool");
    }
  }

  set setLigado(t) {
    this.ligado = t;
  }

  get getLigado() {
    return this.ligado;
  }
}

// Classe Filho
// Herança JavaSript

class CarroCombate extends Carro {
  constructor(potTiro) {
    super(3, 2);
    this.tiros = 100;
    this.potTiro = potTiro;
    this.blindagem = 90;
  }

  info() {
    super.info();
    console.log("Qtde de Tiro.......:" + this.tiros);
    console.log("Potencia do Tiro...:" + this.potTiro);
    console.log("Blindagem..........:" + this.blindagem);

    console.log("----------------------");
  }
}

class CarroTransporte extends Carro {
  constructor() {
    super(1, 2);
  }
}

// Instanciando (criando) os carros

let c1 = new CarroCombate(100);
let c2 = new CarroTransporte();

console.log("- Carro Combate -----------");

c1.ligado = false;
console.log(`Potencia do Tiro..: ${(c1.potTiro = 100)}`);
c1.info();

console.log("- Carro de Passeio -----------");

c2.info();

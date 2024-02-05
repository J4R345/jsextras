
var pessoa = {
  nome: ["Bob", "Smith"],
  idade: 32,
  sexo: "masculino",
  intereses: ["música", "esquiar"],
  bio: function () {
    console.log(
      this.nome[0] +
        " " +
        this.nome[1] +
        " tem " +
        this.idade +
        " anos de idade. Ele gosta de " +
        this.intereses[0] +
        " e " +
        this.intereses[1] +
        "."
    );
  },
  saudacao: function () {
    console.log("Oi! Eu sou " + this.nome[0] + ".");
  },
};

pessoa.nome;
pessoa.nome[0];
pessoa.idade;
pessoa.intereses[1];
pessoa.bio();
pessoa.saudacao();

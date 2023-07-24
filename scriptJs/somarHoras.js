function somarDuracoes(duracao1, duracao2) {
    // Função para converter a duração de "horas:minutos:segundos" para segundos
    function converterParaSegundos(duracao) {
      const [horas, minutos, segundos] = duracao.split(":");
      return parseInt(horas) * 3600 + parseInt(minutos) * 60 + parseInt(segundos);
    }
  
    // Converter as duas durações para segundos
    const segundosDuracao1 = converterParaSegundos(duracao1);
    const segundosDuracao2 = converterParaSegundos(duracao2);
  
    // Somar as durações em segundos
    const somaSegundos = segundosDuracao1 + segundosDuracao2;
  
    // Converter o resultado de volta para o formato "horas:minutos:segundos"
    const horas = Math.floor(somaSegundos / 3600);
    const minutos = Math.floor((somaSegundos % 3600) / 60);
    const segundos = somaSegundos % 60;
  
    // Formatar a saída com zeros à esquerda para garantir dois dígitos em horas, minutos e segundos
    const duracaoTotal = `${horas.toString().padStart(5, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  
    return duracaoTotal;
  }
  
  // Exemplo de uso:
  const duracao1 = "12000:30:10";
  const duracao2 = "11000:10:31";
  
  const resultado = somarDuracoes(duracao1, duracao2);
  console.log(resultado); // Saída: "23001:40:41"
  
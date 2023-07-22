

let participantes = ["Ana", "Beto", "Carla", "Daniel", "Eva"];

function sortearParticipante() {

  console.log(participantes.length);

    if (participantes.length > 0) {

    let indice = Math.floor(Math.random() * participantes.length);
    let participanteSorteado = participantes[indice];
    participantes.splice(indice, 1); // remove o participante selecionado do array
    return participanteSorteado;
    
}

}

console.log(sortearParticipante());
console.log(participantes);

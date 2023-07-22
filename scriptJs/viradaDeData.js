// Horário inicial: 16:15:10
const horaInicial = new Date();
horaInicial.setHours(16);
horaInicial.setMinutes(15);
horaInicial.setSeconds(10);

// Horário final: 00:50:30
const horaFinal = new Date();
horaFinal.setHours(0);
horaFinal.setMinutes(50);
horaFinal.setSeconds(30);

// Verifique se o horário final é anterior ao horário inicial no mesmo dia
// Se sim, adicione um dia ao horário final para considerar a diferença entre dias
if (horaFinal < horaInicial) {
  horaFinal.setDate(horaFinal.getDate() + 1);
}

// Calcule a diferença em milissegundos entre os dois horários
const diferencaMilissegundos = horaFinal - horaInicial;

// Converta a diferença em milissegundos para horas, minutos e segundos

//const segundos = diferencaMilissegundos / 1000;
//const minutos = diferencaMilissegundos / 1000 / 60;
//const horas = diferencaMilissegundos / 1000 / 60 / 60;


const segundos = diferencaMilissegundos / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

console.log('Duração em horas:', horas);
console.log('Duração em minutos:', minutos);
console.log('Duração em segundos:', segundos);

console.log('Duração em Milissegundos:', diferencaMilissegundos);


/*
Duração em horas: 8.588889166666666
Duração em minutos: 515.33335
Duração em segundos: 30920.001
Duração em Milissegundos: 30920001
*/

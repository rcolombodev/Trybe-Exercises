const readline = require('readline-sync');

function calculaVelocidadeMed () {
  const distancia = readline.questionInt('Distância: ');
  const tempo = readline.questionInt('Tempo: ');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
}

calculaVelocidadeMed();
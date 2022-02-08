const readline = require('readline-sync');

function sorteio() {
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  resultado(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para jogar novamente, e n para sair) '
  );

  if (novamente === 'n') return console.log('OK, até a próxima!');
  sorteio();
}

function resultado(numero, resposta) {
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }
  return console.log('Parabéns, número correto!');
}

sorteio();
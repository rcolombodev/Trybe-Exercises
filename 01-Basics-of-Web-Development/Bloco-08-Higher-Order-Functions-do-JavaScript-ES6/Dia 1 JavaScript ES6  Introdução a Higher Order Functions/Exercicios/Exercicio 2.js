//Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const checkNumbers = (myNumber, lotteryNumber) => myNumber === lotteryNumber;

const lotteryResult = (myNumber, callback) => {
  const lotteryNumber = Math.floor((Math.random() * 5) + 1);
  
  return callback(myNumber, lotteryNumber) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(lotteryResult(2, checkNumbers));
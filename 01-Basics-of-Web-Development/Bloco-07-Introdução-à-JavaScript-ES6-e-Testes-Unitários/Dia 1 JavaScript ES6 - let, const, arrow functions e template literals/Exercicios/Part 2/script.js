// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

//Teste 1
// let fatorial = number => {
//   let n = number 
//   let multiplicador = n - 1;
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//   for (let index = multiplicador; index > 1; index -= 1) {
//     n *= index
//   }
//   return n;
// }
// console.log(fatorial(4))

//Teste 2
// let fatorial = number => {
//   if (number === 0 || number === 1){
//     return 1;
//   } else {
//     return number * fatorial(number - 1);
//   }
// }
// console.log(fatorial(4))

//Teste 3

const fatorial = number  => !(number > 1) ? 1 : fatorial(number - 1) * number;
console.log(fatorial(5))


//Crie uma função que receba uma frase e retorne qual a maior palavra.

const phrase = string => {
  let words = string.split(' ');
  let bigWord = '';
  for (word of words) {
    if (word.length > bigWord.length) {
      bigWord = word
    }
  }
  return bigWord
}
console.log(phrase('O Gabarito não faz sentido'))


//Em uma linha
const logestWord = string => string.split(' ').sort((a, b) => (b.length - a.length))[0];
console.log(logestWord('O Gabarito não faz sentido'))
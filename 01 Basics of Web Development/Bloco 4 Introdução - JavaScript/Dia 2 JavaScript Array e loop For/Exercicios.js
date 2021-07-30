// 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// 2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// Dica: A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// 4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
//   Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// 5 Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// 7 Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// 8 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for ( let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

for ( let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index]
}
console.log("A soma dos numbers é: " , sum)

let arithmeticAverage = sum / numbers.length
  console.log("A média dos numeros é: " , arithmeticAverage)

if ( arithmeticAverage > 20 ) {
  console.log("valor maior que 20")
}else{
  console.log("valor menor ou igual a 20")
}

let higherNumber = numbers[0];

for ( let index = 0; index < numbers.length; index += 1 ) {
  if ( numbers[index] > higherNumber ){
    higherNumber = numbers[index]; 
  }
}
console.log("O maior numero é: ", higherNumber)


let oddNumber = 0;

for ( let index = 0; index < numbers.length; index += 1 ) {
  
    if(numbers[index] % 2 !== 0){
      oddNumber += 1;
    }
  } 
if (oddNumber === 0){
  console.log("nenhum valor ímpar encontrado");
}else{
  console.log(oddNumber)
}

let lowerNumber = numbers[0];

for ( let index = 1; index < numbers.length; index += 1 ) {
  if ( numbers[index] < lowerNumber){
    lowerNumber = numbers[index]; 
  }
}
console.log("O menor numero é: ", lowerNumber)

let numbersCount = [];

for ( let index = 1; index <= 25; index += 1 ) {
  numbersCount.push(index);
}
console.log(numbersCount)

for ( let index = 0; index < numbersCount.length; index += 1 ) {
  console.log(numbersCount[index] / 2);
}

// 1 Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

for (let index = 0; index < numbers.length; index+=1) {
  for (let index2 = 0; index2 < index; index2 +=1) {
    if(numbers[index] < numbers[index2]) {
      let position = numbers[index]
      numbers[index] = numbers[index2]
      numbers[index2] = position
    }
  }
}
console.log(numbers)

// 2 Ordene o array numbers em ordem decrescente e imprima seus valores;

for (let index = 0; index < numbers.length; index+=1) {
  for (let index2 = 0; index2 < index; index2 +=1) {
    if(numbers[index] > numbers[index2]) {
      let position = numbers[index2]
      numbers[index2] = numbers[index]
      numbers[index] = position
    }
  }
}
console.log(numbers)

// 3 Agora crie um novo array a partir do array numbers3, sem perdê-lo. 
// Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
// Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). 
// Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante.
// Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . 
// O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers4 = [];
// 3- 
for (let index = 0; index < numbers3.length; index+=1) {
  if(index < numbers3.length - 1){
    numbers4.push(numbers3[index] * numbers3[index + 1]);
  }else{
    numbers4.push(numbers3[index] * 2);
  }
}
console.log(numbers4)

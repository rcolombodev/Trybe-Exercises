// Exercicio 1
//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)


let a = 10;
let b = 5;
let c = 20;

console.log("adição = " +  (a + b));
console.log("subtração = " +  (a - b));
console.log("multiplicação = " +  (a * b));
console.log("divisão = " +  (a / b));
console.log("módulo = " +  (a % b));

// Exercicio 2
// aça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

if (a > b) {
  console.log("a é maior que b");
  }
  else if (a < b){
    console.log("b é maior que a");
  }

// Exercicio 3
// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

if (a > b && a > c) {
  console.log("O maior numero é a");
  }
  else if (b > a && b > c){
    console.log("O maior numero é b");
  }else{
    console.log("O maior numero é c");
}

// Exercicio 4
// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.


if (a > b) {
  console.log("positive");
  }
  else if (a < b){
    console.log("negative");
  }else{
    console.log("zero");
}

// Exercicio 5
// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let somaDosAngulos = a + b + c;
let angulosPositivos = a > 0 && b > 0 && c > 0;

if (angulosPositivos){
  if (somaDosAngulos === 180) {
    console.log(true);
  }else {
    console.log(false);
  }
  }else {
    console.log("erro - o angulo não é valido");
}

//Exercicio 6
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peçaDeXadrez = "Cavalo";

switch(peçaDeXadrez.toLowerCase()){
  case "peão":
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
      break;
  case "torre":
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
      break;
  case "cavalo":
    console.log("Cavalo é a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
      break;
  case "rainha":
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
      break;
  case "bispo":
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
      break;
  case "rei":
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
      break;
  default:
    console.log("Erro peça não encontrada");
      break;
}

// Exercicio 7
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 60

if (nota < 0 || nota > 100) {
  console.log ("Erro: Não atende os requesitos");
}
  else if (nota >=90) {
    console.log("A")
  }
  else if (nota >=80) {
    console.log("B")
  }
  else if (nota >=70) {
    console.log("C")
  }
  else if (nota >=60) {
    console.log("D")
  }
  else if (nota >=90) {
    console.log("E")
  }
  else {
    console.log(F)
  }

// Exercicio 8
// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let num1 = 5
let num2 = 10
let num3 = 15

if (num1 || num2 || num3 % 2 === 0) {
  console.log("true")
}else{
  console.log("false")
}

// Exercicio 9
// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

if (num1 || num2 || num3 % 2 === 0) {
  console.log("false")
}else{
  console.log("true")
}

// Exercicio 10
// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let valorCusto = 10
let valorVenda = 18

if (valorCusto <= 0 || valorVenda < 0) {
  console.log("Entrada inválida")
} else {
  let imposto = 1.2;
  let produtosVendidos = 1000;
  let custoTotal = valorCusto * imposto;
  let lucro = valorVenda - custoTotal;
  let lucroTotal = lucro * produtosVendidos;
  console.log(lucroTotal)

  
  // primeiro calcular porcentagem
  // calcular o custo
  // calcular o lucro
  // imprimir o lucro vezes mil
}
// Exercicio 1

let a = 10;
let b = 5;
let c = 20;

// console.log("adição = " +  (a + b));
// console.log("subtração = " +  (a - b));
// console.log("multiplicação = " +  (a * b));
// console.log("divisão = " +  (a / b));
// console.log("módulo = " +  (a % b));

function sum() {
  return a + b;
}
console.log(sum())

function sub() {
  return a - b
}
console.log(sub())

function mult() {
  return a * b
}
console.log(mult())

function div() {
  return a / b
}
console.log(div())

function mod() {
  return a % b
}
console.log(mod())

// Exercicio 2

if (a > b) {
  console.log("a é maior que b");
  }
  else if (a < b){
    console.log("b é maior que a");
  }

// Exercicio 3

if (a > b && a > c) {
  console.log("O maior numero é a");
  }
  else if (b > a && b > c){
    console.log("O maior numero é b");
  }else{
    console.log("O maior numero é c");
}

// Exercicio 4


if (a > b) {
  console.log("positive");
  }
  else if (a < b){
    console.log("negative");
  }else{
    console.log("zero");
}

// Exercicio 5

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

let num1 = 5
let num2 = 10
let num3 = 15

if (num1 || num2 || num3 % 2 === 0) {
  console.log("true")
}else{
  console.log("false")
}

// Exercicio 9

if (num1 || num2 || num3 % 2 === 0) {
  console.log("false")
}else{
  console.log("true")
}

// Exercicio 10

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
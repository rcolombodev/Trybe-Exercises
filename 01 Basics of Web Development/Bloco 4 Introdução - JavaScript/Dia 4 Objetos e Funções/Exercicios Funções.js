// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(string){
  let reverseString = string.split("").reverse().join("")
  return reverseString === string
}
console.log(verificaPalindrome('arara'))
console.log(verificaPalindrome('Desenvolvimento'))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function indiceDoMaior(numeros){
  let indiceMaior =0;
    for(let index in numeros){
      if(numeros[indiceMaior] < numeros[index]){
      indiceMaior = index
    }
  }
  return indiceMaior
}

console.log (indiceDoMaior([2, 3, 6, 7, 10, 1]))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function indiceDoMenor(numeros){
  let indiceMenor = 0;
    for(let index in numeros){
      if(numeros[indiceMenor] > numeros[index]){
      indiceMenor = index
    }
  }
   return indiceMenor;
}

console.log (indiceDoMenor([2, 4, 6, 7, 10, 0, -3]))

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function maiorString(nomes){
  let maiorPalavra = nomes[0];
    for(let index in nomes){
      if(maiorPalavra.length < nomes[index].length){
        maiorPalavra = nomes[index]
      }
    }
   return maiorPalavra;
}
console.log(maiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// 5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .


//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function somaTudo (n){
  let resultado = 0;
    for(let index = 1; index <= n; index += 1){
      resultado = resultado + index
    }
    return resultado
}
console.log(somaTudo(5))

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
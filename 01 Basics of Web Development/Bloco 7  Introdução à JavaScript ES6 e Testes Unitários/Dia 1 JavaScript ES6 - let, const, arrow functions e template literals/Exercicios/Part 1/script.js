// 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.
// Copiar
const testingScope = escopo => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);


// 2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.





      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      const orderNumbers = orderArray => {
        let orderOddsAndEvens = 0;
        for(let index = 1; index < oddsAndEvens.length; index += 1){
          for (let index2 in oddsAndEvens) {
            if(oddsAndEvens[index] < oddsAndEvens[index2]){
              orderOddsAndEvens = oddsAndEvens[index]
              oddsAndEvens[index] = oddsAndEvens[index2];
              oddsAndEvens[index2] = orderOddsAndEvens
            }
          }
        }
        return orderArray;
      }
      const result = orderNumbers(oddsAndEvens)

      console.log(`Os números ${result} se encontram ordenados de forma crescente!`);

      const sortNumbers = array => {
        const sortOddsAndEvens = array.sort((a, b) => a - b)
        return sortOddsAndEvens;
      }

      const resultBonus = sortNumbers(oddsAndEvens)
      
      console.log(`Os números ${resultBonus} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'laranja', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'creme de leite', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  const saladWithAdditional = [...fruit, ...additional]
  return saladWithAdditional
};

console.log(fruitSalad(specialFruit, additionalItens));
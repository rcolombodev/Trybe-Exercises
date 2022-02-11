function number(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    const checkParam = Array.of(a, b, c)
    if(checkParam.some((el) => typeof el !== 'number')) {
      reject(new Error("Informe apenas números"));
    }
  const result = (a + b) * c

  if(result < 50){
    reject(new Error("Valor muito baixo"))
  }
  resolve(result)
  })
  return promise
}

number(1,5,1)
  .then(result => console.log(result))
  .catch(e => {
    console.log(e.message)
  })

number(10,10,5)
  .then(result => console.log(result))
  .catch(e => {
    console.log(e.message)
  })

number('e',10,5)
  .then(result => console.log(result))
  .catch(e => {
    console.log(e.message)
  })

function randomNumberGenerator() {
  return Math.floor(Math.random() * 100 + 1)
}

async function callNumber() {
  const randomNumbers = Array.from({ length: 3 }).map(randomNumberGenerator)

  try {
    const result = await number(...randomNumbers)
      console.log(result)
    
  } catch (error) {
    console.error(error)
  }
}

callNumber()

const fs = require('fs').promises;

fs.readFile('./simpsons.json')
  .then((result) => {
    return JSON.parse(result)
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });

async function getSimpsonById(id) {
  try {
    const simpsons = await fs.readFile('./simpsons.json')
      .then((result) => JSON.parse(result));
    const simpsonById = simpsons.find((simpson) => simpson.id === id)
    console.log(simpsonById);
  } catch (error) {
    if (simpsonById === undefined) {
      console.error(error);
    }
  }
}

getSimpsonById('3')
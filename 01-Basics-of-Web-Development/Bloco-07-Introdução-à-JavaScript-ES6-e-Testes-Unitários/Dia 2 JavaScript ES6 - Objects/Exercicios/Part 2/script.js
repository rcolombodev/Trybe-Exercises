const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//1 Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const newKey = (object, key, value) => (object[key] = value);

newKey(lesson2, "turno", "manhã");
console.log(lesson2);
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);
//2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => Object.keys(object);

console.log(listKeys(lesson1));
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);
//3 Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (object) => Object.keys(object).length;

console.log(objectLength(lesson3));
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);
//4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValues = (object) => Object.values(object);

console.log(objectValues(lesson2));
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);
//5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);
//6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = (object) => {
  const students1 = object.lesson1.numeroEstudantes;
  const students2 = object.lesson2.numeroEstudantes;
  const students3 = object.lesson3.numeroEstudantes;
  const sumStudents = students1 + students2 + students3;
  return sumStudents;
};

console.log(totalStudents(allLessons));
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);
//8 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (object, number) => Object.keys(object)[number];

console.log(getValueByNumber(lesson2, 1));
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);
//8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verify = (object, key, value) => {
  const keyValue = Object.entries(object);
  let test = false;
  for (let index in keyValue) {
    if (keyValue[index][0] === key && keyValue[index][1] === value) {
      test = true;
    }
  }
  return test;
};
console.log(verify(lesson2, 'professor', 'Carlos'));
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);
// Bônus
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const numberStudents = (object) => {
  const students = Object.keys(object);
  let total = 0;
  for(const index in students) {
    if(object[students[index]].materia === 'Matemática'){
        total += object[students[index]].numeroEstudantes
    }
  }
  return total
}
console.log(numberStudents(allLessons));
console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n`);

//Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

const createReport = (object, teacher) => {
  const array = Object.values(object)
  
  const objTeacher = {
    professor: teacher,
    aulas:[],
    estudantes: 0,
  }

  array.forEach((lesson) => {
    if(lesson.professor === teacher) {
      objTeacher.aulas.push(lesson.materia);
      objTeacher.estudantes += lesson.numeroEstudantes;
    }
  })
  console.log(objTeacher);
} 

createReport(allLessons, 'Maria Clara')
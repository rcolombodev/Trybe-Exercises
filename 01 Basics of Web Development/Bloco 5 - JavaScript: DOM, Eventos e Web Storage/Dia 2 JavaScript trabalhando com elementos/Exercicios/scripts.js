// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a tag main com a classe main-content como filho da tag body ;
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM'
document.body.appendChild(h1);

let main = document.createElement('main');
main.className = 'main-content'
document.body.appendChild(main);

let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

let paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem omnis sit fugiat quaerat provident animi, vel vitae quos blanditiis laudantium porro corrupti hic sed officiis corporis ut, possimus reprehenderit pariatur.';
section.appendChild(paragraph);

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
section.appendChild(image);


let listNumber = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let ulList = document.createElement('ul')
sectionLeft.appendChild(ulList)
for (let index in listNumber) {
  let list = document.createElement('li')
  list.innerText = listNumber[index];
  ulList.appendChild(list);
}

for (let index = 1; index <=3; index += 1){
  let h3 = document.createElement('h3');
  main.appendChild(h3);
}

// Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

h1.className = 'title';

let h3Description = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
    h3Description[index].className = 'description';
}

let sectionRightCenter = document.getElementsByClassName('right-content')[0];
sectionRightCenter.style.marginRight = 'auto';

let greenCenter = document.getElementsByClassName('center-content')[0];
greenCenter.parentNode.style.backgroundColor = 'green';

ulList.lastChild.remove();
ulList.lastChild.remove();

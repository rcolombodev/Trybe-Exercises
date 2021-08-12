function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe Friday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function addingDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulList = document.getElementById('days');
  
  for(let index in dezDaysList){
    const list = document.createElement('li')
    const day = dezDaysList[index];   
    if(day === 24 || day === 31){
      list.className = 'day holiday';
      list.innerText = day;
      ulList.appendChild(list);
    }else if (day === 4 || day === 11 || day === 18) {
      list.className = 'day friday';
      list.innerText = day;
      ulList.appendChild(list);
    }else if (day === 25){
      list.className = 'day holiday friday';
      list.innerText = day;
      ulList.appendChild(list);
    }else {
      list.className = 'day';
      list.innerText = day;
      ulList.appendChild(list);
    }
  }
};

addingDays();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function holidaybutton(){
  const button = document.createElement('button');
  const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  
  button.id = 'btn-holiday';
  button.innerText = 'Feriados';
  buttonsContainer.appendChild(button)
}

holidaybutton();

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function clickButtonEvent(){
  const getButtonHoliday = document.querySelector('#btn-holiday');
  const getHolidays = document.querySelectorAll('.holiday');
  const backgroundColor= 'rgb(238,238,238)'
  const backgroundColorChange = 'rgb(91, 201, 113)'

  getButtonHoliday.addEventListener('click', function() {
    for(let index in getHolidays) {
      if(getHolidays[index].style.backgroundColor === backgroundColorChange){
        getHolidays[index].style.backgroundColor = backgroundColor
      } else {
        getHolidays[index].style.backgroundColor = backgroundColorChange;
      }
    }
  })
};

clickButtonEvent();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function fridayButton(){
  const button = document.createElement('button');
  const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  
  button.id = 'btn-friday';
  button.innerText = 'Sexta-feira';
  buttonsContainer.appendChild(button)
}

fridayButton();

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function clickFridayEvent(){
  const getButtonFriday = document.querySelector('#btn-friday');
  const getFriday = document.querySelectorAll('.friday');
  const newText = 'É SEXTAA!!!'
  const fridays = [4, 11, 28, 25]

  getButtonFriday.addEventListener('click', function() {
    for(let index in getFriday) {
      if(getFriday[index].innerText !== newText){
        getFriday[index].innerText = newText
      } else {
        getFriday[index].innerText = fridays[index]
      }
    }
  })
};

clickFridayEvent();

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function eventMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event){
  event.target.style.fontWeight = '300'
  event.target.style.fontSize = '40px' 
  })
}

eventMouseOver();

function eventMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event){
  event.target.style.fontWeight = '200'
  event.target.style.fontSize = '20px' 
  })
}

eventMouseOut();

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function customTask(task){
  const myTasks = document.querySelector('.my-tasks');
  const newTask = document.createElement('span');

  newTask.innerText = task;
  myTasks.appendChild(newTask)
}

customTask('Exercícios:');

//Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function taskColor(color){
  const myTasks = document.querySelector('.my-tasks');
  const newTask = document.createElement('div');

  newTask.style.backgroundColor = color;
  newTask.className = 'task';
  myTasks.appendChild(newTask);
}

taskColor('green')

//Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function selectTask(){
const selectedTask = document.querySelectorAll('.task selected');
const myTasks = document.querySelector('.task');

myTasks.addEventListener('click', function(event){
    if(selectedTask.length === 0) {
      event.target.className = 'task selected'
    } else {
      event.target.className = 'task'
    }
  });
};

selectTask();

// Exercício 10 >>>>>>>>>>> Exercicio Gabaritado <<<<<<<<<< NOTA: Não consegui resolver e copiei do conteudo didatico com o proposito de entender o raciocínio lógico a partir da linha 213.
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function setDayColor(){
  let days = document.getElementById('days')
  let selectedTask = document.getElementsByClassName('task selected');
  let taskDiv = document.querySelector('.task')
  let taskColor = taskDiv.style.backgroundColor;                         
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  }); 
};

setDayColor();
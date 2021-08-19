const select = document.getElementById('estado');
const inputDate = document.getElementById('data')
const states = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
  ]; 

function createOptions() {
  for (let index = 0; index < states.length; index +=1){
  const options = document.createElement('option');
  options.innerText = states[index];
  select.appendChild(options);
  }
};




function dateValidation () {
  const splitDate = inputDate.value.split('/')
  const day = splitDate[0]
  const month = splitDate[1]
  const year = splitDate[2]

  if(day < 0 || day > 31){
    alert('Dia inválido')
  }
  if(month < 0 || month > 12) {
    alert('Mês inválido')
  } 
  if(year < 0) {
    alert('Ano inválido')
  }
}

inputDate.addEventListener('keyup', dateValidation)


function pagedata(){
  createOptions();

}

  window.onload = pagedata;
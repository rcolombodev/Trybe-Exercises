const select = document.getElementById("estado");
const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goías",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraíma",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

function createOptions() {
  for (let index = 0; index < states.length; index += 1) {
    const options = document.createElement("option");
    options.innerText = states[index];
    select.appendChild(options);
  }
}

const picker = new Pikaday({ field: document.getElementById("datepicker") });
const field = document.getElementById("datepicker");
function pickDay() {
  var picker = new Pikaday({
    onSelect: function (date) {
      field.value = picker.toString();
    },
  });
}

field.addEventListener("keyup", pickDay);

function pagedata() {
  createOptions();
}

window.onload = pagedata;

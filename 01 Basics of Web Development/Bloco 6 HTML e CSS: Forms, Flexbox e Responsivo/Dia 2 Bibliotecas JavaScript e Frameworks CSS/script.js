import './node_modules/just-validate/dist/js/just-validate.js'

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
    onSelect: function () {
      field.value = picker.toString();
    },
  });
}


function pagedata() {
  createOptions();
  new window.JustValidate('.js-form', {
    rules: {
      name: {
        required:true,
        minLength:3,
        maxLength:40
      },
      cpf: {
        required:true,
        maxLength: 11
      },
      address: {
        required:true,
        maxLength: 200
      },
      city: {
        required:true,
        maxLength: 28
      },
      state: {
        required:true
      },
      radio: {
        required:true
      },
      curriculo: {
        required:true,
        maxLength: 1000
      },
      cargo: {
        required:true,
        maxLength: 40
      },
      description: {
        required:true,
        maxLength: 500
      },
      date: {
        required:true
      },
    },
    messages: {
      name: {
        required: 'O campo de nome é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      email: {
        required: 'O campo de e-mail é obrigatório.'
      },
      cpf: {
        required: 'O campo de CPF é obrigatório.',
        maxLength: 'O limite é de 11 caracteres.'
      },
      address: {
        required: 'O campo endereço é obrigatório.',
        maxLength: 'O limite é de 200 caracteres.'
      },
      city: {
        required: 'O campo cidade é obrigatório.',
        maxLength: 'O limite é de 28 caracteres.'
      },
      state: {
        required: 'O campo estado é obrigatório.',
      },
      radio: {
        required: 'A escolha de uma opção é obrigatória.',
      },
      curriculo: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 1000 caracteres.'
      },
      cargo: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      description: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 500 caracteres.'
      },
      date: {
        required: 'Este campo é obrigatório.',
      }
    },
    submitHandler: function (form, values) {
        console.log(form, values);
    }});
}

window.onload = pagedata;

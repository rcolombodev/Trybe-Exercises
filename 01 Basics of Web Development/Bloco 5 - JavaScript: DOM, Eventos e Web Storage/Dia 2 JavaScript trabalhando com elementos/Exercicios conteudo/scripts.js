// // Parte 1

// // Acesse o elemento elementoOndeVoceEsta .
// // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// // Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// // Acesse o primeiroFilho a partir de pai .
// // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// // Agora acesse o terceiroFilho a partir de pai .

document.getElementById('elementoOndeVoceEsta')

document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'Blue';

let addingText = document.getElementById('primeiroFilhoDoFilho')
addingText.innerText = 'Olá, mundo!'

document.getElementById('pai').firstElementChild;

document.getElementById('elementoOndeVoceEsta').previousElementSibling;

document.getElementById('elementoOndeVoceEsta').nextSibling;

document.getElementById('elementoOndeVoceEsta').nextElementSibling;

document.getElementById('pai').lastElementChild.previousElementSibling;

// // Parte 2

// // Crie um irmão para elementoOndeVoceEsta .
// // Crie um filho para elementoOndeVoceEsta .
// // Crie um filho para primeiroFilhoDoFilho .
// // A partir desse filho criado, acesse terceiroFilho .

let pai = document.getElementById('pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling

// Parte 3

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  let currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();

for (let index = elementoOndeVoceEsta.childNodes.length - 1; index >= 0; index -= 1) {
  let currentChildren = elementoOndeVoceEsta.childNodes[index];
  if (currentChildren.id !== 'primeiroFilhoDoFilho') {
    currentChildren.remove();
  }
}

for (let index = primeiroFilhoDoFilho.childNodes.length - 1; index >= 0; index -= 1) {
  let currentChildren = primeiroFilhoDoFilho.childNodes[index];
  if (currentChildren.id !== 'primeiroFilhoDoFilho') {
    currentChildren.remove();
  }
}

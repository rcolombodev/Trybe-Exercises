//Aprofunde seus conhecimentos
// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// >Cor de fundo da tela;
// >Cor do texto;
// >Tamanho da fonte;
// >Espaçamento entre as linhas do texto;
// >Tipo da fonte ( Font family ).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.




window.onload = function(){
  
  // Manipula a cor do background

  let selectBackground = document.querySelector('select');
  selectBackground.addEventListener('change', function(){
    let selectedColor = selectBackground.selectedOptions[0];
    document.body.style.backgroundColor = selectedColor.value

    localStorage.setItem('background-color', selectedColor.value);
  });
  
  // Manipula tamanho da fonte

  let inputFontSize = document.querySelector('input[name="font-size"]');
  let main = document.querySelector('main');
  inputFontSize.addEventListener('change', function(){
    main.style.fontSize = `${inputFontSize.value}px`;

    localStorage.setItem('font-size', `${inputFontSize.value}px`)
  });

  // Manipula cor da fonte

  let selectTextColor = document.querySelector('input').previousElementSibling;
  selectTextColor.addEventListener('change', function(){
    let selectedColor = selectTextColor.selectedOptions[0];
    main.style.color = selectedColor.value

    localStorage.setItem('font-color', selectedColor.value)
  })  

  // Manipula fonte do texto

  let selectFontText = document.querySelector('select[name=fontText]');
  selectFontText.addEventListener('change',function(){
    let selectedFontText = selectFontText.selectedOptions[0];
    console.log(selectedFontText)
    main.style.fontFamily = selectedFontText.value

    localStorage.setItem('font-text', selectedFontText.value)
  })

  // Manipula espaçamentos das linhas
  let inputLineHeight = document.querySelector('input[name="line-height"]');
  inputLineHeight.addEventListener('change', function(){
    main.style.lineHeight = `${inputLineHeight.value}px`;

    localStorage.setItem('line-height', `${inputLineHeight.value}px`)
  });
  
  
  // Recupera as ultimas preferencias armazenadas do usuario.

  let backgroundStorage = localStorage.getItem('background-color');
  document.body.style.backgroundColor = backgroundStorage
  
  let fontSizeStorage = localStorage.getItem('font-size');
  main.style.fontSize = fontSizeStorage

  let fontColorStorage = localStorage.getItem('font-color')
  main.style.color = fontColorStorage

  let fontTextStorage = localStorage.getItem('font-text');
  main.style.fontFamily = fontTextStorage

  let lineHeightStorage = localStorage.getItem('line-height')
  main.style.lineHeight = lineHeightStorage
}
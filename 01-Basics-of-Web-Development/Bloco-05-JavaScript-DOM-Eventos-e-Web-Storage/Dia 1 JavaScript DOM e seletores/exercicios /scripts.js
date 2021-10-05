function changeText() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerText = 'Ser um desenvolvedor fullstack de primeira';
  }
  changeText();
  
  function changeColorToGreen(){
  let mainContent = document.getElementsByClassName('main-content')[0];
  mainContent.style.backgroundColor ='rgb(76,164,109)';
  }
  changeColorToGreen();
  
  function changeToWhite(){
  let centerContent = document.getElementsByClassName('center-content')[0];
  centerContent.style.backgroundColor = 'white';
  }
  changeToWhite();
  
  function correctText(){
  document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript'
  }
  correctText();

  function pToUpperCase(){
    let paragraph = document.getElementsByClassName('center-content')[0];
    paragraph.innerText = paragraph.innerText.toUpperCase();
  }
  pToUpperCase();

  function showAllParagraphs(){
    let allParagraphs = document.getElementsByClassName('center-content');
    for(let index = 0; index < allParagraphs.length; index += 1) {
      console.log(allParagraphs[index].innerText);
    }
  }
  showAllParagraphs();
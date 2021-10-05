// 3- Agora inverta o lado do triângulo.
let n = 5;
let linha = "";
let asteriscos = "*";
let tamanhoColuna = n;

for (index = 0; index <= n; index +=1){
  for (index2 = 0; index2 <= n; index2 +=1){
    if(index2 < tamanhoColuna) {
      linha = linha + " ";
    }else{
      linha = linha + asteriscos;
    }
  } 
    console.log(linha);
    linha = "";
    tamanhoColuna -= 1;   
}

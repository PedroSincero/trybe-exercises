//Posição da rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posicao da peça alvo
let posicaoPecaLinha = 6;
let posicaoPecaColuna = 7;

// indentifica se o ataque foi bem sucedido ou não
let ataqueBemSucedido = false;

//se a posicao da rainha for estritamente igual a peça linha, eu posso atacar a peça, se eu posso pego ataquebemsucedido e re atribuo para true.

// || adiciona o pipe que significa "ou"
if ((posicaoRainhaLinha === posicaoPecaLinha)  || (posicaoRainhaColuna === posicaoPecaColuna)) {
  ataqueBemSucedido = true;
}

//Diagonal Superior Direita

//cria uma variavel chamada sup dir que começa do (1), em quanto ela for menor que o maximo do tabuleiro (8) ira passar de 1 em 1.
for(let supDir = 1; supDir < 8; supDir+= 1){
  // pegamos a posicao da rainha linha e somar a posição supdir, desse jeito para cada repetição ele vai aumentar em 1 a linha da rainha, isso sera feito para coluna tb
  let linhaRainha = posicaoRainhaLinha + supDir;
  let colunaRainha = posicaoRainhaColuna + supDir;

  //se a linha rainha for maior do que o 8, ou se a coluna rainha for maior doq 8 vamo dar um break
  if((linhaRainha > 8 )|| (colunaRainha > 8)){
    break;
  }

  //verificar a posição da peçaLinha é igual ao linhaRainha, e(&&) posicao da pegaColuna for igual a coluna Rainha, irá re atribuir o valor ataque bem sucedido para TRUE.
  if((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}


//supuperior  esquerda
for(let supEsq = 1; supEsq < 8; supEsq+= 1){
  
  let linhaRainha = posicaoRainhaLinha + supEsq;
  //indo para esquerda voce aumenta uma linha e diminui o valor da coluna
  let colunaRainha = posicaoRainhaColuna - supEsq;

 // o valor minimo da coluna esquerda deve ser 1 
  if((linhaRainha > 8 )|| (colunaRainha < 1)){
    break;
  }

  
  if((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}

//inferior esquerda
for(let infEsq = 1; infEsq < 8; infEsq+= 1){
  
  let linhaRainha = posicaoRainhaLinha - infEsq;
  //indo para esquerda voce aumenta uma linha e diminui o valor da coluna
  let colunaRainha = posicaoRainhaColuna - infEsq;

 // - - 
  if((linhaRainha < 1 )|| (colunaRainha < 1)){
    break;
  }

  
  if((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}

//inferior direito
for(let infDir = 1; infDir < 8; infDir+= 1){
  
  let linhaRainha = posicaoRainhaLinha - infEsq;
  //indo para esquerda voce aumenta uma linha e diminui o valor da coluna
  let colunaRainha = posicaoRainhaColuna + infEsq;

 // - - 
  if((linhaRainha < 1 )|| (colunaRainha < 8)){
    break;
  }

  
  if((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}



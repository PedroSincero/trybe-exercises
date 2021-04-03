//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(palavra) {
  let arrayLetras = palavra.split("");
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

console.log(esPalindrome('palindromo'));
console.log(esPalindrome('churrasco'));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//let values = [2,3,6,7,10,1];

//1 - criamos uma função chamada maiorValor que terá como parametro (numero);
//2 - dentro da função colocamos uma variavel let chamada 'maior' que irá conter '0';
//3 - em seguida criamos um laço de repetição para o (numero), aonde key irá passar por cada array de (numero);
//4 - criamos um if aonde se (numero)contendo entre colchetes [maior]
function maiorValor(numero) {
  let maior = 0 ;
  for(let key in numero) {

    if(numero[maior] < numero[key]) {
      maior = key;
    }
  }
  return maior;
}
console.log(maiorValor([2,30,6,7,10,1]));
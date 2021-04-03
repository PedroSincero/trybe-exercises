// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false .


let a = 1;
let b = 3;
let c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);
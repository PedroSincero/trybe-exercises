let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array.

let smallestNumber = 1000;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);
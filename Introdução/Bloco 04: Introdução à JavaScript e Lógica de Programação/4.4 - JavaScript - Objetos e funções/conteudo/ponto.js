// Desafio 8
{
  // seu código aqui
  // utilização de if & else
  for (let key in numbers) {
    if (numbers[key] % 3 === 0) {
      console.log("fizz")
    }
  }
}
console.log(fizzBuzz());
1 1 1

function fizzBuzz(numbers) {
  let resultado = []
  for (let key in numbers) {
    if (numbers[key] % 3 === 0 && numbers[key] % 5 === 0) {
      resultado.push("fizzBuzz");
    } else if (numbers[key] % 3 === 0) {
      resultado.push("fizz");
    } else if (numbers[key] % 5 === 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
}
console.log(fizzBuzz([9, 25]));
function highestCount(numbers) {
  let max = 0;
  let repete = 0;
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > max) {
      max = numbers[index];
    }
  }
  for (let key in numbers) {
    if (max === numbers[key]) {
      repete += 1
    }
  }
  return repete;
}

console.log(highestCount([0, 0, 0]));
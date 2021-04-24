const math = require('./mathRandom');

console.log(math.generateNumbers());

describe('EXERCISES 2:  Testing the New Implementations', () => {


  it('tests whether division 10/2 will return 5', () => {
    math.generateNumbers = jest.fn().mockImplementationOnce((num1, num2) => num1 / num2);
    expect(math.generateNumbers(10,2)).toBe(5);
  });
  it('whether the function is being called', () => {
    expect(math.generateNumbers).toHaveBeenCalled();
  });
  it('how many times the function is called', () => {
    expect(math.generateNumbers).toHaveBeenCalledTimes(1);
  });
});
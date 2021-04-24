const math = require('./mathRandom');



describe('EXERCISES 1: testing the number generation function', () => {
  it('whether the function returns 10', () => {
    math.generateNumbers = jest.fn().mockReturnValueOnce(10)
    expect(math.generateNumbers()).toBe(10);
  });

  it('whether the function is being called', () => {
    expect(math.generateNumbers).toHaveBeenCalled();
  });

  it('how many times the function is called', () => {
    expect(math.generateNumbers).toHaveBeenCalledTimes(1);
  });

});
const sum = require('./ex1');

describe(' Testa a função sum', () => {
    test('Testa se o resultado é uma função', () => {
        expect(typeof sum).toBe('function');
    });
    test('Testa se a função faz soma', () => {
        expect(sum(4, 5)).toBe(9);
    });
    test('Testa se a função somando 0 receberá 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    test('Testa se a função dará erro ao receber uma string como parametro', () => {
        expect(() => {
            sum(4, '5')
        }).toThrow();
    });
});
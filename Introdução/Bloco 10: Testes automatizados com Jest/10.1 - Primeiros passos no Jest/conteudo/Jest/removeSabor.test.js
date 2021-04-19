const removeBebida = require('./removeSabor');

describe('Remove sabor de bebida', () => {
    it('Remover agua', () => {
        expect(removeBebida()).toEqual();
    });
    it('Remover garapa', () => {
        expect(removeBebida()).toEqual();
    });
    it('Remover groselha caso exista', () => {
        expect(removeBebida()).toEqual();
    });
});
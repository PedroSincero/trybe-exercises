const {
    getCities,
    removeCity,
    retrieveCitiesFromCache,
    requestCities,
    isCity,
    resetCities
} = require('./cities');

describe('Retrieving cities from cache'), () => {
  beforeEach(() => {
  retrieveCitiesFromCache();
  });
  afterEach(() => {
      resetCities();
  });
  
  
  test('Once I remove some city, my array should have 1 city left', () => {
      retrieveCitiesFromCache();
      removeCity('Belo Horizonte');
      expect(getCities().length).toBe(1);
  });
  
  test('should have 2 cities after retrieving from cache', () => {
      expect(getCities().length).toBe(2);
  });
}
  
describe('Requesting cities from api', () => {
  beforeEach(() => {
    resetCities();
  });

  afterEach(() => {
    resetCities();
  });

  it('should have 8 cities after requesting from api', () => {
    expect(getCities().length).toBe(8);
  });

  it('should have the city of Belo Horizonte', () => {
    expect(isCity('Belo Horizonte')).toBeTruthy();
  });

  it('should have the city of Fortaleza', () => {
    expect(isCity('Fortaleza')).toBeTruthy();
  });

  it('should have the city of São Paulo', () => {
    expect(isCity('São Paulo')).toBeTruthy();
  });
  
  it('should have the city of Recife', () => {
    expect(isCity('Recife')).toBeTruthy();
  });

  it('should have the city of Porto Alegre', () => {
    expect(isCity('Porto Alegre')).toBeTruthy();
  });

  it('should have the city of Goiânia', () => {
    expect(isCity('Goiânia')).toBeTruthy();
  });

  it('should have the city of Manaus', () => {
    expect(isCity('Manaus')).toBeTruthy();
  });
    
  it('should have the city of Piaui', () => {
    expect(isCity('Piaui')).toBeTruthy();
  });
});
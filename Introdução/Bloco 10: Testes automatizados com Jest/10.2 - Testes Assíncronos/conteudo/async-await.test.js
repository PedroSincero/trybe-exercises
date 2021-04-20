const Animals = [{
    name: 'Dorminhoco',
    age: 1,
    type: 'Dog'
  },
  {
    name: 'Soneca',
    age: 2,
    type: 'Dog'
  },
  {
    name: 'Preguiça',
    age: 5,
    type: 'Cat'
  },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({
        error: 'Não possui esse tipo de animal.'
      });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

describe('Quando o tipo do animal existe', () => {
  test('Testando com async/await', async () => {
    const listDogs = await getListAnimals('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });
  //Abaixo está o código para quando ocorre o reject da promise. É necessário adicionar o bloco try/catch .
  test('Testando com async/await, testando o reject', async () => {
    try {
      await getListAnimals('Lion');
    } catch (error) {
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    }
  });
});
//Perceba que a diferença entre elas é o async . Como existe uma promise a ser testada, é necessário o uso do await , para que o teste espere a finalização da promise e, em seguida, execute o teste remanescente. A variável listDogs recebe o retorno da promise e executa os testes.

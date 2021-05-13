/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  // 1° buscar as especies de animais por ID, Retornar um array contendo as especies referentes aos IDS, fazer com que receba mais de 1 ID
  // const teste = (...ids) => ids.animals.filter(((animal) => (animal.id === ids)));
  // return teste;
  // return animals.filter((animal) => (animal.id === ids)),{}
  const {
    animals,
  } = data;
  if (ids[1] !== undefined) {
    const idAnimal1 = animals.filter((animal) => (animal.id === ids[0]));
    const idAnimal2 = animals.filter((animal) => (animal.id === ids[1]));
    return idAnimal1.concat(idAnimal2);
  }
  return animals.filter((animal) => (animal.id === ids[0]));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  // 1º buscar o nome de todas as especie,2° puxar de uma especie separada, 3° criar parametro de idade minima para ser puxado, 4°
  const procuraAnimal = data.animals.find((furry) => (furry.name === animal));
  const procuraIdade = procuraAnimal.residents.map((idade) => ((idade.age >= age)));
  return procuraIdade.every((idades) => (idades === true));
  // return teste;
}

function employeeByName(employeeName) {
  // seu código aqui
  // Agradecimentos ao Rafael Guimieri
  const {
    employees,
  } = data;
  if (employeeName !== undefined) {
    return employees.find((nm) => (nm.firstName === employeeName || nm.lastName === employeeName));
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  // 1° verificar 1 pessoa dado o parametro
  // 2°verificar o seu cargo de gerencia
  // let resultado = data.employees.filter((element) => element.managers.forEach((item) => (item === id) ? true : false));
  // return resultado;
  let cont = 0;
  data.employees.filter((manager) => manager.managers.forEach((item) => {
    if (item === id) {
      cont += 1;
    }
  }));
  if (cont > 0) {
    return true;
  }
  return false;
}
// Concluido com a Colaboração de Daniel ROberto
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // agradecimentos ao Daniel Roberto
  const {
    employees,
  } = data;
  const teste1 = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  if (managers === undefined) {
    teste1.managers = [];
  }
  if (responsibleFor === undefined) {
    teste1.responsibleFor = [];
  }
  return employees.push(teste1);
}

function animalCount(species) {
  // agradecimentos, dainel roberto
  // agradecimentos ao site https://stackoverflow.com/questions/41625399/how-to-handle-eslint-no-param-reassign-rule-in-array-prototype-reduce-function#
  const {
    animals,
  } = data;
  if (species !== undefined) {
    return animals.find((animal) => animal.name === species).residents.length;
  }
  if (species === undefined) {
    return animals.reduce((call, qtd) => ({
      ...call,
      [qtd.name]: qtd.residents.length,
    }), {});
  }
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined) {
    return 0;
  }
  const teste3 = Object.keys(entrants);
  let total = 0;
  teste3.forEach((key) => {
    const result = data.prices[key] * entrants[key];
    total += result;
  });
  return total;
}
// animal Map ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1° Mock que retorna a Localização
function retrieveAvailableLocations() {
  return ['NE', 'NW', 'SE', 'SW'];
}
// 2°função que verifica a localização, também serve para o retorn vazio.
function retrieveAnimalsPerLocation(locations) {
  const animalsPerLocation = {};

  locations.forEach((location) => {
    const filteredAnimals = data.animals
      .filter((animal) => animal.location === location)
      .map((animal) => animal.name);

    animalsPerLocation[location] = filteredAnimals;
  });
  return animalsPerLocation;
}
// 3° função para localização & organizar em ordem alfabetica o nome de cada animal 3.1 - verifica o sexo depois de conter em suas mãos o filter de residents, e durante este processo será resolvido um parametro if, aonde verificará se contem sex.
// Tive que fazer diversas modificaçõis pois o esLint detesta minha forma de codar >:C.
function retriveAnimalsPerLocationsWithNameSortedSex(locations, sorted, sex) {
  const animalsPerLocation = {};
  locations.forEach((location) => {
    const filteredAnimals = data.animals
      .filter((animal) => animal.location === location).map((animal) => {
        const nameKey = animal.name;
        const nmValu = animal.residents.filter((resident) => (sex ? resident.sex === sex : true))
          .map((resident) => resident.name);
        if (sorted) {
          nmValu.sort();
        }
        return {
          [nameKey]: nmValu,
        };
      });

    animalsPerLocation[location] = filteredAnimals;
  });
  return animalsPerLocation;
}

function animalMap(options) {
  // MUITOS agradecimentos ao Gabriel Oliva, instrutor da trybe com toda certeza  sem ele, eu não iria conseguir terminar e ENTENDER oq foi feito da maneira que está atualmente o codigo.
  const locations = retrieveAvailableLocations();
  if (!options) {
    return retrieveAnimalsPerLocation(locations);
  }
  const {
    includeNames = false, sex, sorted = false,
  } = options;
  if (includeNames) {
    return retriveAnimalsPerLocationsWithNameSortedSex(locations, sorted, sex);
  }
  return retrieveAnimalsPerLocation(locations);
}
// End AnimalMap ---------------------------------------------------------------------------------------------------------------------------------------------------------------
function schedule(dayName) {
  const daysSchedules = {};
  const weekDays = Object.keys(data.hours);
  weekDays.forEach((day) => {
    const {
      open,
      close,
    } = data.hours[day];
    daysSchedules[day] = `Open from ${open}am until ${close - 12}pm`;
    if (daysSchedules[day] === daysSchedules.Monday) {
      daysSchedules.Monday = 'CLOSED';
    }
  });
  if (!dayName) {
    return daysSchedules;
  }
  return {
    [dayName]: daysSchedules[dayName],
  };
}

function oldestFromFirstSpecies(id) {
  // agradecimentos ao Renan Antunes por ter me auxiliado no eslint
  const searchCollaborators = data.employees.find((collab) => collab.id === id).responsibleFor[0];
  const searchAnimals = data.animals.find((animal) => animal.id === searchCollaborators).residents;

  const total = searchAnimals.reduce((oldAnimal, animal) => {
    if (oldAnimal.age < animal.age) {
      return Object.values(animal);
    }
    return oldAnimal;
  });
  return total;
}

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};

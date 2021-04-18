// const searchAnimal = data.animals.filter((furry) => (furry.name === animal));
// // // const searchAge = animals.residents[0];
// // // console.log(searchAnimal);
// // const teste = Object.values(searchAnimal).every((comparAge) => comparAge.age > age);
// return searchAnimal.residents.map((idade) => ((idade.age > age) ? true : false
// ));


const { employees } = data;
  const teste1 = employees.find((name) => (name.firstName === employeeName));
  const teste2 = employees.find((name) => (name.lastName === employeeName),[])
  if (employeeName === undefined) {
    return {};
  }
  else if(employeeName !== undefined) {
    return teste1;
  }else
  return teste2;
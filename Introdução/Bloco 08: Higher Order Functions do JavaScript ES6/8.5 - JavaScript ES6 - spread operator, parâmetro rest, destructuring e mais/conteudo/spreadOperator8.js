// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['salame', 'pipoca', 'balinhas fini'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
 const resultado = [...fruit, ...additional];
 return resultado;
};

console.log(fruitSalad(specialFruit, additionalItens));
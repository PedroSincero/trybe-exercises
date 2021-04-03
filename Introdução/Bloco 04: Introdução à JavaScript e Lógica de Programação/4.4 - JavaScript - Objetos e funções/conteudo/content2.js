//pedidos de pizza 
let pizzas = {
  sabor: 'Palmito',
  preco: 39.90,
  bordaCatupiry: true
};
// cria um laço de repetição de Objetos

// o exemplo de baixo irá mostrar sabor,preco,bordacatupiry
for (let key in pizzas) {
  console.log(key);
}

//mostra todos os objetos por linha e repete por ter 3 chaves
for (let key in pizzas) {
  console.log(pizzas);
}

//dessa forma ira trazer somente o resultado dentro do preco e repetir por ter 3 chaves
for (let key in pizzas) {
  console.log(pizzas.preco);
}

//dessa forma irá trazer cada valor dentro das propriedades
for (let key in pizzas) {
  console.log(pizzas[key]);
}

// forma alternativa de acessar oq tem dentro da propriedade
for (let key in pizzas) {
  console.log(pizzas['bordaCatupiry']);
}


let pizzasDoces = ['chocolate', 'banana', 'morango'];

// desta forma mostra as posições de um array
for(let key in pizzasDoces) {
  console.log(key);
}

// mostra as 3 posições dentro do array e repete elas 3 vezes
for(let key in pizzasDoces) {
  console.log(pizzasDoces);
}

//mostra 1 item de cada  vez que estiver dentro do array
for(let key in pizzasDoces) {
  console.log(pizzasDoces[key]);
}

// mostrar mais de uma informação contido em uma let
for(let key in pizzasDoces) {
  console.log(key, pizzasDoces[key]);
}
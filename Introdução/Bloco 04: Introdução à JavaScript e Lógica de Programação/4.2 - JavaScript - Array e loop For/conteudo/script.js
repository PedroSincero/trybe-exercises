//Variavel Simples
let  variavel = "valor";

// exemplo sem utilização de array
let pizza1 = '4 Queijos';
let pizza2 = 'Frango com Catupiry';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate';

console.log(pizza1,pizza2,pizza3,pizza4,pizza5)

//variavel composta

// Array com Valores []
// Chave ou Indice

//tudo que é composto por chaves é um Array[] e dentro do array tem os Indices 0,1,2,3...
let pizzas = ['4 Queijos','Frango com Catupiry','Marguerita','Palmito','Chocolate'];

//[5] - Forma de adicionar mais um valor dentro do Array, precisa colocar a Posição do Indice oq será colocado apois o sinal de = .
pizzas[5] = "Peito de Peru";

//.push - Adiciona mais um valor dentro do Array sem precisar colocar a posição, meio que empurra oq está dentro dos parenteses para o array.
pizzas.push("Costelinha de Porco");


// Arrays começam com Posição 0, no exemplo abaixo as posições são 0,1,2,3,4 
console.log("Menu de sabores" + pizzas);

//.length - Mostra quantos elementos tem dentro do Array
console.log(pizzas.length);

//.sort - Vai mostrar o array em ordem 
console.log(pizzas.sort());

// indice[] - puxa o indice selecionado dentro da chave
console.log(pizzas[0]);

//for - ele cria uma repetição seguindos os parametro dados

for (let index = 0; index < pizzas.length; index += 1) {
  console.log(pizzas[index]);
  
}
//Example #1
var numero = 7;

for(var contador = 1; contador <= 9; contador = contador++) {

  console.log(numero * contador);
}

//Example #2

let listaDeNomes = ["Joana", "Maria", "Lucas"];

for(var indice =0; indice < listaDeNomes.length; indice++) {
  let mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
  console.log(mensagem)
}

//Suponha que você possua uma lista com marcas de carros

let cars = ["Saab", "Volvo", "BMW"];

//Anteriormente para apresentar esses valores, o código que executa essa tarefa seria.

console.log(cars[0]) // Saab
console.log(cars[1]) // Volvo
console.log(cars[2]) // BMW

//Mas, agora que você conhece o for , você pode melhorar o código para algo do tipo

let cars = ["Saab", "Volvo", "BMW"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}

//Os dois códigos geram o mesmo resultado, mas o segundo é muito mais adequado. Pense que, em vez de 3 carros, essa lista possuísse 1000. No primeiro código, você teria que escrever 1000 linhas!
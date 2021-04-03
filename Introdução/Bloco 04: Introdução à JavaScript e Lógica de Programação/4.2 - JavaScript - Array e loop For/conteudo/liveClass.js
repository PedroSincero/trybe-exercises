//variavel com array
let megaSenaNumbers = [];

//gera um numero aleatorio
// de 1 a 60
let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

//.ceil arredonda o numero inteiro para cima
// console.log(Math.ceil(1.9));

//.floor arredonda o numero inteiro para baixo
// console.log(Math.floor(1.9));

//Re-atribuindo valor colocando os resultados em array
megaSenaNumbers = [firstNumber,secondNumber,thirdNumber,fourthNumber,sixthNumber];

//Numeros Selecionados
let turma10Play = [20, 40, 35, 9, 17, 52];
let turma10Play2 = [13, 15, 22, 30, 48, 50];
let turma10Play3 = [27, 48, 36, 12, 3, 22];

//junção de arrays
let megaSenaGames = [turma10Play, turma10Play2, turma10Play3];

//repetição para criar mais de 1 jogo sorteado
for (let games = 0; games < megaSenaGames.length; games += 1) {
  let numberOfHits = 0;

  for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
    for(let indexPlay = 0; indexPlay < megaSenaGames[games].length; indexPlay += 1) {
  //se o megaSenaNumber, se o primeiro  numero for estritamente igual ao turma10play [indexplay] acrescentará 1 em number
      if (megaSenaNumbers[indexMega] === megaSenaGames[games][indexPlay]) {
        numberOfHits += 1;
      }
    }
  }
console.log("Jogada" +(games + 1));
console.log(`Mega-Sena: ${megaSenaNumbers}`);
console.log(`Jogo: ${megaSenaGames[games]}`);
console.log("Acertos: " + numberOfHits);
console.log("-----------------------------");
}
//for (initialization; condition;increment++/decrement--) 
//    execute Code
// Console.writeline("Hello World");
//    Comes to Loop

//Cria uma repetição aonde em quanto index for menor doq X o loop irá funcionar, se ele for maior ou igual ele sai do For, com o lenght ele será executado 1 por 1

//contador


console.log(`Mega-Sena: ${megaSenaNumbers}`);
console.log(`Jogo da Turma 10: ${turma10Play}`);
console.log("Acertos: " + numberOfHits);

 


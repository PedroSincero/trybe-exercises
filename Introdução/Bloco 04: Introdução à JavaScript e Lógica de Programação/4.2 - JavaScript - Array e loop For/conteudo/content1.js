//Uma das grandes vantagens dos arrays é o armazenamento de várias informações em uma mesma estrutura.
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

//Sempre que precisar armazenar várias informações, o Array é uma boa alternativa e será uma ferramenta muito útil. 
//Observamos que por meio do .length , você consegue ter acesso à quantidade de elementos contidos nele. Agora, como podemos acessar essas informações?
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//Como podemos observar, é possível acessar os arrays pelo seu índice. 
let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

//Primeira posição do array é representada pelo número 0.Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1 
let searchForLastTask = tasksList[tasksList.length - 1 ];
console.log(searchForLastTask);
// Brincar com o cachorro

console.log(tasksList.length)

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//Repare que o método .push() adiciona um novo item no final do array. 

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

//Se precisarmos adicionar no início, podemos usar o .unshift() . Teste em seu console e veja o resultado.
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Fazer Exercicios da Trybe','Tomar café', 'Reunião', 'Brincar com o cachorro']

//Espero que esteja animado e se perguntando: "Ok. Agora como faço para remover?" .O método .pop() permite que você remova o último item do array.
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

//Agora, se precisar remover o primeiro item da lista, você pode usar o .shift() .
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift();  // remove a primeira tarefa
console.log(tasksList);

//'Reunião', 'Brincar com o cachorro'

//Outra importante ferramenta é o indexOf() , usado para procurar o índice de um item no Array . 

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1
let name = 'Milton';
let lastName = 'Nascimento';
let nickName = 'Bituca';
let age = 77;
let bestAlbuns = ['Travessia', 'Clube da Esquina', 'Minas'];

// Objeto literal

let singer = {
  //possui entradas/propriedades, valor da propriedade
  name: 'Milton',
  lastName: 'Nascimento',
  nickName: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  bornInfo: {
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro'
  }
};

// como acessar as informações do objeto
// variavel.propriedade

console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

//forma alternativa de acessar as informações do objeto
//Cenario para utilização desta forma alternativa seria para criar propriedades novas de forma DINAMICA
console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

// criando propriedade e atribuindo um valor a ela
singer['fullName'] = singer.name + ' ' + singer.lastName;

//mostra a informação inserida em formato de tabela
console.table(singer);

//acessando objeto dentro de objeto
console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);
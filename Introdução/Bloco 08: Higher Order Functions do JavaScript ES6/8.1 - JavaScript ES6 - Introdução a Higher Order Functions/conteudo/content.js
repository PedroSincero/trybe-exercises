const product = (productName, price, isOnSale) => ({
  productName,
  price: `R$ ${price}`,
  sale: isOnSale ? 'For sale' : 'Not for sale',
});

console.log(product('Computador', 3000, false));
// { productName: 'Computador', price: 'R$ 3000', sale: 'Not for sale' }








//  mais incrível é que você já aplicou este conceito na prática. Veja este exemplo:

const button = document.querySelector('#signup-button');

// minha função de primeira classe;
const registerUser = () => {
  // código para registrar a nova pessoa usuária;
  console.log('Registrado com sucesso!');
};

// minha função de segunda classe;
button.addEventListener('click', registerUser);

//

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);
repeat(5, console.table);
repeat(5, console.group);


//

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15));
// true
console.log(greaterThan(18)(15));
//true ?

// Ao chamarmos a função desta forma:
const greaterThan10 = greaterThan(10);

// Na prática é a mesma coisa que realizar assim:
const greaterThan10 = (secondNumber) => {
  return secondNumber > 10; // O parâmetro nomeado como "firstNumber" foi ocupado;
};

console.log(greaterThan10(15));

// Retornando o nosso resultado abaixo:
// true

// Ao chamar a função doingThings:
const doingThings = (acordado) => (wakeUp) => 'acordado'; {
  if(acordado == wakeUp){
    return console.log('Acordando!!');
  }
}

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
doingThings(wakeUp);

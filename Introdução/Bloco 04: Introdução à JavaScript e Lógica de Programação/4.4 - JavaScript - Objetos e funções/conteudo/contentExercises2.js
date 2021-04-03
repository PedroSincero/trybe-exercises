//Depois de conhecer o laço for/in , o código que mostra as marcas de carros presentes em um Array é:

let cars = ["Saab", "Volvo", "BMW"];

for (let i in cars) {
  console.log(cars[i]);
}

//Um outro exemplo é a iteração nas chaves de um objeto:

let car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

for (let i in car) {
  console.log(i, car[i]);
}
// apiScript.js

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    // Adicionar lógica aqui!
    const myObject = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => 
            document.getElementById('jokeContainer').innerText = data.joke);
};
// innerText = JSON.stringify(data.joke));
// const promise = new promise(() => {
//     let result = [];
//     const number = Math.floor(Math.random()* 50);
//     console.log(promise);
// })
// window.onload = () => fetchJoke();
//1° forma
const result = [];
for(let index = 0; index < 10; index+=1){
    const number = Math.floor(Math.random()* 50);
    result.push(number);
}


console.log(result);
//2° forma
const myArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);

console.log(myArray);

const sum = myArray.map(number => number * number)

console.log(sum);
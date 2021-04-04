// Exercise 2
const elementsH3 = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
  elementsH3[index].className = 'description';
}
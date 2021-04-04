// Exercise - 8

const elementUl = document.createElement('ul');
elementDivRight.appendChild(elementUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
for (let num in arrayNumbers) {
const elementLi = document.createElement('li');
elementLi.innerHTML = arrayNumbers[num];
elementUl.appendChild(elementLi);
}
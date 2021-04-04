 // Exercise - 9
 
 for (let index = 1; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Show ' + index;
    elementDivMain.appendChild(elementH3);
  }
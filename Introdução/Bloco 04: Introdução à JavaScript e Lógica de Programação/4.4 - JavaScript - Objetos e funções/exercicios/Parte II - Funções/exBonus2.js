function add(num1, num2) {
    const arrNum1 = num1.toString().split('').reverse();
    const arrNum2 = num2.toString().split('').reverse();
    let lessArr;
    let bigArr;
    const output = [];
  
    if (arrNum1.length > arrNum2.length) {
      bigArr = arrNum1;
      lessArr = arrNum2;
    } else {
      bigArr = arrNum2;
      lessArr = arrNum1;
    }
  
    for (let index = 0; index < bigArr.length; index += 1) {
      if (lessArr[index] !== undefined) {
        output[index] = parseInt(bigArr[index]) + parseInt(lessArr[index]);
      } else {
        output[index] = parseInt(bigArr[index]);
      }
    }
  
    return parseInt(output.reverse().join(''));
  }
console.log('////////////////////////더하고 빼기////////////////////////');
const plusMinus = (number = 325) => {
  let resultNumber = 0;
  const recursiveFunc = paramResult => {
    let currentNumber = paramResult;
    let splitNumber = String(paramResult).split('');
    let minusNumber = 0;
    for (let i = 0; i < splitNumber.length; i++) {
      minusNumber = minusNumber + Number(splitNumber[i]);
    }
    const result = currentNumber - minusNumber;

    if (result > 100) {
      recursiveFunc(result);
    } else {
      resultNumber = result;
    }
  };
  recursiveFunc(number);
  return resultNumber;
};
console.log(
  plusMinus(),
  '------------------결과 : 항상 99가 나옵니다 떄문에 어떠한 값이 오더라도 apple이 반환됩니다.------------------',
);

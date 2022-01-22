console.log('//////////////////////아이큐 테스트//////////////////');
const IQTest = (number = '1 3 5 7 8 11') => {
  const target = number.split(' ');

  let evenNumberArray = [];
  let OddNumberArray = [];
  for (let i = 0; i < target.length; i++) {
    if (Number(target[i]) % 2 === 0) {
      evenNumberArray.push(Number(target[i]));
    } else {
      OddNumberArray.push(Number(target[i]));
    }
  }
  if (evenNumberArray.length === 1) {
    return evenNumberArray[0];
  }
  return OddNumberArray[0];
};
console.log(IQTest());

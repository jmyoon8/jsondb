console.log('////////////////////////분기시키기////////////////////////');
const devide = month => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};
console.log('파라미터 3 결과 : ', devide(3));
console.log('파라미터 8 결과 : ', devide(8));
console.log('파라미터 11 결과 : ', devide(11));

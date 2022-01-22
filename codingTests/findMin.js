console.log(
  '////////////////////////사용하지 않는 가장 작은 숫자 찾기////////////////////////',
);
const findMin = (ids = [0, 1, 2, 3, 4, 5, 6, 6, 10, 10, 30]) => {
  let maxNumber = 0;
  for (let i = 0; i < ids.length; i++) {
    if (maxNumber < ids[i]) {
      maxNumber = ids[i];
    }
  }
  const subArray = Array(maxNumber).fill(undefined);

  for (let i = 0; i < ids.length; i++) {
    subArray[ids[i]] = true;
  }
  return subArray.indexOf(undefined);
};
console.log(findMin());

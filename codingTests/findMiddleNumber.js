console.log('//////////////////////중간값 찾기///////////////////////');
const findMiddleNumber = (arr = [1, 4, 10]) => {
  //오름차순으로 정렬
  const targetArr = arr.sort((a, b) => a - b);
  // 배열의 중간을 구함
  let middleIndex = Math.floor(targetArr.length / 2);
  return targetArr[middleIndex];
};
console.log(findMiddleNumber());

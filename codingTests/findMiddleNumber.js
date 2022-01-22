console.log('//////////////////////중간값 찾기///////////////////////');
const findMiddleNumber = (arr = [1, 4, 5]) => {
  //오름차순으로 정렬
  const targetArr = arr.sort((a, b) => a - b);
  // 배열의 중간을 구함
  let middleIndex = Math.floor(targetArr.length / 2);
  //      미들인덱스1    :  보정인덱스
  // 홀수일땐 보정인덱스는 미들인덱스와 같은 인덱스를 가르킴
  // 3/2=1.5.floor=>1 :  3-1 -1=1

  // 짝수일때만 보정인덱스는 미들인덱스의 전인덱스를 가르킨다.
  // 4/2=2.floor=>2   :  4-2 -1=1

  return (
    (targetArr[middleIndex] + targetArr[targetArr.length - 1 - middleIndex]) / 2
  );
};
console.log(findMiddleNumber());

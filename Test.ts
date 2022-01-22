console.log('////////////////////////분기시키기////////////////////////');
const devide = (month: Number) => {
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

console.log(
  '////////////////////////사용하지 않는 가장 작은 숫자 찾기////////////////////////',
);
const findMin = (ids: number[] = [0, 1, 2, 3, 4, 5, 6, 6, 10, 10, 30]) => {
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

console.log(
  '////////////////////////승점구하기 왼쪽이 우리팀일 경우////////////////////////',
);
const calcPoint = (
  pointArray: string[] = [
    '1:1',
    '3:1',
    '1:3',
    '1:1',
    '1:5',
    '5:1',
    '1:2',
    '3:1',
    '3:2',
    '4:3',
  ],
) => {
  let point = 0;
  for (let i = 0; i < pointArray.length; i++) {
    let myTeamPoint = Number(pointArray[i].split(':')[0]);
    let enemyTeamPoint = Number(pointArray[i].split(':')[1]);
    if (myTeamPoint > enemyTeamPoint) {
      point = point + 3;
    } else if (myTeamPoint === enemyTeamPoint) {
      point = point + 1;
    }
  }
  return point;
};
console.log(calcPoint());

console.log('////////////////////////더하고 빼기////////////////////////');
const plusMinue = (number: number = 325) => {
  let resultNumber = 0;
  const recursiveFunc = (paramResult: number) => {
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
  plusMinue(),
  '------------------결과 : 항상 99가 나옵니다 떄문에 어떠한 값이 오더라도 apple이 반환됩니다.------------------',
);

console.log('////////////////////////모음찾기////////////////////////');
const findVowel = (str: string = 'aeioyuasdadsqqieo') => {
  const target = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = 0;
  for (let i = 0; i < target.length; i++) {
    if (vowels.includes(target[i])) {
      result++;
    }
  }
  return result;
};
console.log(findVowel());

console.log('//////////////////////중간값 찾기///////////////////////');
const findMiddleNumber = (arr: number[] = [1, 4, 10]) => {
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

console.log('//////////////////////친구찾기//////////////////////');
const findFriend = (
  friendArr: string[] = ['ryan', 'mark', 'kim', 'kieran', 'james', 'four'],
) => {
  const result = friendArr.filter(item => item.length === 4);
  return result;
};
console.log(findFriend());
console.log('//////////////////////아이큐 테스트//////////////////');
const IQTest = (number: string = '1 3 5 7 8 11') => {
  const target = number.split(' ');

  let evenNumberArray: number[] = [];
  let OddNumberArray: number[] = [];
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

export {};

console.log(
  '////////////////////////승점구하기 왼쪽이 우리팀일 경우////////////////////////',
);
const calcPoint = (
  pointArray = [
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

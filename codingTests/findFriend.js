console.log('//////////////////////친구찾기//////////////////////');
const findFriend = (
  friendArr = ['ryan', 'mark', 'kim', 'kieran', 'james', 'four'],
) => {
  const result = friendArr.filter(item => item.length === 4);
  return result;
};
console.log(findFriend());

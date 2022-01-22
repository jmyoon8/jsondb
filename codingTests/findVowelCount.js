console.log('////////////////////////모음찾기////////////////////////');
const findVowel = (str = 'aeioyuasdadsqqieo') => {
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

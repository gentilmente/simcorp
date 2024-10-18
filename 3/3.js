/* function longestSubstring(str) {
  let sepArr = [];
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    const letI = arr[i];
    //console.log(letI, i);
    for (let j = i + 1; j < arr.length; j++) {
      const letJ = arr[j];
      if (letI === letJ) {
        //console.log(letI, i, j);
        sepArr.push(str.substring(i, j));
        break;
      }
    }
  }
  if (sepArr.length === 0) sepArr.push(str);
  return sepArr[0]; //.map((str) => str[0]).sort();
}
 */

/* function longestSubstring(str) {
  if (str.length === 0) return '';

  let start = 0;
  let maxLength = 0;
  let maxStart = 0;
  let charMap = new Map();

  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1;
    } else {
      if (end - start + 1 > maxLength) {
        maxLength = end - start + 1;
        maxStart = start;
      }
    }
    charMap.set(char, end);
  }

  return str.slice(maxStart, maxStart + maxLength);
}
 */

function longestSubstring(str) {
  if (str.length === 0) return '';

  let start = 0;
  let maxLength = 0;
  let maxStart = 0;
  let lastSeen = new Array(26).fill(-1);

  for (let end = 0; end < str.length; end++) {
    const charCode = str.charCodeAt(end) - 97;
    if (charCode < 0 || charCode > 25) continue;

    if (lastSeen[charCode] >= start) {
      start = lastSeen[charCode] + 1;
    } else if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      maxStart = start;
    }
    lastSeen[charCode] = end;
  }

  return str.slice(maxStart, maxStart + maxLength);
}
console.log(longestSubstring('abcabcbb'));
console.log(longestSubstring('aaaaaa'));
console.log(longestSubstring('abcde'));
console.log(longestSubstring('abcda'));

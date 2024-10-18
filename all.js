console.log('-'.repeat(12));
console.log('EXERCISE #1\n');
/*
EXERCISE #1
A  boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different. So create a function that returns the total number of boomerangs in an array.
Example : [1,4,1]
Expected result

counter([9, 5, 9, 5, 1, 1, 1]) ➞ 2
counter([5, 6, 6, 7, 6, 3, 9]) ➞ 1
counter([4, 4, 4, 9, 9, 9, 9]) ➞ 0

INFO

[2, 2, 2] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
*/

function counter(list) {
  let count = 0;

  for (let i = 0; i < list.length - 2; i++) {
    if (list[i] === list[i + 2] && list[i] !== list[i + 1]) {
      count++;
    }
  }
  console.log(count);
}

counter([9, 5, 9, 5, 1, 1, 1]);
counter([5, 6, 6, 7, 6, 3, 9]);
counter([4, 4, 4, 9, 9, 9, 9]);

/*----------------------------------------*/
console.log('-'.repeat(12));
console.log('EXERCISE #2\n');
/*
EXERCISE #2

Given a string of letters, create a function that returns an array with the separator that yields the longest possible substring, provided that:
The substring starts and ends with the separator.
The separator doesn't occur inside the substring other than at the ends.
If two or more separators yield substrings with the same length, they should appear in alphabetical order.

Examples

separator("supercalifragilistic") ➞ ["s"]
// The longest substring is "supercalifragilis".

separator("laboratory") ➞ ["a", "o", "r"]
// "abora", "orato" and "rator" are the same length.

separator("candle") ➞ []
// No possible substrings.

INFO

All substrings should be at least of length 2 (i.e. no single-letter substrings).
Expect lowercase alphabetic characters only.
*/

function separator(str) {
  let sepArr = [];
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    const letI = arr[i];
    //console.log(letI, i);
    for (let j = i + 1; j < arr.length; j++) {
      const letJ = arr[j];
      if (letI === letJ) {
        //console.log(letI, i, j);
        sepArr.push(str.substring(i, j + 1));
        break;
      }
    }
  }
  const maxLength = Math.max(...sepArr.map((str) => str.length));
  sepArr = sepArr.filter((str) => str.length === maxLength);

  console.log(sepArr.map((str) => str[0]).sort());
}

separator('happyanniversaryqontigo');
separator('futureofwork');
separator('Intranet');
separator('supercalifragilistic');
separator('laboratory');
separator('candle');

/*----------------------------------------*/
console.log('-'.repeat(12));
console.log('EXERCISE #3\n');
/*
EXERCISE #3
Write a function that returns the longest non-repeating substring for a string input.

Expected Result

longestSubstring("abcabcbb") ➞ "abc"
longestSubstring("aaaaaa") ➞ "a"
longestSubstring("abcde") ➞ "abcde"
longestSubstring("abcda") ➞ "abcd

INFO

If multiple substrings tie in length, return the one which occurs first.
Bonus: Can you solve this problem in linear time?
*/

function longestSubstring(str) {
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
  console.log(sepArr[0]);
}

longestSubstring('abcabcbb');
longestSubstring('aaaaaa');
longestSubstring('abcde');
longestSubstring('abcda');

/*----------------------------------------*/
console.log('-'.repeat(12));
console.log('EXERCISE #4\n');

/*
Exercise #4

Given a string containing just the characters ( and ), find the length of the longest valid (well-formed) parentheses substring.

Expected Result

sizeParentheses("(()") ➞ 2
// Longest valid parentheses substring is "()"

sizeParentheses(")()())") ➞ 4
// Longest valid parentheses substring is "()()"

sizeParentheses("()))))(()())(") ➞ 6
*/

function sizeParentheses(str) {
  const stack = [-1];
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        //console.log(i, stack, maxLength);
        //console.log(i - stack[stack.length - 1]);

        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
    //console.log(i, stack, maxLength);
  }

  console.log(maxLength);
}

sizeParentheses('(()');
sizeParentheses(')()())');
sizeParentheses('()))))(()())(');

/*----------------------------------------*/
console.log('-'.repeat(12));
console.log('EXERCISE #5\n');

/*
Exercise #5

The length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

Example

  [1, [2, 3]]
  2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Expected Result

  getLength([1, [2, 3]]) ➞ 3
  getLength([1, [2, [3, 4]]]) ➞ 4
  getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
  getLength([1, [2], 1, [2], 1]) ➞ 5
*/

function getLength(arr) {
  console.log(arr.flat(Infinity).length);
}

getLength([1, [2, 3]]);
getLength([1, [2, [3, 4]]]);
getLength([1, [2, [3, [4, [5, 6]]]]]);
getLength([1, [2], 1, [2], 1]);

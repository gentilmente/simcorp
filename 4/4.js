/* function sizeParentheses(str) {
  const n = str.length;
  const dp = new Array(n).fill(0);
  let maxLen = 0;

  for (let i = 1; i < n; i++) {
    if (str[i] === ')') {
      if (str[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && str[i - dp[i - 1] - 1] === '(') {
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      maxLen = Math.max(maxLen, dp[i]);
    }
  }

  return maxLen;
} */

/* function sizeParentheses(str) {
  let start = 0;
  let maxLength = 0;
  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    if (char === '(') {
      start = end;
    } else if (char === ')') {
      maxLength = end - start + 1;
    }
  }

  return maxLength;
}
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
        console.log(i, stack, maxLength);
        console.log(i - stack[stack.length - 1]);

        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
    console.log(i, stack, maxLength);
  }

  return maxLength;
}
console.log('::' + sizeParentheses('(()'));
console.log('::' + sizeParentheses(')()())'));
console.log('::' + sizeParentheses('()))))(()())('));

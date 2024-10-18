function counter(list) {
  let count = 0;

  for (let i = 0; i < list.length - 2; i++) {
    if (list[i] === list[i + 2] && list[i] !== list[i + 1]) {
      count++;
    }
  }

  return count;
}

// Test cases
function runTests() {
  console.assert(counter([9, 5, 9, 5, 1, 1, 1]) === 2, 'Test case 1 failed');
  console.assert(counter([5, 6, 6, 7, 6, 3, 9]) === 1, 'Test case 2 failed');
  console.assert(counter([4, 4, 4, 9, 9, 9, 9]) === 0, 'Test case 3 failed');
  console.assert(counter([4, 4, 4, 9, 4, 9, 9]) === 2, 'Test case 4 failed');

  console.log('All tests completed.');
}

runTests();

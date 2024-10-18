/* function getLength(arr) {
  let count = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      count += getLength(item);
    } else {
      count++;
    }
  }

  return count;
} */

function getLength(arr) {
  return arr.flat(Infinity).length;
}

console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLength([1, [2], 1, [2], 1]));

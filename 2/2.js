/* function separator(str) {
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

  return sepArr; //.map((str) => str[0]).sort();
} */

console.log(separator('happyanniversaryqontigo'));
console.log(separator('futureofwork'));
console.log(separator('Intranet'));
console.log(separator('supercalifragilistic'));
console.log(separator('laboratory'));
console.log(separator('candle'));
/*
[ 'iversaryqonti' ]
[ 'futureof' ]
[ 'tranet' ]
[ 'supercalifragilis' ]
[ 'abora', 'orato', 'rator' ]
[]
*/

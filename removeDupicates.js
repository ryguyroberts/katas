const removeDuplicates = function(arr) {
  const prunedArray = [];
  for (let value of arr) {
    //if new array doesn't include current push the value. if Duplica move on.
    if (!prunedArray.includes(value)) {
      prunedArray.push(value);
    }
  }
  return prunedArray;
};

console.log(
  removeDuplicates([1, 2, 2, 2, 3, 4, 5]),
  removeDuplicates(['a', 'b', 'b', 'c', 'd', 'e', 'e', 'a', 'f']),
);

// Old code for comparison!
// const removeDuplicates = function (arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let noRepeat = true;
//     for (let ii = 0; ii < newarr.length; ii++) {
//       if (arr[i] === newarr[ii]) {
//         noRepeat = false;
//         break;
//       }
//     }
//     if (noRepeat) {
//       newarr.push(arr[i]);
//     }
//   }
//   return newarr;
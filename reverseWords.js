const reverseWords = function(str) {
  //Split into array;
  const arrayPrim = str.split(" ");
  const returnArray = [];
  for (const value of arrayPrim) {
    //for each value in the array place at the start of array
    returnArray.unshift(value);
  }
// return as a string
 return `'${returnArray.join(" ")}'`;
};

console.log(
  reverseWords('hello and welcome to Lighthouse Labs'),
  reverseWords('am I Yoda')
);


// old code
// const reverseWords = function (str) {
//   let forwardArr = [];
//   let reverseArr = [];
//   let reverseString = "";
//   forwardArr = str.split(" ");
//   for (let i = forwardArr.length - 1; i >= 0; i--) {
//     reverseArr.push(forwardArr[i]);
//   }
//   reverseString = reverseArr.join(" ");
//   return reverseString;
// };
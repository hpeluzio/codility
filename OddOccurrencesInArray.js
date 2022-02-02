// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)

//   for (let i = 0; i < A.length; i++) {
//     // console.log(A[i]);
//     // let B = A.filter(value => value === A[i]);
//     let B = A.filter(value => value === A[i]).length;
//     // console.log('-', B);
//     if (B % 2 !== 0) {
//       return A[i];
//     }
//   }
//   // let C = A.filter((value) => value === 3).length;
//   // console.log("-", C);
// }

//
//
//
//
//
function solution(A) {
  let result = 0;

  for (let element of A) {
    // Apply Bitwise XOR to the current and next element
    result = result ^ element;
  }

  return result;
}
// console.log('s: ', solution([12, 7, 12, 11]).toString(2));
console.log((12).toString(2), '12');
console.log((7).toString(2), '7');

// result = result ^ element;
// 0000(0) ^ 1100(12) = 12
// 1100(12) ^ 111(7) = 1011(11)
// 1011(11) ^ 1100(12) = 111(7)

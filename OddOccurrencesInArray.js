// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)

//   for (let i = 0; i < A.length; i++) {
//     // console.log(A[i]);
//     // let B = A.filter((value) => value === A[i]).length;
//     // console.log("-", B);
//     if (A.filter((value) => value === A[i]).length % 2 !== 0) return A[i];
//     //   console.log("Par");
//     // else ;
//     // else console.log("Impar");
//   }
//   // let C = A.filter((value) => value === 3).length;
//   // console.log("-", C);
// }

function solution(A) {
  let result = 0;

  for (let element of A) {
    // Apply Bitwise XOR to the current and next element
    console.log(" result: ", result, " element: ", element);
    result ^= element;
    console.log(" result: ", result, " element: ", element);
    console.log(" ---------------------- ");
    // console.log(result);
  }

  return result;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));

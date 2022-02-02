// function solution(A) {
// return 2 + 3 + 1 + 5;
// console.log(A);
// A.sort((a, b) => a - b);

// for (let i = A.length - 1; i > 0; i--) {
//   if (A[i] - A[i - 1] !== 1) {
//     return A[i] - 1;
//   }
// }
// }

function solution(A) {
  var perfectSum, sum;

  if (!A || A.length == 0) return 1;

  // Gauss formula
  // 1 a 100
  // 1	 + 	100	=	101,
  // 2	 + 	99	=	101,
  // 3	 + 	98	=	101,
  // 4	 + 	97	=	101
  // a1 é o primeiro termo,
  // an é o último termo e
  // n é o número de termos da PA,
  // S = n (a1 + an)/2.

  perfectSum = ((A.length + 1) * (1 + A.length + 1)) / 2;

  // Sum the numbers we have
  sum = A.reduce((prev, current) => prev + current);

  return perfectSum - sum;
}

console.log(solution([2, 3, 1, 5]));

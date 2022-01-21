function solution(A) {
  // return 2 + 3 + 1 + 5;
  // console.log(A);
  // A.sort((a, b) => a - b);

  // for (let i = A.length - 1; i > 0; i--) {
  //   if (A[i] - A[i - 1] !== 1) {
  //     return A[i] - 1;
  //   }
  // }

  var lengthAdded, perfectSum, sum;

  if (!A || A.length == 0) {
    return 1;
  }

  lengthAdded = A.length + 1;

  // Gauss formula
  perfectSum = (lengthAdded * (1 + lengthAdded)) / 2;

  // Sum the numbers we have
  sum = A.reduce((prev, current) => prev + current);

  return perfectSum - sum;
}

console.log(solution([2, 3, 1, 5]));

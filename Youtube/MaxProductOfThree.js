function solution(A) {
  A.sort((a, b) => a - b);
  let result1 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  let result2 = A[0] * A[1] * A[A.length - 1];

  return result1 > result2 ? result1 : result2;
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([-3, 1, 2, -200, 5, 6]));

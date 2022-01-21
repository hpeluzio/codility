function solution(A) {
  let arrSet = new Set(A);

  if (arrSet.size !== A.length) return 0;

  A.sort((a, b) => a - b);

  for (let i = 1; i < A.length; i++) {
    if (A[i] - A[i - 1] !== 1) {
      return 0;
    }
  }

  return 1;
}

console.log("solution: ", solution([4, 1, 3, 7]));

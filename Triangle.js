function solution(A) {
  if (A.length < 2) return 0;
  A = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length - 2; i++) {
    if (
      A[i] + A[i + 1] > A[i + 2] &&
      A[i + 1] + A[i + 2] > A[i] &&
      A[i] + A[i + 2] > A[i + 1]
    ) {
      return 1;
    }
  }

  return 0;
}

function solution(A) {
  // console.log(A);
  // A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length && j !== i; j++) {
      for (let k = 0; k < A.length && k !== i && k !== j; k++) {
        if (i !== j && i !== k && j !== k) {
          if (A[i] + A[j] > A[k] && A[j] + A[k] > A[i] && A[k] + A[i] > A[j]) {
            return 1;
          }
        }
      }
    }
  }

  return 0;
  // if (A[0] + A[1] > A[2] && A[1] + A[2] > A[0] && A[2] + A[0] > A[1]) {
  //   return 1;
  // }

  // return A;
}

console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1]));

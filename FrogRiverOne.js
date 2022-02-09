//
//100%
function solution(X, A) {
  let arr = new Set();

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      arr.add(A[i]);
    }

    if (arr.size >= X) return i;
  }

  return -1;
}

//
//
//100%
function solution(X, A) {
  let B = Array(X).fill(0);
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      if (B[A[i] - 1] === 0) {
        console.log(B, 'Position B[', A[i] - 1, ']');
        B[A[i] - 1] = 1;
        sum += 1;
        if (sum === X) {
          return i;
        }
      }
    }
  }
  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));

function solution(X, A) {
  let arr = new Set();

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      arr.add(A[i]);
    }
    if (arr.size === X) return i;
  }

  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));

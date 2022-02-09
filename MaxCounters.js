function solution(N, A) {
  // [0, 0, 0, 0, 0];
  let arr = new Array(N).fill(0);
  let bigger = 0;

  for (let K = 0; K < A.length; K++) {
    if (A[K] === N + 1) {
      arr = Array(N).fill(bigger);
    } else {
      let position = A[K] - 1;
      arr[position]++;
      if (arr[position] > bigger) {
        bigger = arr[position];
      }
    }
  }

  return arr;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));

function solution(N, A) {
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

// solution(5, [3, 4, 4, 6, 1, 4, 4])
// A[0] = 3
// A[1] = 4
// A[2] = 4
// A[3] = 6
// A[4] = 1
// A[5] = 4
// A[6] = 4

// [0, 0, 1, 0, 0]
// [0, 0, 1, 1, 0]
// [0, 0, 1, 2, 0]
// [2, 2, 2, 2, 2]
// [3, 2, 2, 2, 2]
// [3, 2, 2, 3, 2]
// [3, 2, 2, 4, 2]

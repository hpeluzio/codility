function solution(A) {
  let index = 0;
  let minAvgTwoSlice = (A[0] + A[1]) / 2;

  // console.log(minAvgTwoSlice);

  for (let i = 0; i < A.length - 1; i++) {
    let min = (A[i] + A[i + 1]) / 2;
    if (min < minAvgTwoSlice) {
      index = i;
      minAvgTwoSlice = min;
    }
  }

  for (let i = 0; i < A.length - 2; i++) {
    let min = (A[i] + A[i + 1] + A[i + 2]) / 3;
    if (min < minAvgTwoSlice) {
      index = i;
      minAvgTwoSlice = min;
    }
  }

  // console.log(minAvgTwoSlice);
  // console.log(index);
  return index;
}

console.log(solution([4, 2, 1, 2, 5, 1, 1, 1, 5, 8]));

// for(let i = 0; i < A.length - 1; i++)
//   for(let j = i + 1; j < A.length; j++)

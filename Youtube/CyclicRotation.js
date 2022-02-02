function solution(A, K) {
  K = K % A.length;

  if (A.length === K || K === 0) {
    return A;
  }

  // console.log(A.slice(5));
  // console.log(A.slice(1, 3));

  // const

  const sliceIndex = A.length - K;
  return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)];
}

console.log(solution([1, 2, 3, 4, 5, 6], 2));

// 1, 2, 3, 4, 5, 6
// 6, 1, 2, 3, 4, 5
// 5, 6, 1, 2, 3, 4

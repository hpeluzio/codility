/*
 * 1 Way on Video
 */
function solution(A, K) {
  // Evitando loops desnecessarios
  K = K % A.length;

  if (A.length === K || K === 0) {
    return A;
  }
  while (K > 0) {
    let popped = A.pop();
    A.unshift(popped);
    K--;
  }

  return A;
}

console.log(solution([1, 2, 3, 4, 5, 6], 2));

/*
 * 2 Way on Video
 */
function solution(A, K) {
  // Evitando loops desnecessarios
  K = K % A.length;

  if (A.length === K || K === 0) {
    return A;
  }

  const sliceIndex = A.length - K;
  return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)];
}

// console.log(solution([1, 2, 3, 4, 5, 6], 2));

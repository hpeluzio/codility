function solution(A, B, K) {
  let div = 0;
  let i = A;

  while (i >= A && i <= B) {
    //
    if (i % K === 0) {
      div++;
      i += K;
    } else {
      i++;
    }
  }

  return div;
}

function solution(A, B, K) {
  console.log('-> A/K = ', A / K, ' - Math.ceil(A/K): ', Math.ceil(A / K));
  console.log('-> B/K = ', B / K, ' - Math.floor(B/K): ', Math.floor(B / K));

  // return Math.floor(B / K) - Math.ceil(A / K) + 1;
  // return Math.ceil(B / K) - Math.ceil(A / K); // 62%
  // return Math.ceil(B / K) - Math.floor(A / K); // 37%
  return Math.floor(B / K) - Math.ceil(A / K) + 1; // 100%
}

console.log(solution(6, 11, 2)); // 6 8 10 = 3
console.log(solution(6, 11, 3)); // 6 9 = 2
console.log(solution(6, 26, 5)); // 10 15 20 25 = 4
// console.log(solution(7, 15, 3));
// console.log(solution(6, 11, 2));

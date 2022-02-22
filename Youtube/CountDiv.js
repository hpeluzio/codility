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

console.log(solution(6, 11, 2)); // 6, 8, 10 = 3
console.log(solution(4, 15, 3)); // 6, 9 ,12 ,15= 4
console.log(solution(10, 26, 5)); // 10, 15, 20, 25 = 4

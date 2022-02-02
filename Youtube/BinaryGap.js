function solution(N) {
  if (N === 0) return 0;

  let binary = N;

  // console.log(binary.toString(2));
  while ((binary & 1) === 0) {
    binary >>= 1;
  }

  let currentGap = 0;
  let maxGap = 0;

  while (binary > 0) {
    if (binary & 1) {
      maxGap = Math.max(maxGap, currentGap);
      currentGap = 0;
    } else {
      currentGap++;
    }
    binary >>= 1;
  }

  return maxGap;
}

// console.log((1161).toString(2)); // 10010001001
console.log((1160).toString(2)); // 10010001000
// console.log(solution(1161));
console.log(solution(1160));

console.log((257).toString(2));
console.log(solution(257));

console.log((256).toString(2));
console.log(solution(256));

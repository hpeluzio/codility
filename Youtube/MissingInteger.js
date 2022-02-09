function solution(A) {
  const arr = Array.from(new Set(A))
    .filter(v => v > 0)
    .sort((a, b) => a - b);

  let i = 1;

  for (const each of arr) {
    if (i < each) {
      return i;
    }
    i++;
  }

  return i;
}

console.log(solution([-1, 5, 1, 1, 2, 2, 3, -4])); // 4
// console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([2, 3, 4, 5, 6])); // 1
console.log(solution([1, 2, 3, 4, 5, 6])); // 7
// console.log(solution([1,2,2,2,3,6]));
// console.log(solution([-4,-6,-7]));

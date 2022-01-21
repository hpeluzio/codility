function solution(A) {
  const arrSet = new Set(A);
  const max = Math.max(...A);
  return arrSet.size === max && arrSet.size === A.length ? 1 : 0;
}

console.log("solution: ", solution([4, 1, 3, 2]));

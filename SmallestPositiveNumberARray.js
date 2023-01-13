function solution(A) {
  let aSet = new Set(A);
  let aSetSorted = [...aSet].sort();
  // console.log(aSetSorted);

  let smallestPositive = 1;
  // [1, 2, 3, 4, 6]
  for (let i = 0; i < aSetSorted.length; i++) {
    if (!aSetSorted.includes(smallestPositive)) {
      return smallestPositive;
    }
    smallestPositive += 1;
  }

  return aSetSorted.length + 1;
}

console.log('solution: ', solution([1, 3, 6, 4, 1, 2]));
console.log('solution: ', solution([1, 2, 3]));
console.log('solution: ', solution([-1, -3]));
console.log('solution: ', solution([-1, -3, -4]));

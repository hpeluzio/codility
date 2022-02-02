function solution(A) {
  let result = 0;

  for (let element of A) {
    result = result ^ element;
  }

  return result;
}

console.log(solution([9, 9, 9, 15, 9]));
console.log(solution([12, 3, 12]));

// console.log((12).toString(2));
// console.log((7).toString(2));
// console.log((11).toString(2));
// 1100;
// 111;
// 1100;

// 1100
// 0111

// 1011
// 1100
// 0111

// 0000(0)
// 0000(0) ^ 1100(12) = 1100(12)
// 1100(12) ^ 111(7) = 1011(11)
// 1011(11) ^ 1100(12) =

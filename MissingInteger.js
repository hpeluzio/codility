// function solution(A) {
//   // console.log(A);
//   if (A.length === 0) return 1;

//   let sorted = A.sort((a, b) => a - b);

//   if (sorted[sorted.length - 1] < 0) return 1;

//   // for(let i = 0; i < A.length; ++i) {

//   // }
//   // console.log(sorted);
//   let solution = 0;
//   sorted.reduce((p, c) => {
//     // console.log(p, ' ', c, ': ', Math.abs(c - p));
//     if (Math.abs(c - p) >= 2) {
//       // console.log(p);
//       solution = p + 1;
//     }
//     return c;
//   });

//   // console.log('solution: ', solution);
//   if (solution === 0) return sorted[sorted.length - 1] + 1;
//   return solution;
// }

function solution(A) {
  //Array B of Set
  const B = Array.from(new Set(A))
    .filter(v => v > 0)
    .sort((a, b) => a - b);

  let i = 1;
  for (const val of B) {
    if (i < val) {
      return i;
    }
    i++;
  }
  return i;
}

// console.log(solution([]));
// solution([1, 3, 6, 4, 1, 2]);
console.log(solution([-2, -4, -5, -6]));
console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([2, 3, 6, 4, 2]));
console.log(solution([1, 2, 3, 4, 5, 7]));

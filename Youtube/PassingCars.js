function solution(A) {
  let passingCars = 0;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) sum++;
    else passingCars += sum;

    if (passingCars > 1000000000) return -1;
  }

  return passingCars;
}

console.log(solution([0, 0, 0, 0, 0]));
console.log(solution([0, 1, 0, 1, 1])); // 5
console.log(solution([0, 1, 0, 1, 1, 0, 1])); // 8
console.log(solution([0, 1, 0, 1, 1, 1, 0, 1]));
console.log(solution([0, 1, 0, 1, 1, 1, 0, 1, 0]));

// function solution(A) {
//   let passingCars = 0;

//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === 0) {
//       let B = A.slice(i).filter(car => car === 1);
//       passingCars += B.length;
//     }
//     if (passingCars > 1000000000) return -1;
//   }

//   return passingCars;
// }

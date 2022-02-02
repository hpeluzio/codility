// function solution(tape) {
//   let firstPart = [];
//   let secondPart = [];
//   let minorDifference = -1;
//   let currentDifference = 0;

//   for (let i = 1; i < tape.length; i++) {
//     firstPart = tape.slice(0, i);
//     secondPart = tape.slice(i);
//     sumFirstPart = firstPart.reduce((prev, current) => prev + current);
//     sumSecondPart = secondPart.reduce((prev, current) => prev + current);

//     currentDifference = Math.abs(sumFirstPart - sumSecondPart);

//     if (currentDifference < minorDifference || minorDifference === -1) {
//       minorDifference = currentDifference;
//     }
//   }

//   return minorDifference;
// }

// console.log(solution([3, 1, 2, 4, 3]));

// 46%
// function solution(tape) {

//   let left = 0;
//   let right = 0;
//   let i = 0;
//   let j = tape.length - 1;

//   while (i <= j) {

//     if (left === right) {
//       left += tape[i];
//       right += tape[j];
//       i++;
//       j--;
//     } else if (left > right) {
//       right += tape[j];
//       j--;
//     } else if (left < right) {
//       left += tape[i];
//       i++;
//     }
//   }

//   return Math.abs(left - right);
// }

//100%
function solution(tape) {
  let left = tape[0];
  let right = tape
    .slice(1, tape.length)
    .reduce((prev, current) => prev + current);

  let solution = Math.abs(left - right);

  tape.slice(1, tape.length - 1).map(item => {
    left += item;
    right -= item;
    if (solution > Math.abs(left - right)) {
      solution = Math.abs(left - right);
    }
  });
  return solution;
}

console.log(solution([3, 1, 2, 4, 20, 2]));

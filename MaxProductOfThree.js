function solution(A) {
  A.sort((a, b) => a - b);

  let result1 = A[0] * A[1] * A[A.length - 1];
  let result2 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];

  return result1 > result2 ? result1 : result2;
}

function solution(A) {
  if (A.length === 3) {
    return A[0] * A[1] * A[2];
  }

  let max1 = -1001,
    max2 = -1001,
    max3 = -1001;

  let min1 = 1001,
    min2 = 1001;

  for (let i = 0; i < A.length; i++) {
    // Max
    if (A[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = A[i];
    } else if (A[i] > max2) {
      max3 = max2;
      max2 = A[i];
    } else if (A[i] > max3) {
      max3 = A[i];
    }

    // Min
    if (A[i] < min1) {
      min2 = min1;
      min1 = A[i];
    } else if (A[i] < min2) {
      min2 = A[i];
    }
  }

  let result1 = max1 * max2 * max3;
  let result2 = min1 * min2 * max1;

  return result1 > result2 ? result1 : result2;
}

console.log(solution([-3, 1, 2, -2, 5, 6]));

// 33%
// function solution(A) {

//   let max1 = Math.max(...A);
//   var index = A.indexOf(max1);
//   A.splice(index, 1);

//   let max2 = Math.max(...A);
//   index = A.indexOf(max1);
//   A.splice(index, 1);

//   let max3 = Math.max(...A);
//   index = A.indexOf(max1);
//   A.splice(index, 1);

//   return max1 * max2 * max3;
// }

// //22%
// function solution(A) {
//   let Asorted = A.sort();
//   return (
//     Asorted[Asorted.length - 1] *
//     Asorted[Asorted.length - 2] *
//     Asorted[Asorted.length - 3]
//   );
// }

//44%
// function solution(A) {
//   let max1 = -1000,
//     max2 = -1000,
//     max3 = -1000;

//   for (elem of A) {
//     if (elem > max1) {
//       max3 = max2;
//       max2 = max1;
//       max1 = elem;
//     } else if (elem > max2) {
//       max3 = max2;
//       max2 = elem;
//     } else if (elem > max3) {
//       max3 = elem;
//     }
//   }

//   return max1 * max2 * max3;
// }

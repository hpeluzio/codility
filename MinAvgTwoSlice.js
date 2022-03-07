// O truque aqui é descobrir que você só
// precisa encontrar a média mínima de fatias
// com 2 ou 3 de comprimento.
// Isso porque uma fatia de 4 ou maior é
// basicamente uma soma de fatias com o
// comprimento de 2 ou 3 . Uma fatia composta
// nunca terá uma soma média menor que seus
// componentes.

function solution(A) {
  let index = 0;
  let minAvgTwoSlice = (A[0] + A[1]) / 2;

  for (let i = 0; i < A.length - 1; i++) {
    let minAvg = (A[i] + A[i + 1]) / 2;
    if (minAvgTwoSlice > minAvg) {
      index = i;
      minAvgTwoSlice = minAvg;
    }
  }

  for (let i = 0; i < A.length - 2; i++) {
    let minAvg = (A[i] + A[i + 1] + A[i + 2]) / 3;
    if (minAvgTwoSlice > minAvg) {
      index = i;
      minAvgTwoSlice = minAvg;
    }
  }

  return index;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]));
console.log(solution([4, 2, 2, 5, 1, 0, 0, 0, 0, 5, 8]));
console.log(solution([4, 2, 2, 5, 1, 0, 1, 2, 3, 5, 8]));

function solution(A) {
  let index = 0;
  let minAvgTwoSlice = A.slice(0, 2).reduce((acc, cur) => acc + cur);
  // console.log(minAvgTwoSlice / 2);

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 2; j < A.length; j++) {
      let slicedA = A.slice(i, j);
      if (slicedA.length >= 2) {
        let minAvgSlicedA = slicedA.reduce((acc, cur) => acc + cur);
        // console.log(minAvgSlicedA, '---', slicedA);
        if (minAvgTwoSlice > minAvgSlicedA) {
          index = i;
          minAvgTwoSlice = minAvgSlicedA;
        }
      }
    }
  }

  return index;
}

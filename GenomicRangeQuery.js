function solution(S, P, Q) {
  // A=1, C=2, G=3 and T=4
  minimals = [];

  for (let i = 0; i < P.length; i++) {
    let subString = S.substring(P[i], Q[i] + 1);

    if (subString.indexOf('A') !== -1) {
      minimals[i] = 1;
      continue;
    }
    if (subString.indexOf('C') !== -1) {
      minimals[i] = 2;
      continue;
    }
    if (subString.indexOf('G') !== -1) {
      minimals[i] = 3;
      continue;
    }
    minimals[i] = 4;
  }
  return minimals;
}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]));

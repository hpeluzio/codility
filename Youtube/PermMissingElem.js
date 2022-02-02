function solution(A) {
  if (!A || A.length === 0) return 1;

  // Formula de Gauss
  // 1 a 100
  // a1 é o primeiro termo,
  // an é o último termo e
  // n é o número de termos da PA,
  // S = n (a1 + an)/2.

  var somaPerfeita, somaDoArray;

  somaPerfeita = ((A.length + 1) * (1 + A.length + 1)) / 2;
  // console.log(somaPerfeita);

  somaDoArray = A.reduce((prev, current) => prev + current);
  // console.log(somaDoArray);

  return somaPerfeita - somaDoArray;
}

console.log(solution([2, 3, 1, 5]));

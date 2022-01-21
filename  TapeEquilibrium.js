function solution(tape) {
  let firstPart = [];
  let secondPart = [];
  let minorDifference = -1;
  let currentDifference = 0;

  for (let i = 1; i < tape.length; i++) {
    firstPart = tape.slice(0, i);
    secondPart = tape.slice(i);
    sumFirstPart = firstPart.reduce((prev, current) => prev + current);
    sumSecondPart = secondPart.reduce((prev, current) => prev + current);

    currentDifference = Math.abs(sumFirstPart - sumSecondPart);

    if (currentDifference < minorDifference || minorDifference === -1) {
      minorDifference = currentDifference;
    }
  }

  return minorDifference;
}

console.log(solution([3, 1, 2, 4, 3]));

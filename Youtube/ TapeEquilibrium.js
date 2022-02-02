function solution(tape) {
  let left = tape[0];
  let right = tape.slice(1, tape.length).reduce((p, c) => p + c);

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

console.log(solution([3, 1, 2, 4, 20, 12, 3]));

// 3, 1, 2, 4, 20, 2 = 12
// 3, 1, 2,| 4, 3 = 1

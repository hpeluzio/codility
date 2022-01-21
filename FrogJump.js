// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  // console.log("this is a debug message");

  // let dif = Y - X;
  // // console.log(dif / D);
  // let jumps = Math.trunc(dif / D);

  // return jumps + 1;

  return Math.ceil((Y - X) / D);
}

console.log(solution(10, 85, 30));

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  // console.log("ToBinary::: ", toBinary(N));
  // console.log(N >>> 2);
  // console.log("binary: ", N.toString(2));

  // const binary = N.toString(2);
  // let maxGap = 0;
  // let currentGap = 0;

  // for (let digit of binary) {
  //   // console.log("", digit);
  //   if (digit === "0") {
  //     currentGap++;
  //   } else {
  //     if (currentGap > maxGap) {
  //       maxGap = currentGap;
  //       currentGap = 0;
  //     }
  //   }
  // }

  // console.log("maxGap: ", maxGap);
  console.log("maxGap: ", N.toString(2));

  // return maxGap;
}

// function toBinary(N) {
//   let number = N;
//   let binary = "";

//   while (number > 0) {
//     binary += number % 2;
//     number = Math.trunc(number / 2);
//   }

//   return binary.split("").reverse().join("");
// }

solution(-32);

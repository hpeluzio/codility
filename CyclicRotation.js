// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // console.log(A, " - ", K);
  // write your code in JavaScript (Node.js 8.9.4)

  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // console.log(fruits);
  // const shifted = fruits.shift();
  // const popped = fruits.pop();
  // console.log(shifted);
  // console.log(popped);

  console.log(A);
  while (K > 0) {
    let popped = A.pop();
    A.unshift(popped);
    K--;
  }

  // const popped = A.pop();
  // A.unshift(popped);
  // console.log(A);
  // A.unshift(0);
  console.log(A);
}

solution([1, 2, 3, 4, 5, 6], 2);

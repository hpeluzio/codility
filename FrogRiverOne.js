function solution(X, A) {
  let arr = new Set();

  for (let i = 0; i <= A.length; i++) {
    arr.add(A[i]);

    // console.log(arr);
    console.log("arr size: ", arr.size, " i: ", i);
    // console.log(i);
    if (arr.size >= X) return i;
  }

  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));

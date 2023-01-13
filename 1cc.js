function solution(N) {
  // console.log('Oi', N);

  function timesappear(array, value) {
    var count = 0;
    array.forEach(v => v === value && count++);
    return count;
  }

  function biggervalue(arrays) {
    const bigger = 0
    for (let i= 0; i < arrays.length; i++ ) {
      if(bigger < arrays[i]) 
    }

  }

  const nn = []

  for (let i = 0; i < N.length; i++) {
    const newArray = [];

    for (let j = 0; j < N[i].length; j++) {
      if (timesappear(N[i], N[i][j]) === 1) newArray.push(N[i][j]);
    }

    return 
  }

  return N;
}

solution([
  [5, 7, 3, 9, 4, 9, 8, 3, 1],
  [1, 2, 2, 4, 4, 1],
  [1, 2, 3],
]);

// solution([5, 5], [2, 2]);

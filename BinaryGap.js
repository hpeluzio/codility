/*
 * 1 Way
 */

function solution1(N) {
  const binary = N.toString(2);
  let maxGap = 0;
  let currentGap = 0;

  for (let digit of binary) {
    if (digit === '0') {
      currentGap++;
    } else {
      if (currentGap > maxGap) {
        maxGap = currentGap;
        currentGap = 0;
      }
    }
  }

  return maxGap;
}

function toBinary(N) {
  let number = N;
  let binary = '';

  // 8 % 2 = 0 -> binary += 0 -> '0'
  // 4 % 2 = 0 -> binary += 0 -> '00'
  // 2 % 2 = 0 -> binary += 0 -> '000'
  // 1 % 2 = 1 -> binary += 1 -> '0001'

  while (number > 0) {
    binary += number % 2;
    number = Math.trunc(number / 2);
  }

  return binary.split('').reverse().join('');
}

/*
 * 2 Way
 */

const solution2 = n => {
  if (n == 0) return 0;

  // skip 0s until the first 1 from the end
  var binary = n;
  while ((binary & 1) === 0) {
    binary >>= 1;
  }

  // skip the 1
  binary >>= 1;

  // start tracking the length of sequences of 0s
  var longest = 0;
  var length = 0;

  while (binary) {
    if (binary & 1) {
      longest = Math.max(longest, length);
      length = 0;
    } else {
      length++;
    }
    binary >>= 1;
  }

  return longest;
};

// console.log((0b1001001).toString(10));
console.log('solution1', solution1(33));
console.log('solution2', solution2(33));
// console.log(solution(33));
// console.log(solution(32));
// console.log(solution(73));

/*
 * 2 Way on Video
 */

function solution(N) {
  if (N === 0) return 0;

  let binary = N; // 1160

  while ((binary & 1) === 0) {
    binary >>= 1;
  }

  let maxGap = 0;
  let currentGap = 0;

  while (binary > 0) {
    if (binary & 1) {
      maxGap = Math.max(maxGap, currentGap);
      currentGap = 0;
    } else {
      currentGap++;
    }

    binary >>= 1;
  }

  return maxGap;
}

console.log('solution: ', (257).toString(2));
console.log('solution: ', solution(257));

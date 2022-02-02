let a = 33;
let b = 1;

/*
 * ^
 */
// console.log(a.toString(2));
// console.log(b.toString(2));
// console.log((a ^ b).toString(2), "-", a ^ b);

/*
 * >>
 */
// console.log(a.toString(2));
// console.log(b.toString(2));
// console.log((a >> b).toString(2), "-", a >> b);

// 33 - 100001
// 1  - 000001
// 16 - 010000

// console.log((32 >> 1).toString(2), a >> 1);
// console.log((32 >> 2).toString(2), a >> 2);
// console.log((33 >> 3).toString(2), a >> 3);
// console.log((33 >> 4).toString(2), a >> 4);

/*
 * &
 */
console.log((32).toString(2), 32 & 1);

// 32  100000
// 1   000001
//     000000 -->  32 & 1

// 33  100001
// 1   000001
//     000001 --> 33 & 1

// 34 100010
//  1 000001
// ---------
//

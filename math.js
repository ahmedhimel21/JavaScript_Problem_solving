// absolute, round,ceil,floor,toPow, max, min,random

// absolute
let number1 = 25;
let number2 = 45;
let gap = Math.abs(number1 - number2);
console.log(gap);

// round
let round1 = Math.round(2.5666);
console.log(round1);
let round2 = Math.round(2.4666);
console.log(round2);

// ceil
let ceil = Math.ceil(2.011);
console.log(ceil);

// floor
let floor = Math.floor(2.999);
console.log(floor);

// max and min
let n1 = 21;
let n2 = 23;
let n3 = 15;
const max = Math.max(n1, n2, n3);
console.log(max);
const min = Math.min(n1, n2, n3);
console.log(min);

// random
for (let i = 1; i <= 20; i++) {
  let random = Math.round(Math.random() * 6);
  console.log(random);
}
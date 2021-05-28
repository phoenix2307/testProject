'use strict';

let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++
// }
// while (num < 55);

for (let i = 1; i < 8; i++) {
  if (i == 6) {
    // break;
    continue;
  }
  console.log(i);
}

function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };

  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

const fruit = 'orange';
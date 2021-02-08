'use strict'

let num = 5

for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j != 0) {
      console.log(i)
    }
  }
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log(i); // простое число
}

first: for (let num = 0; num < 2; num++) {
  console.log(num)

  for (let size = 0; size < 3; size++) {
    console.log(size)
    if (size === 1) break first
  }

}

// const number = +prompt('Введите число между 0 и 3', '');
const number = 3

switch (number) {

  case 0:
    console.log(0)
    break

  case 1:
    console.log(1)
    break

  case 2:
  case 3:
    console.log(2 + ' or ' + 3)
    break
}


function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm('Родители разрешили?');
  // }

  return (age > 18) || confirm('Родители разрешили?');

}

checkAge(20)

function pow(x, n) {
  if (n < 0) {
    return 'n mast be > 0'
  } else if (Math.round(n) != n) {
    return 'n mast be > integer'
  }
  return x ** n
}

console.log(pow(2, 1.9))
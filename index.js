"use strict";
let num = +prompt("Enter a number: ");

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

alert(`Factorial of ${num} is: ${factorial(num)}`);

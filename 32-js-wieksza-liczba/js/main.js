let num1 = 2;
let num2 = 5;

function greaterNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let result = greaterNumber(num1, num2);
console.log(result);
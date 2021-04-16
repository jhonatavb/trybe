let firstNumber = Math.floor((Math.random() + 1) * 50);
let secondNumber = Math.floor((Math.random() + 1) * 50);
let thirdNumber = Math.floor((Math.random() + 1) * 50);

if (firstNumber % 2 !== 0 || secondNumber % 2 !== 0 || thirdNumber % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

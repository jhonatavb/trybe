let numberOne = 40;
let numberTwo = 60;
let numberThree = 80;
let bigger;

if (numberOne > numberTwo && numberOne > numberThree) {
  bigger = numberOne;
} else if (numberTwo > numberThree) {
  bigger = numberTwo;
} else {
  bigger = numberThree;
}

console.log('O maior número dentre os três é:', bigger);

/*
Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

let firstNumber = Math.floor((Math.random() + 1) * 50);
let secondNumber = Math.floor((Math.random() + 1) * 50);
let thirdNumber = Math.floor((Math.random() + 1) * 50);

if (firstNumber % 2 !== 0 || secondNumber % 2 !== 0 || thirdNumber % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

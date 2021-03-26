// Programa que avalia três lados de um triângulo, se a soma for 180 e nenhum lado for negativo, retorna true, se a soma dos lados não atingir ou passar de 180 retorna false, e por fim, se algum dos lados for negativo retorna um erro.
let sideTriangule = 45;
let sideTrianguleTwo = 45;
let sideTrianguleThree = 90;

if (sideTriangule >= 0 && sideTrianguleTwo >= 0 && sideTrianguleThree >= 0) {
  if (sideTriangule + sideTrianguleTwo + sideTrianguleThree === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Inválido! Algum dos lados é negativo.');
}

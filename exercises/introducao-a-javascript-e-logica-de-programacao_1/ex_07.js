/*
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
*/

let nota = prompt('Qual a peça que você escolhe?');
nota = parseInt(nota);

if (nota < 0 || nota > 100 || isNaN(nota) === true) {
  console.log('Você digitou um caracter!');
} else {
  switch(true) {
    case (nota >= 90):
      console.log('A');
      break;
    case (nota >= 80):
      console.log('B')
      break;
    case (nota >= 70):
      console.log('C')
      break;
    case (nota >= 60):
      console.log('D')
      break;
    case (nota >= 50):
      console.log('E')
      break;
    case (nota < 50):
      console.log('F')
      break;
  }
}
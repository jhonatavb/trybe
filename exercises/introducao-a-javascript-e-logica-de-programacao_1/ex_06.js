/* Programa que recebe o nome de uma peça de xadrez e retorna o movimento que ela faz, ignorando letras maiúsculas!
*/
let chessPiece = ['king', 'queen', 'rook', 'bishop', 'knight', 'pawn'];


let chosenPiece = prompt('Qual a peça que você escolhe?' );
chosenPiece = chosenPiece.toLowerCase();


if (chosenPiece !== 'king' && chosenPiece !== 'queen' && chosenPiece !== 'rook' && chosenPiece !== 'bishop' && chosenPiece !== 'knight' && chosenPiece !== 'pawn') {
  console.log('Peça inválida!');
} else {
  for (let i = 0; i <= chessPiece.length; i += 1) {
    if (chosenPiece === chessPiece[i]) {
      switch (chosenPiece) {
        case 'king':
          console.log('Qualquer direção, apenas uma casa!');
          break;
        case 'queen':
          console.log('Qualquer direção, quantas casas quiser, desde que, estejam livres!');
          break;
        case 'rook':
          console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser!');
          break;
        case 'bishop':
          console.log('Move-se na diagonal, quantas casas quiser!');
          break;
        case 'knight':
          console.log('Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante!');
          break;
        case 'pawn':
          console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas!');
          break;
      }
    }
  }
}

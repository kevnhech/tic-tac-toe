const Gameboard = (function() {
  const board = ["", "", "",
                 "", "", "",
                 "", "", ""];

  const playerOne = ((marker) => {
    marker = "X";
    return marker;
  })();

  const playerTwo = ((marker) => {
    marker = "O";
    return marker;
  })();

  const rounds = (() => {
    while (board.filter(element => element == "").length > 0) {
      playerOneIdx = prompt("PLAYER 1: Enter a number 1-9.") - 1;
      board[playerOneIdx] = playerOne;

      if (board.filter(element => element == "").length == 0) {
        break;
      }

      playerTwoIdx = prompt("PLAYER 2: Enter a number 1-9.") - 1;
      board[playerTwoIdx] = playerTwo;
    }
    console.log(board);
   })();
})();
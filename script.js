const Gameboard = (function() {
  const board = ["", "", "",
                 "", "", "",
                 "", "", ""];

  const createPlayer = function(name, controller) {
    this.name = name;
    this.controller = controller;
    return { name, controller };
  };

  const playerOne = createPlayer("PlayerX", "X");
  const playerTwo = createPlayer("PlayerO", "O")

  const winRound = () => {
    this.x = (
      [board[0], board[1], board[2]].filter(element => element == "X").length == 3 ||
      [board[3], board[4], board[5]].filter(element => element == "X").length == 3 ||
      [board[6], board[7], board[8]].filter(element => element == "X").length == 3 ||

      [board[0], board[3], board[6]].filter(element => element == "X").length == 3 ||
      [board[1], board[4], board[7]].filter(element => element == "X").length == 3 ||
      [board[2], board[5], board[8]].filter(element => element == "X").length == 3 ||

      [board[0], board[4], board[8]].filter(element => element == "X").length == 3 ||
      [board[2], board[4], board[6]].filter(element => element == "X").length == 3
    );

    this.o = (
      [board[0], board[1], board[2]].filter(element => element == "O").length == 3 ||
      [board[3], board[4], board[5]].filter(element => element == "O").length == 3 ||
      [board[6], board[7], board[8]].filter(element => element == "O").length == 3 ||

      [board[0], board[3], board[6]].filter(element => element == "O").length == 3 ||
      [board[1], board[4], board[7]].filter(element => element == "O").length == 3 ||
      [board[2], board[5], board[8]].filter(element => element == "O").length == 3 ||

      [board[0], board[4], board[8]].filter(element => element == "O").length == 3 ||
      [board[2], board[4], board[6]].filter(element => element == "O").length == 3
    );

    return { x, o }
  }

  const playRound = (() => {
    while (board.filter(element => element == "").length > 0) {
      playerOneIdx = prompt("PLAYER 1: Enter a number 1-9.") - 1;
      board[playerOneIdx] = playerOne.controller;
      console.log(board);

      if (winRound().x) {
        console.log("Player 1 wins!")
        break;
      } else if (board.filter(element => element == "").length == 0 && winRound().x == false && winRound().o == false) {
        console.log("Tie!");
        break;
      }

      playerTwoIdx = prompt("PLAYER 2: Enter a number 1-9.") - 1;
      board[playerTwoIdx] = playerTwo.controller;
      console.log(board);

      if (winRound().o) {
        console.log("Player 2 wins!")
        break;
      }
    }
    // console.log(board);
   })();
})();
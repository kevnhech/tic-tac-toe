const Gameboard = (function() {
  const board = ["", "", "",
                 "", "", "",
                 "", "", ""];

  const createPlayer = function(name, controller) {
    this.name = name;
    this.controller = controller;
    return { name, controller };
  };

  const playerOne = createPlayer("Player1", "X");
  const playerTwo = createPlayer("Player2", "O")

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
  
  const playRound = () => {
      if (winRound().x) {
        console.log("Player 1 wins!");
      } else if (board.filter(element => element == "").length == 0 && winRound().x == false && winRound().o == false) {
        console.log("Tie!");
      }

      if (winRound().o) {
        console.log("Player 2 wins!");
      }
   };

  let flag = true;
  const boardCells = document.querySelectorAll(".cell");
  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (flag == true) {
        cell.textContent = playerOne.controller;
        board[Array.from(boardCells).indexOf(cell)] = playerOne.controller;
        flag = false;
        // console.log(board);
        playRound();
      } else {
        cell.textContent = playerTwo.controller;
        board[Array.from(boardCells).indexOf(cell)] = playerTwo.controller;
        flag = true;
        // console.log(board);
        playRound();
      }
    });
  });
})();
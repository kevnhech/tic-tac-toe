const Gameboard = (function() {
  const board = ["", "", "",
                 "", "", "",
                 "", "", ""];

  const createPlayer = function(name, controller) {
    this.name = name;
    this.controller = controller;
    return { name, controller };
  };

  const playerOne = createPlayer(prompt("X: What's your name?", "X"), "X");
  const playerTwo = createPlayer(prompt("O: What's your name?", "O"), "O")

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

  const restartGame = () => {
    let button = document.createElement("button");
    let body = document.querySelector("body");
    button.textContent = "Restart";
    body.appendChild(button);
    button.addEventListener("click", () => {
      window.location.reload();
    });
  }
  
  const playRound = () => {
      if (winRound().x) {
        document.querySelector("p").textContent = `${playerOne.name} wins!`;
        restartGame();
      } else if (board.filter(element => element == "").length == 0 && winRound().x == false && winRound().o == false) {
        document.querySelector("p").textContent = "Tie!";
        restartGame();
      }

      if (winRound().o) {
        document.querySelector("p").textContent = `${playerTwo.name} wins!`;
        restartGame();
      }
   };

  let flag = true;
  const boardCells = document.querySelectorAll(".cell");
  boardCells.forEach((cell) => {
    let cellIndex = Array.from(boardCells).indexOf(cell);
    cell.addEventListener("click", () => {
      if (flag == true && board[cellIndex] == "") {
        cell.textContent = playerOne.controller;
        board[cellIndex] = playerOne.controller;
        flag = false;
        playRound();
      } else if (flag == false && board[cellIndex] == "") {
        cell.textContent = playerTwo.controller;
        board[cellIndex] = playerTwo.controller;
        flag = true;
        playRound();
      }
    });
  });
})();
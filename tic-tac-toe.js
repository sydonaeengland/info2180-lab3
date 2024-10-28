document.addEventListener("DOMContentLoaded", function () {
  const gameSquares = document.querySelectorAll("#board div");
  let player = "X";
  let boardStatus = Array(9).fill(null); // Initializing an empty array
  const gameStatus = document.getElementById("status"); // Updates the status message
  const origStatMessage = gameStatus.textContent; // The original message
  const newGameButton = document.querySelector(".btn"); // New Game button

  // Naming all the possible combinations
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //checkGameWinner - function that checks who the winner of the tic-tac-toe game is
  function checkGameWinner() {
    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      if (
        boardStatus[a] &&
        boardStatus[a] === boardStatus[b] &&
        boardStatus[a] === boardStatus[c]
      ) {
        return boardStatus[a];
      }
    }
    return null;
  }

  // Loops through each game square to add the 'square' class
  gameSquares.forEach(function (square, index) {
    // Adding the 'square' using setAttribute
    square.setAttribute("class", "square");

    // Exercise 2 - Placing 'X' or 'O' on a clicked square, alternating players, and updating the board status

    square.addEventListener("click", function () {
      // Ensuring that the player can only add their mark if the square is empty
      if (!square.textContent) {
        // Adds X or O when the square is clicked
        square.textContent = player;
        square.setAttribute("class", `square ${player}`);

        // Updating the boardStatus array
        boardStatus[index] = player;

        // Checsk if there is a game winner
        const gameWinner = checkGameWinner();
        if (gameWinner) {
          // Updates the status div with the game winner message
          gameStatus.textContent = `Congratulations! ${player} is the Winner!`;
          gameStatus.classList.add("you-won");

          // Prevents further moves after a winner is found
          gameSquares.forEach(function (sq) {
            sq.style.pointerEvents = "none";
          });
        } else {
          // Switching between players if no winner
          player = player === "X" ? "O" : "X";
        }
      }
    });

    // Exercise 3 - Applying a hover style over an empty square

    square.addEventListener("mouseenter", function () {
      // Applies the hover effect only if the square is empty
      if (!square.textContent) {
        square.classList.add("hover");
      }
    });

    square.addEventListener("mouseleave", function () {
      // Remove the hover effect when the mouse is not over the empty square
      square.classList.remove("hover");
    });
  });

  // Exercise 5 - Reseting the game when the "New Game" button is clicked

  newGameButton.addEventListener("click", function () {
    // Clearing the board squares
    gameSquares.forEach(function (square) {
      square.textContent = "";
      square.setAttribute("class", "square");
      square.style.pointerEvents = "";
    });

    // Reseting the board to being empty
    boardStatus.fill(null);

    // Reset the status message to the original message in the HTML file
    gameStatus.textContent = origStatMessage;
    gameStatus.classList.remove("you-won");

    // Allowing player X to start the game again
    player = "X";
  });
});

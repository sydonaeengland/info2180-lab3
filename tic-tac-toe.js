document.addEventListener("DOMContentLoaded", function () {
  const gameSquares = document.querySelectorAll("#board div");
  let player = "X";
  let boardStatus = Array(9).fill(null); // Initializing an empty array

  // Loop through each game square to add the 'square' class
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

        // Switching between players
        player = player === "X" ? "O" : "X";
      }
    });

    // Exercise 3 - Applying a hover style over an empty square
    square.addEventListener("mouseenter", function () {
      //  Applies the hover effect only if the square is empty
      if (!square.textContent) {
        square.classList.add("hover");
      }
    });

    square.addEventListener("mouseleave", function () {
      // Remove the hover effect when the mouse isnot over the empty square
      square.classList.remove("hover");
    });
  });
});

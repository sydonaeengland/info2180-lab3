//Exercise 1 -Adding the 'square' class to each square using setAttribute
document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");

  //Loop through each square to add the square
  squares.forEach(function (square) {
    //Adding the 'square' using setAttribute
    square.setAttribute("class", "square");
  });
});

//Exerise 2 - Placing 'X' or 'O' on a clicked square, alternating players, and updating the board status
document.addEventListener("DOMContentLoaded", function () {
  const gameSquares = document.querySelectorAll("#board div");
  let player = "X";
  let boardStatus = Array(9).fill(null); //Initializing an empty array

  gameSquares.forEach(function (square, index) {
    square.addEventListener("click", function () {
      //Ensuring that the player can only add their mark if the square is empty
      if (!square.textContent) {
        // Adds X or O when the square is clicked
        square.textContent = player;
        square.setAttribute("class", `square ${player}`);

        //Updating the boardStatus array
        boardStatus[index] = player;

        //Switching between players
        player = player === "X" ? "O" : "X";
      }
    });
  });
});

//Exercise 1
document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");

  //Loop through each square to add the square
  squares.forEach(function (square) {
    //Adding the 'square' using setAttribute
    square.setAttribute("class", "square");
  });
});

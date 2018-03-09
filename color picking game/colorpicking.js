var colors = generateRandomColors(6); //random num generator for RGB
var squares = document.querySelectorAll(".square"); //get squares
var pickedColor = pickColor(); //function to pick up a colors
var colorDisplay = document.getElementById('pickedColor') //display goal color
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1'); //picked color should match h1 bg color upon correct slection
var resetButton = document.getElementById("reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var difficultButton = document.querySelectorAll(".difficulty");
var numSquares = 6;
h1.style.backgroundColor = "steelblue";
/* we'll start condensing everything tomorrow!
for(var i = 0: i < difficultButton.length; i++){
  difficultButton[i].addEventListener("click" function(){
    difficultButton[0].classList.remove("selected");
    difficultButton[1].classList.remove("selected");
    this.classList.add("selected");

  })
}
*/
easyButton.addEventListener("click", function(){
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);

  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";

    }
  }
});

hardButton.addEventListener("click", function(){
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){

      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
  });

//configure reset button


resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares); //get new colors
  pickedColor = pickColor(); //pick new color
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "steelblue";
  messageDisplay.textContent = "Guess the Color!";
  this.textContent = "New Colors"
});



colorDisplay.textContent =' ' + pickedColor; //display goal color
for(var i = 0; i < squares.length; i++){ //loop all squares

  //add initial colors
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
  var clickedColor = this.style.backgroundColor;
    //compare colors

    if(clickedColor === pickedColor){

      //console.log the variables to see what i mean.
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      //try again/fade color(will add fade animation later)
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
        console.log(pickedColor, clickedColor);
      }
    });
  }
//change colors upon correct guess.
function changeColors(color){
  for(var i = 0; i < squares.length; i++)
  squares[i].style.backgroundColor = color;
}
//selecting a random rgb color
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//plugging random colors into array
function generateRandomColors(num){
  var arr = [];

  for(var i = 0; i < num; i++)
  arr.push(randomColor())
  return arr;

}
//generating the RGB
function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ", " + g + ", " + b + ")" ;

}

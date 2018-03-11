var numSquares = 6;
var colors =  []; //generateRandomColors(6); //random num generator for RGB
var pickedColor; //pickColor(); //function to pick up a colors
var squares = document.querySelectorAll(".square"); //get squares
var colorDisplay = document.getElementById('pickedColor') //display goal color
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1'); //picked color should match h1 bg color upon correct slection
var resetButton = document.getElementById("reset");
var difficultButton = document.querySelectorAll(".difficulty");
var numSquares = 6;
h1.style.backgroundColor = "steelblue";


init();

function init(){
  setupButtons();

  for(var i = 0; i < difficultButton.length; i++){
    difficultButton[i].addEventListener("click", function(){
      difficultButton[0].classList.remove("selected");
      difficultButton[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === 'Easy' ){
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  };

}

function setupButtons(){
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
      reset();
    }
}


function reset(){
colors = generateRandomColors(numSquares); //get new colors
pickedColor = pickColor(); //pick new color
colorDisplay.textContent = pickedColor;


resetButton.textContent = "New Colors"
messageDisplay.textContent = '';


for(var i = 0; i < squares.length; i++){
  if(colors[i]){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  } else {
    squares[i].style.display = 'none';
  }

}
h1.style.background = "steelblue";
  };




resetButton.addEventListener("click", function(){
 reset();
});




colorDisplay.textContent =' ' + pickedColor; //display goal color

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

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ", " + g + ", " + b + ")"
};
;

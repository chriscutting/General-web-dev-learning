var buttonOne = document.getElementById('buttonOne');
var buttonTwo = document.getElementById('buttonTwo');
var resetButton = document.getElementById('resetButton');
var p1 = document.querySelector("#player1Score");
var p2 = document.querySelector("#player2Score");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winning = 5;
var maxScore = document.querySelector('input[type="number"]');
var maxScoreDisplay = document.querySelector("#maxScore");


buttonOne.addEventListener("click", function(){
  if(!gameOver){
  p1score++;
  if(p1score === winning){
    p1.classList.add("winning");
    gameOver = true;
  }
  console.log(p1score, winning);
  p1.textContent = p1score
  }
});


var p2score = 0;
buttonTwo.addEventListener("click", function(){
  if(!gameOver){
  p2score++;
  if(p2score === winning){
    p2.classList.add("winning");
    gameOver = true;
  }
  console.log(p2score, winning);
  p2.textContent = p2score
 }
});





function reset(){
  console.log("reset");
  player1Score = 0;
  player2Score = 0;
  p1.textContent = 0;
  p2.textContent = 0;
  p1score = 0;
  p2score = 0;
  p1.classList.remove("winning");
  p2.classList.remove("winning");

  gameOver=false;
}

resetButton.addEventListener("click", function(){

  reset();
});

maxScore.addEventListener("change",function(){
  maxScoreDisplay.textContent = this.value;
   winning = this(maxScore.value);
   reset();
});

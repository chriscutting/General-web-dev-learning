var buttonOne = document.getElementById('buttonOne');
var buttonTwo = document.getElementById('buttonTwo');
var resetButton = document.getElementById('resetButton');
var p1 = document.querySelector("#player1Score");
var p2 = document.querySelector("#player2Score");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winning = 5;


buttonOne.addEventListener("click", function(){
  if(!gameOver){
  p1score++;
  if(p1score === winning){
    player1Score.classList.add("winner");
    gameOver = true;
  }
  console.log(p1score);
  p1.textContent = p1score
  }
});


var p2score = 0;
buttonTwo.addEventListener("click", function(){
  if(!gameOver){
  p2score++;
  if(p2score === winning){
    player2Score.classList.add("winner");
    gameOver = true;
  }
  console.log(p2score);
  p2.textContent = p2score
 }
});


resetButton.addEventListener("click", function(){
  gameOver === false;

});

resetButton.addEventListener("click", function(){
  player1Score = 0;
  player2Score = 0;
  p1score.textContent = 0;
  p2score.textContent = 0;
  p1score.classList.remove("winner")
  p2score.classList.remove("winner")
});

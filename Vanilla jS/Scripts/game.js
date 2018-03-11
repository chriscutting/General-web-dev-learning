var secretNumber = 7;
var guess = prompt("Please pick a number between 1 and 10");

if (guess == secretNumber) {
  alert("You did it!");
}

else if (guess > secretNumber) {
  alert("You're too high!");

}

else if (guess < secretNumber) {
  alert("Your guess is low!");
}

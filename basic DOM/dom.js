var h1 = document.querySelector("h1");
h1.style.color = "pink";


var body = document.querySelector("body");
var isGreen = false;

setInterval(function(){
  if (isGreen) {
    body.style.background = "white";
  } else{
    body.style.background = "#54a45b";
  }
  isGreen = !isGreen;
}, 1000);

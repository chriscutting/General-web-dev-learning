var colors= ['RGB(0, 65, 145)', "RGB(45, 65, 87)", "RGB(123, 23, 43)", 'RGB(67, 98, 23)', 'RGB(45, 155, 200)', 'RGB(98, 100, 125)']
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById('pickedColor')
colorDisplay.textContent =' ' + pickedColor;
for(var i = 0; i< squares.length; i++){

  //add initial colors
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
      alert("You win!");
    } else{
        alert("No!");
      }
    })
  };

  //add clicklisteners

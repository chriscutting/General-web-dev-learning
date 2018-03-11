//var colors =["red" , "orange" , "black", "green" , "blue"];

//for
/* for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
} */

//foreach!
/*
colors.forEach (function (colors){
  console.log (colors);
}); */
//colors is a placeholder


var numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
var colors = ["red" , "blue" , "orange" , "black" , "purple"];

numbers.forEach(function(x){
  if ( x % 3 === 0) {
    console.log(x);
  }
});

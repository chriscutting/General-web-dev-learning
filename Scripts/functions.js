// Now we're gonna do some more homework!
//Function to determine if a number is even

function isEven(x) {
  if(x % 2 === 0) return("even");
  else return "false";
}


 //factorials!

 function factorial(num) {
   var result = 1;
   for(var i = 2; i <= num; i++) {
     result = result * i;
   }
   return result;
 }

 // replace function!

 function kebabToSnake(str) {
   var newstring = str.replace(/-/g , "_" );
   return newstring;
 }


alert("connected");

function doMath() {
  var x = 40;
  console.log(x);
}
 /* global v local scope is definied as a function having it's own properties,
 calling variables outside of that function will return/log undefinied. */

// HOWEVER if you want to locally call global functions, they will work.
// Just not globally caling local(function) variables.

var y = 99;

function doMoreMath() {
   y = 100;
   console.log(y);

}

var phrase ="oh hello!";

function sayStuff() {
    var phrase = "good bye!"
    console.log(phrase);
}

// can someone enter the venue AND have a drink?
var age = prompt("The Bouncer says: how old are you?");

if(age < 18) {
  console.log("Sorry, You cant come in.");
}

else if (age < 21) {
  console.log("okay, you can come in but no drinking");

}

else {
  console.log("come in and have a drink!");
}

if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a square!");
}

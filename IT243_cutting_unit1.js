var name = "John Smith";
var address = "101 N. Main St.";
var city = "anyTown";
var state = "TX";
var zip = "11111";
var unitsTaken = "19";

const pricePerUnit = 110.5;

const discount = 150;

var intUnitsTaken = 19;

intUnitsTaken++;

var tuition = pricePerUnit * intUnitsTaken;

var afterDiscount = tuition - discount;

var monthlyPymt = afterDiscount / 12;

console.log("Name: " + name);
console.log("Address: " + address);
console.log("city: " + city);
console.log("state: " + state);
console.log("Zip Code: " + zip);
console.log("The number of units taken is " + intUnitsTaken);
console.log("The tuition before discount is " + tuition);
console.log("The tuition after a 20-unit discount is " + afterDiscount);
console.log("Your monthly payment is "+ monthlyPymt);

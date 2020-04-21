<?php

$name = "John Smith";
$address = "101 N. Main St";
$city = "anyTown";
$state = "TX";
$zip = 11111;
$unitsTaken = "19";


define("pricePerUnit", 110.5);
define("discount", 150);

$intUnitsTaken = 19;
++$intUnitsTaken;

$tuition = $pricePerUnit * $intUnitsTaken;

$afterDiscount = $tuition - discount;

$monthlyPymt = $afterdiscount / 12;

echo "Name: " . " " . $name;
echo "Address: " . " " .  $address;
echo "City: " . " " . $city;
echo "State: " . " " . $state;
echo "Zip Code: " . " " . $zip;
echo "The number of units taken is " . " " . $intUnitsTaken;
echo "The tuition before discount is " . " " . $tuition;
echo "The tuition after a 20-unit discount is " . " " . discount;
echo "Your monthly payment is " . " " . $monthlyPymt;












 ?>

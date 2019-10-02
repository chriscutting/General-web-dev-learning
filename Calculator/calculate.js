function calc(){
  var A = parseInt(document.querySelector("#value1").value);
  var B = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#Operator").value;
  var Calculate;
  if (op == "Add") {
    Calculate = A + B;
  } else if (op == "Sub") {
    Calculate = A - B;
  } else if (op == "Div") {
    Calculate = A / B;
  } else if (op == "Mul") {
    Calculate = A * B;
  }

  document.querySelector("#results").innerHTML = Calculate;
}

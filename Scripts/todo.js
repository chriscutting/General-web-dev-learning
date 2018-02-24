var todos = ["Buy groceries , Walk the dog , Vaccuum floors"];

var input = prompt("What would you like to do?");


while(input !== "quit"){
//input
if (input === "list"){
  console.log("todos");
}

else if(input === "new"){
  //add to todos
  var newTodo = prompt("Enter new TODO");
  todos.push(newTodo);
}


input = prompt("What would you like to do?");


  //ask again
//Wrap it up.

}
console.log("Goodbye!");

var todos = ["Buy groceries", "Walk the dog" , "Vaccuum floors"];

var input = prompt("What would you like to do?");


while(input !== "quit"){
//input
if(input === "list")
listToDos()


else if(input === "new") {
addToDo()
}
else if(input === "delete") {
  deleteToDo()
  //ask for index
  //delete todos



  //ask again
//Wrap it up.
input = prompt("What do you need");
}
console.log("Goodbye!");

//Listing function
function listToDos(){
  {
    console.log("*********************")
  }{  todos.forEach(function(todo, i){

      console.log(i + ": " + todo);
  });
    console.log("*********************")
  }
}


//Adding function


function addToDo(){
  var newTodo = prompt("Enter new TODO");
  todos.push(newTodo);
}

//delete function
function deleteToDo(){
  var index = prompt("Enter index to delete");
  //splice
  todos.splice(index,1);
  console.log("Deleted Todo");
}

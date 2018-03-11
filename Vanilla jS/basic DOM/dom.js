var button = document.querySelector("button");



function changeColor(){
document.body.classList.toggle("purple");
};

button.addEventListener("click", changeColor);


//querySelector works like the above 3, with css syntax( ./# )
//e.g. var tag = document.querySelector("#id") or (".subhead");
//querySelector only returns the first tag, not all.
// That's what querySelectorAll is for.
//getAttribute()

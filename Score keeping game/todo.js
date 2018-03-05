var theLis = document.querySelectorAll("li");
for(var i = 0; i < theLis.length; i++){
  theLis[i].addEventListener("mouseover", function(){
    this.classList.add = ("selected");
  });
  theLis[i].addEventListener("mouseout", function(){
    this.style.color = "black";
  });
  theLis[i].addEventListener("click", function(){
    this.classList.toggle("done");
  })

}

function singSong(){
  console.log("Twinkle twinkle little star")
  console.log("How i wonder what you are.")
}

setInterval(singSong , 1000);

//anonymous
setInterval(function(){
  console.log("This function is anonymous")
  console.log("noname needed")
} 5000);

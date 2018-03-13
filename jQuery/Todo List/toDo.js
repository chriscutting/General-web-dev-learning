//check off specific Todos via clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("selected");
});

$("ul").on('click', 'span', (function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
}));


$('input').keypress(function(event){
  if(event.which === 13){
    // Grab the text!
    var todoText = $(this).val();
    $(this).val("");
    //make new li and add to ul
    $("ul").append('<li><span class = "trash"><i class="far fa-trash-alt"></i></span> ' + todoText + '</li>')
  }
});



$(".fa-plus-square").click(function(){
  $("input").fadeToggle();
});

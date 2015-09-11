var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});
  
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
$("#colorSelect").toggle();
});

function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

$("input[type=range]").change(changeColor);

$("#addNewColor").click(function(){
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click();
});
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
  
}).mousemove(function(e){

  if(mouseDown){
  context.beginPath();
  context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
  context.lineTo(e.offsetX,e.offsetY);
  context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
  }
  }).mouseup(function(){
mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup()
});
/*Workout Generator*/
$(document).ready(function() {
  console.log("Jquery is working for workout generator.");
  $( "#threeEquip" ).click(function () {
    $("#generator").text("This is what you do");
  })
  $( "#threeNoEquip" ).click(function () {
    $("#generator").text("This is what you do");
  })
  $("#fiveEquip").click(function() {
    $("#generator").text("This is what you do bro");
  })
  $("#fiveNoEquip").click(function() {
    $("#generator").text("This is what you do maaang");
  })
});


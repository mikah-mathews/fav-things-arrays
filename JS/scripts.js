$(document).ready(function() {
  $("verifyForm").hide();
  $("form#survey").submit(function(event) {
    // Back end collecting input
    var name = $("#name").val();
    var color = $("#color").val();
    var animal = $("#animal").val();
    var food = $("#food").val();
    var song = $("#song").val();

    var array = [name, color, animal, food, song];
    var newArray = [];

    newArray.push(array[1]); // this is color
    newArray.push(array[0]); // this is name
    newArray.push(array[2]); // this is animal (ﾉ °益°)ﾉ 彡 ┻━┻

    // Front end displaying input
    $(".color").text(newArray[0]);
    $(".name").text(newArray[1]);
    $(".animal").text(newArray[2]);

    $("#verifyForm").show();

    event.preventDefault();
  })
});
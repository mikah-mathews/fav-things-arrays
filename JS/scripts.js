$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var name = $("#name").val();
    var color = $("#color").val();
    var animal = $("#animal").val();
    var food = $("#food").val();
    var song = $("#song").val();

    var array = [name, color, animal, food, song];

    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]);
    console.log(array[4]);

    event.preventDefault();
  })
});
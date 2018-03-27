$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("ul").empty();

    var inputNumber1 = parseInt($("#number1").val());
    var inputNumber2 = parseInt($("#number2").val());

    for (var index = 0; index <= inputNumber1; index += inputNumber2) {

      $("#result").append("<li>" + index + "</li>");
    }

  });
});

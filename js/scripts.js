$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("ul").empty();

    var inputNumber1 = parseInt($("#number1").val());
    var inputNumber2 = parseInt($("#number2").val());

    if (inputNumber1 <= 0 || inputNumber2 <= 0) {
      alert("input positive value");
    } else if (inputNumber1 < inputNumber2) {
      alert("Enter a max number larger than the increment number");
    } else {
      for (var index = 0; index <= inputNumber1; index += inputNumber2) {
        $("#result").append("<li>" + index + "</li>");
      }
    }

  });
});

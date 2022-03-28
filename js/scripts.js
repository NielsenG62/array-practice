$(document).ready(function () {
  $("#submit").click(function () {
    $("form").submit(function (event) {
      event.preventDefault();

      const food = $("#food").val();
      const animal = $("#animal").val();
      const color = $("#color").val();
      let array = [];
      array.push(food, animal, color);

      $("#food-li").text(array[0]);
      $("#animal-li").text(array[1]);
      $("#color-li").text(array[2]);
      $("li").removeClass("hidden");
    });
  });
});

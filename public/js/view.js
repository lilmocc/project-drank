// front-end javascript
console.log('js linked');
$(document).ready(function() {

  $('.js-example-basic-multiple').select2();

  // array to store ingredients added by user
  var ingredients = [];

  // on click function to add ingredient to ingredients array and show ingredient button on screen
  $("#add-ingredient").on("click", function(event) {
      event.preventDefault();
      $("#error-message").empty();

      var newIngredient = $("#add-ingredient").val();
      if ($("#add-ingredient").val() === "") {
        $("#error-message").text("Enter an ingredient!");
      }
      else {
        ingredients.push(newIngredient);
      }
  });

  // on keypress of "enter" add ingredient to ingredients array and show ingredient button on screen
  $("#add-ingredient").keypress(function(event) {
      if (event.keyCode == 13 || event.which == 13) {
        $("#error-message").empty();
        var newIngredient = $("#add-ingredient").val();
        if ($("#add-ingredient").val() === "") {
          $("#error-message").text("Enter an ingredient!");
          event.preventDefault();
        }
        else {
          event.preventDefault();
          ingredients.push(newIngredient);
        }
      }
    });


    $("#submit-ingredients").on("click", function() {
      console.log(ingredients);

      var currentURL = window.location.origin;

      $.post(currentURL + "/api/ingredients", { ingredients: ingredients }, function(data){

      })

    });
  });

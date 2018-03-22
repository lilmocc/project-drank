// front-end javascript

$(document).ready(function() {

  var drinksArr = [
    'lemon vodka',
    'gin',
    'brandy',
    'whiskey',
    'american whiskey',
    'canadian whiskey',
    'irish whiskey',
    'bourbon',
    'rum',
    'light rum',
    'dark rum',
    'tequila',
    'scotch',
    'bourbon',
    'cognac',
    'beer',
    'bacardi 151',
    'myers rum',
    'dry vermouth',
    'sweet vermouth',
    'champagne',
    'amaretto',
    'baileys',
    'b&b',
    'benedictine',
    'blue curacao',
    'chambord',
    'cointreau',
    'drambuie',
    'franelico',
    'galliano',
    'godiva',
    'goldschlager',
    'grand marnier',
    'gran toores',
    'jagermeister',
    'kahlua',
    'midori',
    'sambuca',
    'sloe gin',
    'southern comfort',
    'tia maria',
    'creme de almond',
    'creme de cassis',
    'triple sec',
    'ouzo',
    'creme de cacao',
    'creme de menthe',
    'creme de almond',
    'peach schnapps',
    'grapefruit juice',
    'grenadine',
    'lime juice',
    'pina colada mix',
    'pineapple juice',
    'tonic water',
    'club soda',
    '7up',
    'sweet & sour',
    'tomato juice',
    'tonic water',
    'orange juice',
    'ginger ale',
    'diet coke',
    'coke',
    'cranberry juice',
    'water',
    'cherries',
    'olives',
    'cinnamon sticks',
    'lemon twist',
    'onion',
    'lime',
    'oranges',
    'nutbeg',
    'salt',
    'pepper',
    'sugar',
    'nutmeg',
    'celery',
    'bitters',
    'cream',
    'worcestershire',
    'tabasco',
    'olive juice',
    'whipped cream',
    'coconut cream',
    'coffee',
    'vodka'
  ];

// var arrayLength = drinksArr.length;

  function createOptions(){
    for (var i = 0; i < drinksArr.length; i++) {
      $('.js-example-basic-single').append($('<option value="'+ drinksArr[i] +'">' +drinksArr[i]+'</option>'));

      if (i == drinksArr.length - 1){
        $('.js-example-basic-single').select2();
      }
    }

  }
  createOptions();

  // array to store ingredients added by user
  var ingredients = [];

  // on click function to add ingredient to ingredients array and show ingredient button on screen
  $("#add-ingredient").on("click", function(event) {
    console.log('adding ingredient...')
      event.preventDefault();
      $("#error-message").empty();

      var newIngredient = $(".js-example-basic-single").val();
      if ($(".js-example-basic-single").val() === "") {
        $("#error-message").text("Enter an ingredient!");
      }
      else {
        ingredients.push(newIngredient);
        var ingredientButton = $("<button type='button' class='btn btn-primary'>" + newIngredient + "</button>")
        $("#ingredient-buttons").append(ingredientButton);
        console.log('ingredient added...');
        console.log(ingredients);
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
          debugger;
      })

    });
    console.log('called');


  });

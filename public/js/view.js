// front-end javascript

$(document).ready(function() {

// array of ingredients
  var drinksArr = [
    '7up',
    'amaretto',
    'american whiskey',
    'b&b',
    'bacardi 151',
    'baileys',
    'beer',
    'benedictine',
    'bitters',
    'blue curacao',
    'bourbon',
    'bourbon',
    'brandy',
    'canadian whiskey',
    'celery',
    'chambord',
    'champagne',
    'cherries',
    'cinnamon sticks',
    'club soda',
    'coconut cream',
    'coffee',
    'cognac',
    'cointreau',
    'coke',
    'cranberry juice',
    'cream',
    'creme de almond',
    'creme de cacao',
    'creme de cassis',
    'creme de menthe',
    'dark rum',
    'diet coke',
    'drambuie',
    'dry vermouth',
    'franelico',
    'galliano',
    'gin',
    'ginger ale',
    'godiva',
    'goldschlager',
    'gran torres',
    'grand marnier',
    'grapefruit juice',
    'grenadine',
    'irish whiskey',
    'jagermeister',
    'kahlua',
    'lemon twist',
    'lemon vodka',
    'light rum',
    'lime juice',
    'lime',
    'midori',
    'myers rum',
    'nutmeg',
    'olive juice',
    'olives',
    'onion',
    'orange juice',
    'oranges',
    'ouzo',
    'peach schnapps',
    'pepper',
    'pina colada mix',
    'pineapple juice',
    'rum',
    'salt',
    'sambuca',
    'scotch',
    'sloe gin',
    'southern comfort',
    'sugar',
    'sweet & sour',
    'sweet vermouth',
    'tabasco',
    'tequila',
    'tia maria',
    'tomato juice',
    'tonic water',
    'triple sec',
    'vodka',
    'water',
    'whipped cream',
    'whiskey',
    'worcestershire'
  ];

// creates select2 dropdown menu of ingredients
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
// $("#add-ingredient").keypress(function(event) {
//     if (event.keyCode == 13 || event.which == 13) {
//       $("#error-message").empty();
//       var newIngredient = $("#add-ingredient").val();
//       if ($("#add-ingredient").val() === "") {
//         $("#error-message").text("Enter an ingredient!");
//         event.preventDefault();
//       }
//       else {
//         event.preventDefault();
//         ingredients.push(newIngredient);
//       }
//     }
//   });

// submit user ingredients to search back end for drink recipes
$("#submit-ingredients").on("click", function() {
console.log(ingredients);

    var currentURL = window.location.origin;

    // POST method to retrieve drinks and ingredients from server
    $.post(currentURL + "/api/ingredients", { ingredients: ingredients }, function(data){

        var drinkNameArray = Object.keys(data); // drink names from query results
        var drinkIngredientsArray = Object.values(data); // drink ingredients from query results

        for (i = 0; i < drinkNameArray.length; i++) {
            var drank = $("<div class='drankbox'><h1>" + drinkNameArray[i] + "</h1><br><h3>" + drinkIngredientsArray[i] + "</h3></div>")
            $("#your-dranks").append(drank);

            console.log("drink #" + (i+1) + " " + drinkNameArray[i]);
            console.log("ingredients #" + (i+1) + " " + drinkIngredientsArray[i]);
        }
    })

});

console.log('front-end working...');

});

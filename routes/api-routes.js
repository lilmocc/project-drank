// this file has our routes for displaying and saving data to the db

// DEPENDENCIES
var db = require("../models");

// ROUTES

module.exports = function(app) {

// GET route for getting all of the ingredients
app.get("/api/allIngredients", function(req, res) {
    db.Ingredients.findAll({})
      .then(function(getAllIngredients) {
        res.json(getAllIngredients);
debugger
      var allIngredientsArray = [];
      for (i = 0; i < getAllIngredients.length; i++ ) {
        allIngredientsArray.push(getAllIngredients[i].dataValues.ingredient_name)
        console.log(allIngredientsArray);
      }
      });
  });

app.post("/api/ingredients", function(req, res) {
  var ingredients = req.body.ingredients;
  // var ingredients = ['club soda' , 'orange juice', 'vodka', 'gin', 'grapefruit juice']
  // console.log(userInput);
  console.log("ingredients: " + ingredients);

  var possibleDrinks = "SELECT d.drink_id, d.drink_name, i.ingredient_name FROM drinks AS d \
	JOIN drinks_ingredients AS di ON d.drink_id = di.drink_id \
    JOIN ingredients AS i ON di.ingredient_id = i.ingredient_id \
WHERE d.drink_id IN (SELECT comi.drink_id FROM (SELECT  \
    masterList.rowcount, \
    masterList.drink_id \
FROM \
    (SELECT  \
        COUNT(*) AS rowcount, di.drink_id, d.drink_name \
    FROM \
        drinks_ingredients AS di \
    INNER JOIN drinks AS d ON di.drink_id = d.drink_id \
    GROUP BY di.drink_id , d.drink_name) AS masterList) as ml \
    JOIN (SELECT  \
    countOfMatchedIngredients.drink_id, \
    countOfMatchedIngredients.rowcount \
FROM \
    (SELECT  \
        COUNT(*) AS rowcount, d.drink_id, d.drink_name \
    FROM \
        drinks AS d \
    INNER JOIN drinks_ingredients AS di ON d.drink_id = di.drink_id \
    INNER JOIN ingredients AS i ON di.ingredient_id = i.ingredient_id \
        AND i.ingredient_name IN ( :ingredients ) \
    GROUP BY d.drink_id , d.drink_name) AS countOfMatchedIngredients) AS comi ON comi.drink_id = ml.drink_id \
    WHERE ml.rowcount = comi.rowcount)";

    console.dir(ingredients);
  db.sequelize.query(possibleDrinks, {replacements: {ingredients: ingredients}})
    .then(function(dbResults) {
      // console.log(typeof dbResults);

      var drinks = dbResults[0].reduce(function(last, current) {
        if (!last[current.drink_name]) {
          last[current.drink_name] = [];
        }

        last[current.drink_name].push(current.ingredient_name);

        return last;
      }, {})
    
      // debugger;
      return drinks;

      // var drinksArray = [];
      //
      // for (i = 0; i < dbResults[0].length; i++){
      //   drinksArray.push(dbResults[0][i].drink_name);
      //
      // }
      // console.log(drinksArray);

      // Object.keys(drinks).forEach(function(key) { console.log(drinks[key]) })
      // [ 'vodka', 'grapefruit juice' ]
      // [ 'vodka', 'orange juice', 'grapefruit juice' ]
      // [ 'vodka', 'orange juice' ]
      //
      // drinks.californian
      // [ 'vodka',
      //   'orange juice',
      //   'grapefruit juice' ]
      //
      // console.dir(drinks)
      // { 'grey hound': [ 'vodka', 'grapefruit juice' ],
      //   californian: [ 'vodka', 'orange juice', 'grapefruit juice' ],
      //   screwdriver: [ 'vodka', 'orange juice' ] }


    })
    .then(function(drinks){
      debugger;
      console.log('inside last then');
      console.log(drinks);
      res.json(drinks);
    }).catch(function(err){
      console.log('Error: ' + err);
    }) // replace ingredients with userInput

});



// var allDrinks = "SELECT * FROM drinks;"





};

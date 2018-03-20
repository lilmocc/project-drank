// this file has our routes for displaying and saving data to the db

// DEPENDENCIES
var db = require("../models");

// ROUTES

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/ingredients/", function(req, res) {
    db.allIngredients.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });

    db.allIngredients.findAll({}).then(function(result) {
      res.send(result);
    })
  });


  // // POST route for saving a new post
  // app.post("/api/posts", function(req, res) {
  //   console.log(req.body);
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // app.post("/api/ingredients", function(req, res) {
  //   var ingredients = req.body.ingredients;
  //   // console.log(userInput);
  //   console.log("ingredients: " + ingredients);
  //
  //
  // });

app.post("/api/ingredients", function(req, res) {
  var ingredients = req.body.ingredients;
  // console.log(userInput);
  console.log("ingredients: " + ingredients);

  var possibleDrinks = "SELECT * FROM drinks_ingredients \
    JOIN ingredients on drinks_ingredients.ingredient_id = ingredients.ingredient_id \
    WHERE drinks_ingredients.drink_id IN ( \
        SELECT drinks_ingredients.drink_id FROM ingredients \
          JOIN drinks_ingredients on ingredients.ingredient_id = drinks_ingredients.ingredient_id \
          WHERE ingredients.ingredient_id IN ( ? ) \
    )";

debugger;
  db.sequelize.query(possibleDrinks, {replacements: ingredients})
    .then(function(dbResults) {
      console.log(dbResults);
    })// replace ingredients with userInput

});



// var allDrinks = "SELECT * FROM drinks;"





};

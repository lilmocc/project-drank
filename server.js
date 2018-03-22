// this file is the starting point for the Node/Express server

// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS SET-UP
var app = express();
var PORT = process.env.PORT || 8080;

// requiring our models folder for syncing
var db = require("./models");

// set up express to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// enable static files
app.use(express.static("public"));

// ROUTES (CONTROLLERS)
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// sync models and start Express
// =============================================================
// Code below will create our tables defined in our models folder if they have not been created already
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

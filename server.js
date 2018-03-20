// just testing this shit out

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************

// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our MODELS for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory --> public
// Static files are files that the client (browser) downloads as they are from the server. Again, the entire app lives on the server
// example files are .html, .css, .js, and image(ex. jpg) files (front-end files); these are all staic files, they have no play on backend functions
// by default Express does not allow you to serve static files (for whatever reason). Therefore we need to enable it using the following built-in middleware
app.use(express.static("public"));

// Routes (CONTROLLERS)
// =============================================================
require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// Code below will create our tables defined in our models folder if they have not been created already
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

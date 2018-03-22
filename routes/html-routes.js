const path = require('path');

module.exports = function(app) {

// GET route for getting all of the ingredients
  app.get("/", function(req, res) {
    res.sendFile( path.join(__dirname, "./../public/index.html"));
  });

  app.get("/drank", function(req, res) {
    res.sendFile( path.join(__dirname, "./../public/drank.html") );
  });


};

// var express = require("express");

// var router = express.Router();

// // Import the model (burger.js) to use its database functions.
// var cat = require("../models/burger.js");


// // Export routes for server.js to use.
// module.exports = router;

const db = require("../models");

module.exports = function(app) {

  // Get all burgers
  app.get("/api/all", function(req, res) {

    // Finding all burgers, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.Burger.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

// Add a burger
  app.post("/api/new", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);

    db.Burger.create({
      burger_name: req.body.name,
      // eaten: req.body.body,  ###################BOOLEAN
      
    }).then(function(results) {
      // `results` here would be the newly created burger
      res.end();
    });

  });

};
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================

var express = require("express");
var db = require("./models");


// Sets up the Express App
// =============================================================
var PORT  = process.env.PORT|| 8080;
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("./public"));

const mainLayoutView = require("./views/layouts/main.js");
// Routes
// =============================================================
require("./controllers/burgers_controller.js")(app);


app.get("/burgers", function(req, res) {
  res.send(mainLayoutView.render);
});

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({force: true}).then(function() {

    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);

    });

});



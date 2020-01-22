

// need input form for burger name
// need submit button to store burger name in "Plate" column in SQL Database
// once submitted, display input choice in div on screen, and render button "devour" 
// append new inputs in order for user to View
// once devour button is pressed move user input from "Plate" column to "Eaten" column in SQL
// display all "Eaten" SQL values in Div on page for viewer to see

// When user clicks add-btn
$("#burger-submit").on("click", function (event) {
    event.preventDefault();

    // Make a newChirp object
    var newBurger = {

        burger_name: $("#burger-input").val().trim(),,
        // devoured: default value === FALSE
    };

    console.log(newBurger);

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newBurger)
        // On success, run the following code
        .then(function () {

            var row = $("<div>");
            row.addClass("burger");

            row.append("<p>" + newBurger.burger_name + "</p>");


            $("#burger-area").prepend(row);

            // Empty each input box by replacing the value with an empty string
            $("#burger").val("");
            $("#burger-box").val("");
        });

});
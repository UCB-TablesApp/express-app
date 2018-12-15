var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//


// var clementine = {
//   name: "Clementine",
//   role: "Zombie killer",
//   age: 20,
//   forcePoints: 9999
// };

// // Routes
// // ===========================================================

// // YOUR CODE GOES HERE
// app.get("/clementine", function(req, res){
//   res.json(clementine);
// })

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

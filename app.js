var express = require("express");
var path = require("path");

var app = express();
var PORT = 7000;


app.get("/", function(req, res) {
  res.send("Welcome to Home Route");
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

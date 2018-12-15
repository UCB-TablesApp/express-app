var express = require("express");
var path = require("path");

var app = express();
var PORT = 7000;


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/makeReservation.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/viewTables.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//Display all Reservations

app.get("/api/reservation", function(req, res) {
  // return res.json(newReservation.name);
  console.log(req.body.name);
});
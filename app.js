var express = require("express");
var path = require("path");

var app = express();
var PORT = 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//array to store waitlist

//array to store reservations

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/makeReservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/viewTables.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//Display all Reservations

app.post("/api/reservation", (req, res) => {

  var reservation = req.body;
  console.log(reservation);
  res.json(reservation);

});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});

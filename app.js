var express = require("express");
var path = require("path");

var app = express();
var PORT = 7000;


array to store waitlist

array to store reservations

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/makeReservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/viewTables.html"));
});

<<<<<<< HEAD
=======
app.get('/api/waitlist' function(req, res) {
    // array of waitlist;
});


// get call for waitlist

// get call for reservation

//post call to add reservations/waitlist

>>>>>>> 0411d38ee73271cd0f094b912e835489fdcb2df8
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//Display all Reservations

app.get("/api/reservation", function(req, res) {
  // return res.json(newReservation.name);
  console.log(req.body.name);
});
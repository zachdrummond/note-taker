// DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");

// EXPRESS CONFIGURATION
const app = express();

// DEFINES A PORT
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// LISTENER
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

// ROUTES
// Home Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Notes Page
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Gets Saved Notes
app.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    
  });
});

// Adds a New Note
app.post("/api/notes", function (req, res) {

});

// Deletes a Note
app.delete("/api/notes/:id", function (req, res) {

});

// Any other Client Requests go to the Home Page
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
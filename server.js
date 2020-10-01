const express = require("express");
const path = require("path");
const fs = require("fs");

console.log(__dirname);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/notes", function(req, res){
  fs.readFile("/db/db.json", "utf8", (err, data) => {
    if(error) throw error;
    console.log(data);
  });
});

app.post("/api/notes", function(res, req){

});

app.delete("/api/notes/:id", function(res, req){

});

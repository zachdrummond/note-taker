const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(_dirname, "./public/notes.html"));
});

app.get("*", function(req, res){
  res.sendFile(path.join(_dirname, "./index.html"));
});

app.get("/api/notes", function(req, res){
  res.readFile(path.join(_dirname, "db.json"));
});

app.post("/api/notes", function(res, req){

});

app.delete("/api/notes/:id", function(res, req){

});

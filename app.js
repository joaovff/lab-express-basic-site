const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/hightlights", (request, response) => {
  response.sendFile(__dirname + "/views/hightlights.html");
});

app.listen(3000);


var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var url = require("url");

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
  response.render("index");
});

app.get("/a", function(request, response) {
  response.render("a");
});

app.get("/score", function(request, response) {
  response.render("score");
});
app.get("/b", function(request, response) {
  response.render("b");
});

app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));



var picture;
var count=0;
app.get("/test", function(req, res) {
  var params=url.parse(req.url ,true).query;
    picture=params.num;
    res.render("test",
      {
        sum:picture,
      }
    );  
});
var picture;
var count=0;
app.get("/test", function(req, res) {
  var params=url.parse(req.url ,true).query;
    picture=params.num;
    res.render("test",
      {
        sum:picture,
      }
    );  
});

app.use(function(request, response) {
  response.status(404).render("404");
});

http.createServer(app).listen(3000, function() {
  console.log("app started on port 3000.");
});
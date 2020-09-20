//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date= require(__dirname + "/date.js"); //we use this to require a local module. local meaning its not downloaded

app.use(bodyParser.urlencoded({
  extended: true
})); //You need this to parse through the data from the page to the server
app.use(express.static("public"));
app.set('view engine', 'ejs'); // use ejs as a view engine

const items = ["Buy food", "Cook food", "throw food"];
const workItems = [];

app.get("/", function(req, res) {
  const day= date.getDate();
  res.render("list", {listTitle: day, newListItems: items}); //{key: value} pair
});

app.post("/", function(req, res) {
  const item = req.body.newItem;

  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "work list",
    newListItems: workItems
  });
});

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req,res){
  res.render("about");
});



app.listen(3000, function() {
  console.log("running on port 3000");
});

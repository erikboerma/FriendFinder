// npm package dependencies

var express = require("express");
var path = require("path");

// express details
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
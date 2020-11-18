
const express = require("express");

// Tells node that we are creating an "express" server
const app = express();

// Initial port.
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

//Routes

require("./routes/apiRoutes")(app);
require("./routes/htmlroutes")(app);

// LISTENER 

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
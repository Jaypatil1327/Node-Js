const express = require("express");

// create app
const app = express();

// set Routes
app.get("/", (req, res) => {
  res.send("Hello word");
});

//start the application
app.listen(8000, (err) => {
  if (err) console.log(err.message);
  else {
    console.log("server is running");
  }
});

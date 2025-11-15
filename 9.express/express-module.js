const express = require("express");

// create app
const app = express();

// application setting

app.set("view engine", "ejs");

// start application
app.listen(8000, () => {});

// api calls
app.get("/api/data", (req, res) => {});
app.post("/api/data", (req, res) => {});

//  app.use A method used to mount middleware functions within the application's request-processing pipeline

app.use((err, req, res, next) => {});

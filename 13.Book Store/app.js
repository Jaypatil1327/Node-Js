require("dotenv").config();
const express = require("express");
const { ConnectToDB } = require("./database/db");
const router = require("./routes/bookController");

//connect to db
ConnectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

// using middleware
app.use(express.json());
app.use("/api/books", router);
app.listen(PORT, () => {
  console.log("server is running on port : ", PORT);
});

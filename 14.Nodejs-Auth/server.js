require("dotenv").config();
const express = require("express");
const database = require("./database/index");
const userRouter = require("./router/userRouter");
const homepageRouter = require("./router/homepage");

database();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("app is listening at", process.env.PORT);
});

app.use("/api", userRouter);
app.use("/homepage", homepageRouter);

require("dotenv").config();
const express = require("express");
const database = require("./database/index");
const userRouter = require("./router/userRouter");
const homepageRouter = require("./router/homepage");
const adminRouter = require("./router/admin-route");
const ImageRouter = require("./router/image-route");

database();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("app is listening at", process.env.PORT);
});

app.use("/api", userRouter);
app.use("/api/homepage", homepageRouter);
app.use("/api/admin-route", adminRouter);
app.use("/api/image", ImageRouter);

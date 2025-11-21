const mongoose = require("mongoose");
require("dotenv").config();

async function ConnectToDB() {
  try {
    mongoose
      .connect(process.env.URL)
      .then(() => console.log("db is connected successfully"))
      .catch((e) => {
        throw new Error(e);
      });
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = { ConnectToDB };

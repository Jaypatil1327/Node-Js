const db = require("mongoose");
const database = async () => {
  try {
    await db.connect(process.env.MONGOOSE_URL);
    console.log("mongoose connection successful");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = database;

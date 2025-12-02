const db = require("mongoose");
const connectToDB = async () => {
  try {
    await db.connect(process.env.MONGOOSE_URL);
    console.log("database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectToDB;

const mongoose = require("mongoose");
const ConnectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("connection successful");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = ConnectToDB;

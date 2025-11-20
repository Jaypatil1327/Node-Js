const mongoose = require("mongoose");
const { use } = require("react");
mongoose
  .connect(
    "mongodb+srv://jaypatil135790_db_user:Jaypatil1327@cluster.ciq2uiw.mongodb.net/"
  )
  .then(() => console.log("database connect successfully"))
  .catch((e) => console.log(e.message));

//create a schema

const userSchema = new mongoose.Schema({
  name: String,
  phone_number: Number,
  isActive: Boolean,
  age: Number,
  email: String,
  createdAt: { type: Date, default: Date.now },
});

const user = mongoose.model("User", userSchema);

async function addUser() {
  try {
    // method 1 :
    const newUser = await user.create({
      name: name,
      age: age,
      email: email,
      isActive: isActive,
      phone_number: ph,
    });

    // method 2 :
    // const newUser = new user({
    //   name: "Jfm",
    //   age: 20,
    //   email: "jaypatil35790@gamail.com",
    //   phone_number: 7742481799,
    // });
    // console.log(await newUser.save());
  } catch (error) {
    console.log(error.message);
  }
}

async function getAllUser() {
  try {
    const userList = await user.find({});
    userList.forEach((val) => console.log(val.name));
  } catch (e) {
    console.log(e.message);
  }
}

getAllUser();

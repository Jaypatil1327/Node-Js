const fs = require("fs");
const path = require("path");

const folder = path.basename(__dirname);
console.log("folder", folder);

fs.exists(folder + "input.text", (err) => {
  if (err) {
    console.log(err.message);
    return;
  } else {
    createFolder();
  }
});

function createFolder() {
  const newPath = path.join(__dirname, "dummy");
  fs.mkdir(newPath, (err) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("folder created successfully");
  });
}

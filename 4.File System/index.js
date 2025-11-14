const path = require("path");
const fs = require("fs");

const folderName = path.join(__dirname, "fileSystem");
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

const fileName = path.join(folderName, "example.txt");
console.log(fileName);
fs.writeFileSync(fileName, "Hello World");

console.log("file create successfully");

// fs.renameSync(fileName, "update.txt");

const read = fs.readFileSync(fileName, "utf-8");

fs.appendFileSync(fileName, "\n this is new line added to file ");
console.log(read);

const newFolder = path.basename(__dirname);
fs.mkdir(newFolder + "/AsyncFolder", (error) => {
  if (error) console.log(error.message);
  else {
  }
});

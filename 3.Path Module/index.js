const path = require("path");

console.log("file", path.basename(__filename));
console.log("Dir", path.basename(__dirname));
console.log("Extension", path.extname(__filename));
console.log("Join Path", path.join("c++", "greedy", "index.js"));

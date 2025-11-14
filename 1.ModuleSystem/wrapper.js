const wrapperFunc = require("./exploreWrapper");

console.log("Node Wrapper Function");
console.log("file wrapper", __filename);
console.log("dir wrapper", __dirname);

wrapperFunc.greet("Jay");

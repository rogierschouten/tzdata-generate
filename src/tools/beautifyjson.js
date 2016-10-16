
var fs = require("fs");
var data = require("./timezone-data.json");
fs.writeFileSync("./timezone-data-beautified.json", JSON.stringify(data, null, 2));

// Copyright © 2016 Rogier Schouten <https://github.com/rogierschouten">

const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const directories = fs.readdirSync(path.join(__dirname, "..", "dist"));
directories.forEach((dir) => {
    if (dir.indexOf("tzdata") === 0) {
        const dirPath = path.join(__dirname, "..", "dist", dir);
        // publish
        const output = cp.execSync("npm publish", {cwd: dirPath});
        console.log(output.toString());
    }
});


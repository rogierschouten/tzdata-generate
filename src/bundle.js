// Copyright © 2016 Rogier Schouten <https://github.com/rogierschouten">

const browserify = require("browserify");
const cp = require("child_process");
const fs = require("fs");
const path = require("path");

// generate other files
const directories = fs.readdirSync(path.join(__dirname, "..", "dist"));
directories.forEach((dir) => {
    if (dir.indexOf("tzdata") === 0) {
        const dirPath = path.join(__dirname, "..", "dist", dir);
        const zoneFile = dir.slice("tzdata-".length, dir.length);
        const stream = browserify({
                extensions: [".json"],
                standalone: dir
            })
            .require(path.join(dirPath, "timezone-data.json"), { expose: "timezonecomplete" })
            .bundle();
        const bundleStream = fs.createWriteStream(path.join(dirPath, dir + ".js"));
        stream.pipe(bundleStream);
    }
});


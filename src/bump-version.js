// Copyright © 2016 Rogier Schouten <https://github.com/rogierschouten">

const cp = require("child_process");
const fs = require("fs");
const path = require("path");
const semver = require("semver");

const directories = fs.readdirSync(path.join(__dirname, "..", "dist"));
directories.forEach((dir) => {
    if (dir.indexOf("tzdata") === 0) {
        const dirPath = path.join(__dirname, "..", "dist", dir);
        // increment version in package.json
        const localPackageJson = JSON.parse(fs.readFileSync(path.join(dirPath, "package.json")).toString());
        localPackageJson.version = semver.inc(localPackageJson.version, "patch");
        fs.writeFileSync(path.join(dirPath, "package.json"), JSON.stringify(localPackageJson, null, 2));
    }
});


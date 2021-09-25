// Copyright © 2016 Rogier Schouten <https://github.com/rogierschouten">

const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const otp = process.argv[2];
if (!otp) {
    throw new Error("please provide a one-time password from the authenticator app")
}

const directories = fs.readdirSync(path.join(__dirname, "..", "dist"));
directories.forEach((dir) => {
    if (dir.indexOf("tzdata") === 0) {
        const dirPath = path.join(__dirname, "..", "dist", dir);
        // publish
        const output = cp.execSync(`npm publish --otp=${otp}`, {cwd: dirPath});
        console.log(output.toString());
    }
});


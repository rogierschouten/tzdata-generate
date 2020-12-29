// Copyright © 2016 Rogier Schouten <https://github.com/rogierschouten">

const cp = require("child_process");
const fs = require("fs");
const handlebars = require("handlebars");
const mkdirp = require("mkdirp");
const path = require("path");
const semver = require("semver");
const util = require("util")

function toCamelCase(s) {
    let result = "";
    let prevIsDash = false;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "-") {
            prevIsDash = true;
        } else if (prevIsDash) {
            prevIsDash = false;
            result += s[i].toUpperCase();
        } else {
            result += s[i];
        }
    }
    return result;
}

/**
 * Generate one json data structure
 * @param zonePaths relative paths to zone files from __dirname
 * @param outPath absolute path to output json file
 */
function parse(zonePaths) {
    const buf = cp.execSync("node ./tools/parse.js " + zonePaths.join(" "),  {cwd: __dirname});
    if (buf.length > 50) {
        return JSON.parse(buf.toString());
    } else {
        console.log("not writing output for ", zonePaths, " because the output is empty");
        return null;
    }
}

// determine zone files
const inputDirs = fs.readdirSync(path.join(__dirname, "..", "input"))
    .filter((dir) => dir.indexOf("tzdata" !== -1) && fs.statSync(path.join(__dirname, "..", "input", dir)).isDirectory());
inputDirs.sort();
if (inputDirs.length === 0) {
    console.error("no input directories present");
}
const inputDirName = inputDirs[inputDirs.length - 1];
const inputDir = path.join(path.join(__dirname, "..", "input", inputDirName));
const tzVersion = fs.readFileSync(path.join(inputDir, "version"), "utf8").trim();
console.log("generating for TZ version", tzVersion);

const allFiles = fs.readdirSync(inputDir); // determine the tzdata modules to be generated
const EXCLUDED = [
    /README|LICENSE|Makefile|CONTRIBUTING|checktab|checklinks|yearistype|iso3166|leapseconds|leap-seconds|NEWS|README|Theory|version|zone|zone1970|calendars|zoneinfo2tdf(\\.+)/i,
    /.*\..*/i
];
const zoneFiles = allFiles.filter((file) => {
    return !EXCLUDED.some((r) => r.test(file));
});
const zonePaths = zoneFiles.map((file) => {
    return path.relative(__dirname, path.join(inputDir, file));
});

// generate data structure with all zones
console.log("generating data for all zones")
const zoneData = {};
zoneData["tzdata"] = parse(zonePaths);

// generate json data per input file
zonePaths.forEach((zonePath, index) => {
    const zoneFile = zoneFiles[index];
    console.log("generating data for zone file", zoneFile);
    const data = parse([zonePath]);
    if (data) {
        zoneData["tzdata-" + zoneFile] = data;
        zoneData["tzdata-" + zoneFile].version = tzVersion;
    }
});

// generate one extra json data for backward UTC
console.log("generating data for backward-utc")
zoneFiles.push("backward-utc");
{
    const utcZones = ["UTC", "Universal", "GMT+0", "GMT-0", "GMT0", "UCT", "Greenwich"];
    let zones = {};
    let rules = {};
    for (let i = 0; i < utcZones.length; i++) {
        let utcZone = utcZones[i];
        zones[utcZone] = zoneData["tzdata-backward"].zones[utcZone];
    }
    for (let n in zones) {
        let zList = zones[n];
        for (let i = 0; i < zList.length; i++) {
            let ruleKey = zList[i][1];
            rules[ruleKey] = zoneData["tzdata-backward"].rules[ruleKey];
        }
    }
    zoneData["tzdata-backward-utc"] = { zones, rules, version: tzVersion};
}

// calculate dependencies between the modules
console.log("calculating dependencies");
const zoneToModule = {};
for (const zoneModule of Object.keys(zoneData)) {
    if (zoneModule !== "tzdata" && zoneModule !== "tzdata-backward-utc") { // these cannot be the targets of dependencies
        const data = zoneData[zoneModule];
        for (const zone of Object.keys(data.zones)) {
            zoneToModule[zone] = zoneModule;
        }
    }
}
const dependencies = {};
for (const zoneModule of Object.keys(zoneData)) {
    if (zoneModule !== "tzdata") { // tzdata has no dependencies, "tzdata-backward-utc" does
        const data = zoneData[zoneModule];
        dependencies[zoneModule] = [];
        for (const fromZone of Object.keys(data.zones)) {
            const toZone = data.zones[fromZone];
            if (typeof toZone === "string") {
                const f = zoneToModule[toZone];
                if (f && f !== zoneModule && dependencies[zoneModule].indexOf(f) === -1) {
                    // external link found
                    console.log(zoneModule, "depends on", f);
                    dependencies[zoneModule].push(f);
                }
            }
        }
    }
}

// generate json files
console.log("writing timezone-data.json files");
for (const zoneModule of Object.keys(zoneData)) {
    const data = zoneData[zoneModule];
    const outDir = path.join(__dirname, "..", "dist", zoneModule);
    mkdirp.sync(outDir);
    fs.writeFileSync(path.join(outDir, "timezone-data.json"), JSON.stringify(data));
}

// generate other files
console.log("generating other files")
const directories = fs.readdirSync(path.join(__dirname, "..", "dist"));
const license = fs.readFileSync(path.join(__dirname, "templates", "LICENSE"));
const packageJson = fs.readFileSync(path.join(__dirname, "templates", "package.json"));
const readme = handlebars.compile(fs.readFileSync(path.join(__dirname, "templates", "README.md")).toString());
directories.forEach((dir) => {
    if (dir.indexOf("tzdata") === 0) {
        const dirPath = path.join(__dirname, "..", "dist", dir);
        const moduleName = dir;
        const zoneFile = dir.slice("tzdata-".length, dir.length);

        // always overwrite LICENSE
        fs.writeFileSync(path.join(dirPath, "LICENSE"), license);

        // ensure package.json exists
        let justCreatedPackageJson = false;
        if (!fs.existsSync(path.join(dirPath, "package.json"))) {
            fs.writeFileSync(path.join(dirPath, "package.json"), packageJson);
            justCreatedPackageJson = true;
        }
        // read local package.json
        const localPackageJson = JSON.parse(fs.readFileSync(path.join(dirPath, "package.json")).toString());
        localPackageJson.name = moduleName;
        // administer dependencies
        if (moduleName && dependencies[moduleName] && dependencies[moduleName].length > 0) {
            localPackageJson.peerDependencies = {};
            dependencies[moduleName].forEach((dep) => {
                const versionString = util.format("^%d.0.0", semver.major(localPackageJson.version));
                localPackageJson.peerDependencies[dep] = versionString;
            });
        }
        fs.writeFileSync(path.join(dirPath, "package.json"), JSON.stringify(localPackageJson, null, 2));

        // always copy readme after filling in template variables
        let zonesDescription;
        switch (moduleName) {
            case "tzdata": zonesDescription = ""; break;
            case "tzdata-backward-utc": zonesDescription = " of IANA TZ database file 'backward' that are old synonyms for Etc/UTC or Etc/GMT"; break;
            default: zonesDescription = " of IANA TZ database file '" + zoneFile + "'";
        }
        const deps = localPackageJson.peerDependencies ? Object.keys(localPackageJson.peerDependencies) : [];
        const depsStr = (deps.length === 0 ? "" : deps.length === 1 ? deps[0] : deps.slice(0, deps.length - 1).join(", ") + " and " + deps[deps.length - 1]);
        let dependenciesDescription = "";
        if (deps.length > 1) {
            dependenciesDescription = "This module has peer dependencies " + depsStr + ", because the data in this module has links to zones in those modules.";
        } else if (deps.length === 1) {
            dependenciesDescription = "This module has peer dependency " + depsStr + ", because the data in this module has links to zones in those modules.";
        }
        if (!zoneData[moduleName]) {
            throw new Error(`No zone data found for 'tzdata-${moduleName}'`);
        }
        const zones = Object.keys(zoneData[moduleName].zones).sort().join(", ");
        let modulesList = "";
        for (const zoneModule of Object.keys(zoneData)) {
            if (modulesList) {
                modulesList += "\n";
            }
            modulesList += "* " + zoneModule;
        }
        const readmeVars = {
            zonesDescription,
            dependenciesDescription,
            moduleName: moduleName,
            jsName: toCamelCase(moduleName),
            tzVersion,
            zones,
            modulesList
        };
        fs.writeFileSync(path.join(dirPath, "README.md"), readme(readmeVars));
    }
});








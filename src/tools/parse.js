// Copyright © 2016 Rogier Schouten <https://github.com/rogierschouten">

var fs = require('fs')
var timezoneJS = require('./date')

function parse(args) {
  if (args.length < 3) {
    console.log('Usage: node parse.js zoneFile zoneFile ... zoneFile > outputfile.json');
    return;
  }
  var _tz = timezoneJS.timezone;
  _tz.loadingScheme = _tz.loadingSchemes.MANUAL_LOAD;
  _tz.zoneFiles = args.slice(2, args.length);

  for (var i = 0; i < _tz.zoneFiles.length; i++) {
    var zoneFile = _tz.zoneFiles[i];
    var zoneData = fs.readFileSync(zoneFile, 'utf8');
    _tz.parseZones(zoneData);
  }
  var result = {
    zones: _tz.zones,
    rules: _tz.rules
  };
  if (Object.keys(result.zones).includes("null")) {
    delete result.zones["null"];
  }
  console.log(JSON.stringify(result, function(key, value) {
    if (typeof(value) == "number") {
      return value.toString()
    }
    return value
  }));
}

parse(process.argv);

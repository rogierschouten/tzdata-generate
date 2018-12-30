
## Synopsis

This is (a portion of) the [IANA TZ database](https://www.iana.org/time-zones), represented as JSON. Use this module in combination with [timezonecomplete](https://www.npmjs.com/package/timezonecomplete).
It is part of a set of similar modules:
* tzdata
* tzdata-africa
* tzdata-antarctica
* tzdata-asia
* tzdata-australasia
* tzdata-backward
* tzdata-etcetera
* tzdata-europe
* tzdata-factory
* tzdata-northamerica
* tzdata-pacificnew
* tzdata-southamerica
* tzdata-systemv
* tzdata-backward-utc

This module contains all zones of IANA TZ database file 'northamerica'.



## TZ Database Version

2018h

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-northamerica');
```

In a browser, use the bundled UMD module provided in tzdata-northamerica.js.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-northamerica example</title>
    <script src="./tzdata-northamerica.js"></script>
    <script>
        function onLoad() {
            var data = tzdataNorthamerica;
        }
    </script>
</head>
<body onLoad="onLoad()">
</body>
</html>
```

## License

MIT

## Zones in This Module

America/Adak, America/Anchorage, America/Atikokan, America/Bahia_Banderas, America/Barbados, America/Belize, America/Blanc-Sablon, America/Boise, America/Cambridge_Bay, America/Cancun, America/Cayman, America/Chicago, America/Chihuahua, America/Costa_Rica, America/Creston, America/Dawson, America/Dawson_Creek, America/Denver, America/Detroit, America/Edmonton, America/El_Salvador, America/Fort_Nelson, America/Glace_Bay, America/Goose_Bay, America/Grand_Turk, America/Guatemala, America/Halifax, America/Havana, America/Hermosillo, America/Indiana/Indianapolis, America/Indiana/Knox, America/Indiana/Marengo, America/Indiana/Petersburg, America/Indiana/Tell_City, America/Indiana/Vevay, America/Indiana/Vincennes, America/Indiana/Winamac, America/Inuvik, America/Iqaluit, America/Jamaica, America/Juneau, America/Kentucky/Louisville, America/Kentucky/Monticello, America/Los_Angeles, America/Managua, America/Martinique, America/Matamoros, America/Mazatlan, America/Menominee, America/Merida, America/Metlakatla, America/Mexico_City, America/Miquelon, America/Moncton, America/Monterrey, America/Nassau, America/New_York, America/Nipigon, America/Nome, America/North_Dakota/Beulah, America/North_Dakota/Center, America/North_Dakota/New_Salem, America/Ojinaga, America/Panama, America/Pangnirtung, America/Phoenix, America/Port-au-Prince, America/Puerto_Rico, America/Rainy_River, America/Rankin_Inlet, America/Regina, America/Resolute, America/Santo_Domingo, America/Sitka, America/St_Johns, America/Swift_Current, America/Tegucigalpa, America/Thunder_Bay, America/Tijuana, America/Toronto, America/Vancouver, America/Whitehorse, America/Winnipeg, America/Yakutat, America/Yellowknife, Atlantic/Bermuda, CST6CDT, EST, EST5EDT, HST, MST, MST7MDT, PST8PDT, Pacific/Honolulu

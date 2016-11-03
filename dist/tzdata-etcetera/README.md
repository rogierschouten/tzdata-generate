
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
* tzdata-northamerica
* tzdata-pacificnew
* tzdata-southamerica
* tzdata-systemv
* tzdata-backward-utc

This module contains all zones of IANA TZ database file 'etcetera'.



## TZ Database Version

2016i

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-etcetera');
```

In a browser, use the bundled UMD module provided in tzdata-etcetera.js.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-etcetera example</title>
    <script src="./tzdata-etcetera.js"></script>
    <script>
        function onLoad() {
            var data = tzdataEtcetera;
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

Etc/GMT, Etc/GMT+0, Etc/GMT+1, Etc/GMT+10, Etc/GMT+11, Etc/GMT+12, Etc/GMT+2, Etc/GMT+3, Etc/GMT+4, Etc/GMT+5, Etc/GMT+6, Etc/GMT+7, Etc/GMT+8, Etc/GMT+9, Etc/GMT-0, Etc/GMT-1, Etc/GMT-10, Etc/GMT-11, Etc/GMT-12, Etc/GMT-13, Etc/GMT-14, Etc/GMT-2, Etc/GMT-3, Etc/GMT-4, Etc/GMT-5, Etc/GMT-6, Etc/GMT-7, Etc/GMT-8, Etc/GMT-9, Etc/GMT0, Etc/Greenwich, Etc/UCT, Etc/UTC, Etc/Universal, Etc/Zulu, GMT


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
* tzdata-southamerica
* tzdata-backward-utc

This module contains all zones of IANA TZ database file 'australasia'.



## TZ Database Version

2025b

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-australasia');
```

In a browser, use the bundled UMD module provided in tzdata-australasia.js.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-australasia example</title>
    <script src="./tzdata-australasia.js"></script>
    <script>
        function onLoad() {
            var data = tzdataAustralasia;
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

Antarctica/Macquarie, Australia/Adelaide, Australia/Brisbane, Australia/Broken_Hill, Australia/Darwin, Australia/Eucla, Australia/Hobart, Australia/Lindeman, Australia/Lord_Howe, Australia/Melbourne, Australia/Perth, Australia/Sydney, Pacific/Apia, Pacific/Auckland, Pacific/Bougainville, Pacific/Chatham, Pacific/Efate, Pacific/Fakaofo, Pacific/Fiji, Pacific/Gambier, Pacific/Guadalcanal, Pacific/Guam, Pacific/Kanton, Pacific/Kiritimati, Pacific/Kosrae, Pacific/Kwajalein, Pacific/Marquesas, Pacific/Nauru, Pacific/Niue, Pacific/Norfolk, Pacific/Noumea, Pacific/Pago_Pago, Pacific/Palau, Pacific/Pitcairn, Pacific/Port_Moresby, Pacific/Rarotonga, Pacific/Tahiti, Pacific/Tarawa, Pacific/Tongatapu

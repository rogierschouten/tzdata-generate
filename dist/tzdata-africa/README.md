
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

This module contains all zones of IANA TZ database file 'africa'.



## TZ Database Version

2025b

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-africa');
```

In a browser, use the bundled UMD module provided in tzdata-africa.js.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-africa example</title>
    <script src="./tzdata-africa.js"></script>
    <script>
        function onLoad() {
            var data = tzdataAfrica;
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

Africa/Abidjan, Africa/Algiers, Africa/Bissau, Africa/Cairo, Africa/Casablanca, Africa/El_Aaiun, Africa/Johannesburg, Africa/Juba, Africa/Khartoum, Africa/Lagos, Africa/Maputo, Africa/Monrovia, Africa/Nairobi, Africa/Ndjamena, Africa/Sao_Tome, Africa/Tripoli, Africa/Tunis, Africa/Windhoek, Atlantic/Cape_Verde, Indian/Mauritius


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

This module contains all zones of IANA TZ database file 'europe'.



## TZ Database Version

2024b

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-europe');
```

In a browser, use the bundled UMD module provided in tzdata-europe.js.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-europe example</title>
    <script src="./tzdata-europe.js"></script>
    <script>
        function onLoad() {
            var data = tzdataEurope;
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

Africa/Ceuta, America/Danmarkshavn, America/Nuuk, America/Scoresbysund, America/Thule, Asia/Anadyr, Asia/Barnaul, Asia/Chita, Asia/Irkutsk, Asia/Kamchatka, Asia/Khandyga, Asia/Krasnoyarsk, Asia/Magadan, Asia/Novokuznetsk, Asia/Novosibirsk, Asia/Omsk, Asia/Sakhalin, Asia/Srednekolymsk, Asia/Tomsk, Asia/Ust-Nera, Asia/Vladivostok, Asia/Yakutsk, Asia/Yekaterinburg, Atlantic/Azores, Atlantic/Canary, Atlantic/Faroe, Atlantic/Madeira, Europe/Andorra, Europe/Astrakhan, Europe/Athens, Europe/Belgrade, Europe/Berlin, Europe/Brussels, Europe/Bucharest, Europe/Budapest, Europe/Chisinau, Europe/Dublin, Europe/Gibraltar, Europe/Helsinki, Europe/Istanbul, Europe/Kaliningrad, Europe/Kirov, Europe/Kyiv, Europe/Lisbon, Europe/London, Europe/Madrid, Europe/Malta, Europe/Minsk, Europe/Moscow, Europe/Paris, Europe/Prague, Europe/Riga, Europe/Rome, Europe/Samara, Europe/Saratov, Europe/Simferopol, Europe/Sofia, Europe/Tallinn, Europe/Tirane, Europe/Ulyanovsk, Europe/Vienna, Europe/Vilnius, Europe/Volgograd, Europe/Warsaw, Europe/Zurich

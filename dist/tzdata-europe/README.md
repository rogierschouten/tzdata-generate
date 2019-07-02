
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

This module contains all zones of IANA TZ database file 'europe'.



## TZ Database Version

2019b

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

Africa/Ceuta, America/Danmarkshavn, America/Godthab, America/Scoresbysund, America/Thule, Arctic/Longyearbyen, Asia/Anadyr, Asia/Barnaul, Asia/Chita, Asia/Irkutsk, Asia/Istanbul, Asia/Kamchatka, Asia/Khandyga, Asia/Krasnoyarsk, Asia/Magadan, Asia/Novokuznetsk, Asia/Novosibirsk, Asia/Omsk, Asia/Sakhalin, Asia/Srednekolymsk, Asia/Tomsk, Asia/Ust-Nera, Asia/Vladivostok, Asia/Yakutsk, Asia/Yekaterinburg, Atlantic/Azores, Atlantic/Canary, Atlantic/Faroe, Atlantic/Madeira, Atlantic/Reykjavik, CET, EET, Europe/Amsterdam, Europe/Andorra, Europe/Astrakhan, Europe/Athens, Europe/Belgrade, Europe/Berlin, Europe/Bratislava, Europe/Brussels, Europe/Bucharest, Europe/Budapest, Europe/Busingen, Europe/Chisinau, Europe/Copenhagen, Europe/Dublin, Europe/Gibraltar, Europe/Guernsey, Europe/Helsinki, Europe/Isle_of_Man, Europe/Istanbul, Europe/Jersey, Europe/Kaliningrad, Europe/Kiev, Europe/Kirov, Europe/Lisbon, Europe/Ljubljana, Europe/London, Europe/Luxembourg, Europe/Madrid, Europe/Malta, Europe/Mariehamn, Europe/Minsk, Europe/Monaco, Europe/Moscow, Europe/Oslo, Europe/Paris, Europe/Podgorica, Europe/Prague, Europe/Riga, Europe/Rome, Europe/Samara, Europe/San_Marino, Europe/Sarajevo, Europe/Saratov, Europe/Simferopol, Europe/Skopje, Europe/Sofia, Europe/Stockholm, Europe/Tallinn, Europe/Tirane, Europe/Ulyanovsk, Europe/Uzhgorod, Europe/Vaduz, Europe/Vatican, Europe/Vienna, Europe/Vilnius, Europe/Volgograd, Europe/Warsaw, Europe/Zagreb, Europe/Zaporozhye, Europe/Zurich, MET, WET

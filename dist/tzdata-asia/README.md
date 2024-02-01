
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

This module contains all zones of IANA TZ database file 'asia'.



## TZ Database Version

2024a

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-asia');
```

In a browser, use the bundled UMD module provided in tzdata-asia.js.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-asia example</title>
    <script src="./tzdata-asia.js"></script>
    <script>
        function onLoad() {
            var data = tzdataAsia;
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

Asia/Almaty, Asia/Amman, Asia/Aqtau, Asia/Aqtobe, Asia/Ashgabat, Asia/Atyrau, Asia/Baghdad, Asia/Baku, Asia/Bangkok, Asia/Beirut, Asia/Bishkek, Asia/Choibalsan, Asia/Colombo, Asia/Damascus, Asia/Dhaka, Asia/Dili, Asia/Dubai, Asia/Dushanbe, Asia/Famagusta, Asia/Gaza, Asia/Hebron, Asia/Ho_Chi_Minh, Asia/Hong_Kong, Asia/Hovd, Asia/Jakarta, Asia/Jayapura, Asia/Jerusalem, Asia/Kabul, Asia/Karachi, Asia/Kathmandu, Asia/Kolkata, Asia/Kuching, Asia/Macau, Asia/Makassar, Asia/Manila, Asia/Nicosia, Asia/Oral, Asia/Pontianak, Asia/Pyongyang, Asia/Qatar, Asia/Qostanay, Asia/Qyzylorda, Asia/Riyadh, Asia/Samarkand, Asia/Seoul, Asia/Shanghai, Asia/Singapore, Asia/Taipei, Asia/Tashkent, Asia/Tbilisi, Asia/Tehran, Asia/Thimphu, Asia/Tokyo, Asia/Ulaanbaatar, Asia/Urumqi, Asia/Yangon, Asia/Yerevan, Indian/Chagos, Indian/Maldives

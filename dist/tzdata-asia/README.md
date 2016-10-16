
## Synopsis

This is (a portion of) the [IANA TZ database](https://www.iana.org/time-zones), represented as JSON. Use this module in combination with [timezonecomplete](https://www.npmjs.com/package/timezonecomplete).

This module contains all zones of IANA TZ database file 'asia'.



## TZ Database Version

2016g

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-asia');
```

In a browser, use the [bundled UMD module](./tzdata-asia.js):

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

Asia/Aden, Asia/Almaty, Asia/Amman, Asia/Aqtau, Asia/Aqtobe, Asia/Ashgabat, Asia/Baghdad, Asia/Bahrain, Asia/Baku, Asia/Bangkok, Asia/Beirut, Asia/Bishkek, Asia/Brunei, Asia/Choibalsan, Asia/Colombo, Asia/Damascus, Asia/Dhaka, Asia/Dili, Asia/Dubai, Asia/Dushanbe, Asia/Gaza, Asia/Hebron, Asia/Ho_Chi_Minh, Asia/Hong_Kong, Asia/Hovd, Asia/Jakarta, Asia/Jayapura, Asia/Jerusalem, Asia/Kabul, Asia/Karachi, Asia/Kathmandu, Asia/Kolkata, Asia/Kuala_Lumpur, Asia/Kuching, Asia/Kuwait, Asia/Macau, Asia/Makassar, Asia/Manila, Asia/Muscat, Asia/Nicosia, Asia/Oral, Asia/Phnom_Penh, Asia/Pontianak, Asia/Pyongyang, Asia/Qatar, Asia/Qyzylorda, Asia/Riyadh, Asia/Samarkand, Asia/Seoul, Asia/Shanghai, Asia/Singapore, Asia/Taipei, Asia/Tashkent, Asia/Tbilisi, Asia/Tehran, Asia/Thimphu, Asia/Tokyo, Asia/Ulaanbaatar, Asia/Urumqi, Asia/Vientiane, Asia/Yangon, Asia/Yerevan, Europe/Nicosia, Indian/Chagos, Indian/Maldives


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

This module contains all zones of IANA TZ database file 'backward'.

This module has peer dependencies tzdata-africa, tzdata-southamerica, tzdata-northamerica, tzdata-europe, tzdata-australasia, tzdata-asia and tzdata-etcetera, because the data in this module has links to zones in those modules.

## TZ Database Version

2020d

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-backward');
```

In a browser, use the bundled UMD module provided in tzdata-backward.js.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-backward example</title>
    <script src="./tzdata-backward.js"></script>
    <script>
        function onLoad() {
            var data = tzdataBackward;
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

Africa/Asmera, Africa/Timbuktu, America/Argentina/ComodRivadavia, America/Atka, America/Buenos_Aires, America/Catamarca, America/Coral_Harbour, America/Cordoba, America/Ensenada, America/Fort_Wayne, America/Godthab, America/Indianapolis, America/Jujuy, America/Knox_IN, America/Louisville, America/Mendoza, America/Montreal, America/Porto_Acre, America/Rosario, America/Santa_Isabel, America/Shiprock, America/Virgin, Antarctica/South_Pole, Asia/Ashkhabad, Asia/Calcutta, Asia/Chongqing, Asia/Chungking, Asia/Dacca, Asia/Harbin, Asia/Kashgar, Asia/Katmandu, Asia/Macao, Asia/Rangoon, Asia/Saigon, Asia/Tel_Aviv, Asia/Thimbu, Asia/Ujung_Pandang, Asia/Ulan_Bator, Atlantic/Faeroe, Atlantic/Jan_Mayen, Australia/ACT, Australia/Canberra, Australia/LHI, Australia/NSW, Australia/North, Australia/Queensland, Australia/South, Australia/Tasmania, Australia/Victoria, Australia/West, Australia/Yancowinna, Brazil/Acre, Brazil/DeNoronha, Brazil/East, Brazil/West, Canada/Atlantic, Canada/Central, Canada/Eastern, Canada/Mountain, Canada/Newfoundland, Canada/Pacific, Canada/Saskatchewan, Canada/Yukon, Chile/Continental, Chile/EasterIsland, Cuba, Egypt, Eire, Etc/UCT, Europe/Belfast, Europe/Tiraspol, GB, GB-Eire, GMT+0, GMT-0, GMT0, Greenwich, Hongkong, Iceland, Iran, Israel, Jamaica, Japan, Kwajalein, Libya, Mexico/BajaNorte, Mexico/BajaSur, Mexico/General, NZ, NZ-CHAT, Navajo, PRC, Pacific/Johnston, Pacific/Ponape, Pacific/Samoa, Pacific/Truk, Pacific/Yap, Poland, Portugal, ROC, ROK, Singapore, Turkey, UCT, US/Alaska, US/Aleutian, US/Arizona, US/Central, US/East-Indiana, US/Eastern, US/Hawaii, US/Indiana-Starke, US/Michigan, US/Mountain, US/Pacific, US/Samoa, UTC, Universal, W-SU, Zulu

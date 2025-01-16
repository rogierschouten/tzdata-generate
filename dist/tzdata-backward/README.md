
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

This module has peer dependencies tzdata-australasia, tzdata-southamerica, tzdata-europe, tzdata-northamerica, tzdata-africa, tzdata-etcetera and tzdata-asia, because the data in this module has links to zones in those modules.

## TZ Database Version

2025a

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

Africa/Accra, Africa/Addis_Ababa, Africa/Asmara, Africa/Asmera, Africa/Bamako, Africa/Bangui, Africa/Banjul, Africa/Blantyre, Africa/Brazzaville, Africa/Bujumbura, Africa/Conakry, Africa/Dakar, Africa/Dar_es_Salaam, Africa/Djibouti, Africa/Douala, Africa/Freetown, Africa/Gaborone, Africa/Harare, Africa/Kampala, Africa/Kigali, Africa/Kinshasa, Africa/Libreville, Africa/Lome, Africa/Luanda, Africa/Lubumbashi, Africa/Lusaka, Africa/Malabo, Africa/Maseru, Africa/Mbabane, Africa/Mogadishu, Africa/Niamey, Africa/Nouakchott, Africa/Ouagadougou, Africa/Porto-Novo, Africa/Timbuktu, America/Anguilla, America/Antigua, America/Argentina/ComodRivadavia, America/Aruba, America/Atikokan, America/Atka, America/Blanc-Sablon, America/Buenos_Aires, America/Catamarca, America/Cayman, America/Coral_Harbour, America/Cordoba, America/Creston, America/Curacao, America/Dominica, America/Ensenada, America/Fort_Wayne, America/Godthab, America/Grenada, America/Guadeloupe, America/Indianapolis, America/Jujuy, America/Knox_IN, America/Kralendijk, America/Louisville, America/Lower_Princes, America/Marigot, America/Mendoza, America/Montreal, America/Montserrat, America/Nassau, America/Nipigon, America/Pangnirtung, America/Port_of_Spain, America/Porto_Acre, America/Rainy_River, America/Rosario, America/Santa_Isabel, America/Shiprock, America/St_Barthelemy, America/St_Kitts, America/St_Lucia, America/St_Thomas, America/St_Vincent, America/Thunder_Bay, America/Tortola, America/Virgin, America/Yellowknife, Antarctica/DumontDUrville, Antarctica/McMurdo, Antarctica/South_Pole, Antarctica/Syowa, Arctic/Longyearbyen, Asia/Aden, Asia/Ashkhabad, Asia/Bahrain, Asia/Brunei, Asia/Calcutta, Asia/Choibalsan, Asia/Chongqing, Asia/Chungking, Asia/Dacca, Asia/Harbin, Asia/Istanbul, Asia/Kashgar, Asia/Katmandu, Asia/Kuala_Lumpur, Asia/Kuwait, Asia/Macao, Asia/Muscat, Asia/Phnom_Penh, Asia/Rangoon, Asia/Saigon, Asia/Tel_Aviv, Asia/Thimbu, Asia/Ujung_Pandang, Asia/Ulan_Bator, Asia/Vientiane, Atlantic/Faeroe, Atlantic/Jan_Mayen, Atlantic/Reykjavik, Atlantic/St_Helena, Australia/ACT, Australia/Canberra, Australia/Currie, Australia/LHI, Australia/NSW, Australia/North, Australia/Queensland, Australia/South, Australia/Tasmania, Australia/Victoria, Australia/West, Australia/Yancowinna, Brazil/Acre, Brazil/DeNoronha, Brazil/East, Brazil/West, CET, CST6CDT, Canada/Atlantic, Canada/Central, Canada/Eastern, Canada/Mountain, Canada/Newfoundland, Canada/Pacific, Canada/Saskatchewan, Canada/Yukon, Chile/Continental, Chile/EasterIsland, Cuba, EET, EST, EST5EDT, Egypt, Eire, Etc/GMT+0, Etc/GMT-0, Etc/GMT0, Etc/Greenwich, Etc/UCT, Etc/Universal, Etc/Zulu, Europe/Amsterdam, Europe/Belfast, Europe/Bratislava, Europe/Busingen, Europe/Copenhagen, Europe/Guernsey, Europe/Isle_of_Man, Europe/Jersey, Europe/Kiev, Europe/Ljubljana, Europe/Luxembourg, Europe/Mariehamn, Europe/Monaco, Europe/Nicosia, Europe/Oslo, Europe/Podgorica, Europe/San_Marino, Europe/Sarajevo, Europe/Skopje, Europe/Stockholm, Europe/Tiraspol, Europe/Uzhgorod, Europe/Vaduz, Europe/Vatican, Europe/Zagreb, Europe/Zaporozhye, GB, GB-Eire, GMT+0, GMT-0, GMT0, Greenwich, HST, Hongkong, Iceland, Indian/Antananarivo, Indian/Christmas, Indian/Cocos, Indian/Comoro, Indian/Kerguelen, Indian/Mahe, Indian/Mayotte, Indian/Reunion, Iran, Israel, Jamaica, Japan, Kwajalein, Libya, MET, MST, MST7MDT, Mexico/BajaNorte, Mexico/BajaSur, Mexico/General, NZ, NZ-CHAT, Navajo, PRC, PST8PDT, Pacific/Chuuk, Pacific/Enderbury, Pacific/Funafuti, Pacific/Johnston, Pacific/Majuro, Pacific/Midway, Pacific/Pohnpei, Pacific/Ponape, Pacific/Saipan, Pacific/Samoa, Pacific/Truk, Pacific/Wake, Pacific/Wallis, Pacific/Yap, Poland, Portugal, ROC, ROK, Singapore, Turkey, UCT, US/Alaska, US/Aleutian, US/Arizona, US/Central, US/East-Indiana, US/Eastern, US/Hawaii, US/Indiana-Starke, US/Michigan, US/Mountain, US/Pacific, US/Samoa, UTC, Universal, W-SU, WET, Zulu

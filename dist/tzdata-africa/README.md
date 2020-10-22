
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

2020d

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

Africa/Abidjan, Africa/Accra, Africa/Addis_Ababa, Africa/Algiers, Africa/Asmara, Africa/Bamako, Africa/Bangui, Africa/Banjul, Africa/Bissau, Africa/Blantyre, Africa/Brazzaville, Africa/Bujumbura, Africa/Cairo, Africa/Casablanca, Africa/Conakry, Africa/Dakar, Africa/Dar_es_Salaam, Africa/Djibouti, Africa/Douala, Africa/El_Aaiun, Africa/Freetown, Africa/Gaborone, Africa/Harare, Africa/Johannesburg, Africa/Juba, Africa/Kampala, Africa/Khartoum, Africa/Kigali, Africa/Kinshasa, Africa/Lagos, Africa/Libreville, Africa/Lome, Africa/Luanda, Africa/Lubumbashi, Africa/Lusaka, Africa/Malabo, Africa/Maputo, Africa/Maseru, Africa/Mbabane, Africa/Mogadishu, Africa/Monrovia, Africa/Nairobi, Africa/Ndjamena, Africa/Niamey, Africa/Nouakchott, Africa/Ouagadougou, Africa/Porto-Novo, Africa/Sao_Tome, Africa/Tripoli, Africa/Tunis, Africa/Windhoek, Atlantic/Cape_Verde, Atlantic/St_Helena, Indian/Antananarivo, Indian/Comoro, Indian/Mahe, Indian/Mauritius, Indian/Mayotte, Indian/Reunion

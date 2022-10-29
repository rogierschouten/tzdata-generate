
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

This module contains all zones of IANA TZ database file 'southamerica'.



## TZ Database Version

2022f

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-southamerica');
```

In a browser, use the bundled UMD module provided in tzdata-southamerica.js.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-southamerica example</title>
    <script src="./tzdata-southamerica.js"></script>
    <script>
        function onLoad() {
            var data = tzdataSouthamerica;
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

America/Araguaina, America/Argentina/Buenos_Aires, America/Argentina/Catamarca, America/Argentina/Cordoba, America/Argentina/Jujuy, America/Argentina/La_Rioja, America/Argentina/Mendoza, America/Argentina/Rio_Gallegos, America/Argentina/Salta, America/Argentina/San_Juan, America/Argentina/San_Luis, America/Argentina/Tucuman, America/Argentina/Ushuaia, America/Asuncion, America/Bahia, America/Belem, America/Boa_Vista, America/Bogota, America/Campo_Grande, America/Caracas, America/Cayenne, America/Cuiaba, America/Eirunepe, America/Fortaleza, America/Guayaquil, America/Guyana, America/La_Paz, America/Lima, America/Maceio, America/Manaus, America/Montevideo, America/Noronha, America/Paramaribo, America/Porto_Velho, America/Punta_Arenas, America/Recife, America/Rio_Branco, America/Santarem, America/Santiago, America/Sao_Paulo, Antarctica/Palmer, Atlantic/South_Georgia, Atlantic/Stanley, Pacific/Easter, Pacific/Galapagos

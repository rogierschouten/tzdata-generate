
## Synopsis

This is (a portion of) the [IANA TZ database](https://www.iana.org/time-zones), represented as JSON. Use this module in combination with [timezonecomplete](https://www.npmjs.com/package/timezonecomplete).

This module contains all zones of IANA TZ database file 'systemv'.



## TZ Database Version

2016g

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-systemv');
```

In a browser, use the [bundled UMD module](./tzdata-systemv.js):

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-systemv example</title>
    <script src="./tzdata-systemv.js"></script>
    <script>
        function onLoad() {
            var data = tzdataSystemv;
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



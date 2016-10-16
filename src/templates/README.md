
## Synopsis

This is (a portion of) the [IANA TZ database](https://www.iana.org/time-zones), represented as JSON. Use this module in combination with [timezonecomplete](https://www.npmjs.com/package/timezonecomplete).

This module contains all zones{{{zonesDescription}}}.

{{{dependenciesDescription}}}

## TZ Database Version

{{{tzVersion}}}

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('{{{moduleName}}}');
```

In a browser, use the [bundled UMD module](./{{{moduleName}}}.js):

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{{moduleName}}} example</title>
    <script src="./{{{moduleName}}}.js"></script>
    <script>
        function onLoad() {
            var data = {{{jsName}}};
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

{{{zones}}}

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tzdataAustralasia = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"timezonecomplete":[function(require,module,exports){
module.exports={"zones":{"Australia/Darwin":[["-523.3333333333333","-","LMT","-2364076800000"],["-540","-","ACST","-2230156800000"],["-570","Aus","AC%sT",null]],"Australia/Perth":[["-463.4","-","LMT","-2337897600000"],["-480","Aus","AW%sT","-836438400000"],["-480","AW","AW%sT",null]],"Australia/Eucla":[["-515.4666666666667","-","LMT","-2337897600000"],["-525","Aus","+0845/+0945","-836438400000"],["-525","AW","+0845/+0945",null]],"Australia/Brisbane":[["-612.1333333333333","-","LMT","-2335305600000"],["-600","Aus","AE%sT","62985600000"],["-600","AQ","AE%sT",null]],"Australia/Lindeman":[["-595.9333333333334","-","LMT","-2335305600000"],["-600","Aus","AE%sT","62985600000"],["-600","AQ","AE%sT","709948800000"],["-600","Holiday","AE%sT",null]],"Australia/Adelaide":[["-554.3333333333334","-","LMT","-2364076800000"],["-540","-","ACST","-2230156800000"],["-570","Aus","AC%sT","62985600000"],["-570","AS","AC%sT",null]],"Australia/Hobart":[["-589.2666666666667","-","LMT","-2345760000000"],["-600","AT","AE%sT","-1583884800000"],["-600","Aus","AE%sT","-63244800000"],["-600","AT","AE%sT",null]],"Australia/Melbourne":[["-579.8666666666667","-","LMT","-2364076800000"],["-600","Aus","AE%sT","62985600000"],["-600","AV","AE%sT",null]],"Australia/Sydney":[["-604.8666666666667","-","LMT","-2364076800000"],["-600","Aus","AE%sT","62985600000"],["-600","AN","AE%sT",null]],"Australia/Broken_Hill":[["-565.8","-","LMT","-2364076800000"],["-600","-","AEST","-2314915200000"],["-540","-","ACST","-2230156800000"],["-570","Aus","AC%sT","62985600000"],["-570","AN","AC%sT","978220800000"],["-570","AS","AC%sT",null]],"Australia/Lord_Howe":[["-636.3333333333334","-","LMT","-2364076800000"],["-600","-","AEST","352252800000"],["-630","LH","+1030/+1130","489024000000"],["-630","LH","+1030/+11",null]],"Antarctica/Macquarie":[["0","-","-00","-2214259200000"],["-600","-","AEST","-1680472800000"],["-600","1:00","AEDT","-1669852800000"],["-600","Aus","AE%sT","-1601683200000"],["0","-","-00","-687052800000"],["-600","Aus","AE%sT","-63244800000"],["-600","AT","AE%sT","1293753600000"],["-600","1:00","AEDT","1325289600000"],["-600","AT","AE%sT",null]],"Pacific/Fiji":[["-715.7333333333333","-","LMT","-1709942400000"],["-720","Fiji","+12/+13",null]],"Pacific/Gambier":[["539.8","-","LMT","-1806710400000"],["540","-","-09",null]],"Pacific/Marquesas":[["558","-","LMT","-1806710400000"],["570","-","-0930",null]],"Pacific/Tahiti":[["598.2666666666667","-","LMT","-1806710400000"],["600","-","-10",null]],"Pacific/Guam":[["861","-","LMT","-3944678400000"],["-579","-","LMT","-2146003200000"],["-600","-","GST","-885513600000"],["-540","-","+09","-802224000000"],["-600","Guam","G%sT","977529600000"],["-600","-","ChST",null]],"Pacific/Tarawa":[["-692.0666666666666","-","LMT","-2146003200000"],["-720","-","+12",null]],"Pacific/Kanton":[["0","-","-00","-1020470400000"],["720","-","-12","307584000000"],["660","-","-11","788832000000"],["-780","-","+13",null]],"Pacific/Kiritimati":[["629.3333333333334","-","LMT","-2146003200000"],["640","-","-1040","307584000000"],["600","-","-10","788832000000"],["-840","-","+14",null]],"Pacific/Kwajalein":[["-669.3333333333334","-","LMT","-2146003200000"],["-660","-","+11","-1009929600000"],["-600","-","+10","-907372800000"],["-540","-","+09","-817430400000"],["-660","-","+11","-7948800000"],["720","-","-12","745891200000"],["-720","-","+12",null]],"Pacific/Kosrae":[["788.0666666666666","-","LMT","-3944678400000"],["-651.9333333333334","-","LMT","-2146003200000"],["-660","-","+11","-1743638400000"],["-540","-","+09","-1606780800000"],["-660","-","+11","-1009929600000"],["-600","-","+10","-907372800000"],["-540","-","+09","-770601600000"],["-660","-","+11","-7948800000"],["-720","-","+12","946598400000"],["-660","-","+11",null]],"Pacific/Nauru":[["-667.6666666666666","-","LMT","-1545091200000"],["-690","-","+1130","-862876800000"],["-540","-","+09","-767318400000"],["-690","-","+1130","287460000000"],["-720","-","+12",null]],"Pacific/Noumea":[["-665.8","-","LMT","-1829347200000"],["-660","NC","+11/+12",null]],"Pacific/Auckland":[["-699.0666666666666","-","LMT","-3192393600000"],["-690","NZ","NZ%sT","-757382400000"],["-720","NZ","NZ%sT",null]],"Pacific/Chatham":[["-733.8","-","LMT","-3192393600000"],["-735","-","+1215","-757382400000"],["-765","Chatham","+1245/+1345",null]],"Pacific/Rarotonga":[["-800.9333333333334","-","LMT","-2209507200000"],["639.0666666666666","-","LMT","-543110400000"],["630","-","-1030","279676800000"],["600","Cook","-10/-0930",null]],"Pacific/Niue":[["679.6666666666666","-","LMT","-543110400000"],["680","-","-1120","-173664000000"],["660","-","-11",null]],"Pacific/Norfolk":[["-671.8666666666667","-","LMT","-2146003200000"],["-672","-","+1112","-568166400000"],["-690","-","+1130","152071200000"],["-690","1:00","+1230","162957600000"],["-690","-","+1130","1443924000000"],["-660","-","+11","1561939200000"],["-660","AN","+11/+12",null]],"Pacific/Palau":[["902.0666666666666","-","LMT","-3944678400000"],["-537.9333333333334","-","LMT","-2146003200000"],["-540","-","+09",null]],"Pacific/Port_Moresby":[["-588.6666666666666","-","LMT","-2808604800000"],["-588.5333333333334","-","PMMT","-2335305600000"],["-600","-","+10",null]],"Pacific/Bougainville":[["-622.2666666666667","-","LMT","-2808604800000"],["-588.5333333333334","-","PMMT","-2335305600000"],["-600","-","+10","-867974400000"],["-540","-","+09","-768873600000"],["-600","-","+10","1419732000000"],["-660","-","+11",null]],"Pacific/Pitcairn":[["520.3333333333333","-","LMT","-2146003200000"],["510","-","-0830","893635200000"],["480","-","-08",null]],"Pacific/Pago_Pago":[["-757.2","-","LMT","-2445379200000"],["682.8","-","LMT","-1830470400000"],["660","-","SST",null]],"Pacific/Apia":[["-753.0666666666666","-","LMT","-2445379200000"],["686.9333333333334","-","LMT","-1830470400000"],["690","-","-1130","-599702400000"],["660","WS","-11/-10","1325203200000"],["-780","WS","+13/+14",null]],"Pacific/Guadalcanal":[["-639.8","-","LMT","-1806710400000"],["-660","-","+11",null]],"Pacific/Fakaofo":[["684.9333333333334","-","LMT","-2146003200000"],["660","-","-11","1325203200000"],["-780","-","+13",null]],"Pacific/Tongatapu":[["-739.2","-","LMT","-767145600000"],["-740","-","+1220","-252547200000"],["-780","-","+13","946598400000"],["-780","Tonga","+13/+14",null]],"Pacific/Efate":[["-673.2666666666667","-","LMT","-1829347200000"],["-660","Vanuatu","+11/+12",null]]},"rules":{"Aus":[["1917","only","-","Jan","1",["2","0","0","s"],"60","D"],["1917","only","-","Mar","lastSun",["2","0","0","s"],"0","S"],["1942","only","-","Jan","1",["2","0","0","s"],"60","D"],["1942","only","-","Mar","lastSun",["2","0","0","s"],"0","S"],["1942","only","-","Sep","27",["2","0","0","s"],"60","D"],["1943","1944","-","Mar","lastSun",["2","0","0","s"],"0","S"],["1943","only","-","Oct","3",["2","0","0","s"],"60","D"]],"AW":[["1974","only","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1975","only","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1983","only","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1984","only","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1991","only","-","Nov","17",["2","0","0","s"],"60","D"],["1992","only","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["2006","only","-","Dec","3",["2","0","0","s"],"60","D"],["2007","2009","-","Mar","lastSun",["2","0","0","s"],"0","S"],["2007","2008","-","Oct","lastSun",["2","0","0","s"],"60","D"]],"AQ":[["1971","only","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1972","only","-","Feb","lastSun",["2","0","0","s"],"0","S"],["1989","1991","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1990","1992","-","Mar","Sun>=1",["2","0","0","s"],"0","S"]],"Holiday":[["1992","1993","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1993","1994","-","Mar","Sun>=1",["2","0","0","s"],"0","S"]],"AS":[["1971","1985","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1986","only","-","Oct","19",["2","0","0","s"],"60","D"],["1987","2007","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1972","only","-","Feb","27",["2","0","0","s"],"0","S"],["1973","1985","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1986","1990","-","Mar","Sun>=15",["2","0","0","s"],"0","S"],["1991","only","-","Mar","3",["2","0","0","s"],"0","S"],["1992","only","-","Mar","22",["2","0","0","s"],"0","S"],["1993","only","-","Mar","7",["2","0","0","s"],"0","S"],["1994","only","-","Mar","20",["2","0","0","s"],"0","S"],["1995","2005","-","Mar","lastSun",["2","0","0","s"],"0","S"],["2006","only","-","Apr","2",["2","0","0","s"],"0","S"],["2007","only","-","Mar","lastSun",["2","0","0","s"],"0","S"],["2008","max","-","Apr","Sun>=1",["2","0","0","s"],"0","S"],["2008","max","-","Oct","Sun>=1",["2","0","0","s"],"60","D"]],"AT":[["1916","only","-","Oct","Sun>=1",["2","0","0","s"],"60","D"],["1917","only","-","Mar","lastSun",["2","0","0","s"],"0","S"],["1917","1918","-","Oct","Sun>=22",["2","0","0","s"],"60","D"],["1918","1919","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1967","only","-","Oct","Sun>=1",["2","0","0","s"],"60","D"],["1968","only","-","Mar","Sun>=29",["2","0","0","s"],"0","S"],["1968","1985","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1969","1971","-","Mar","Sun>=8",["2","0","0","s"],"0","S"],["1972","only","-","Feb","lastSun",["2","0","0","s"],"0","S"],["1973","1981","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1982","1983","-","Mar","lastSun",["2","0","0","s"],"0","S"],["1984","1986","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1986","only","-","Oct","Sun>=15",["2","0","0","s"],"60","D"],["1987","1990","-","Mar","Sun>=15",["2","0","0","s"],"0","S"],["1987","only","-","Oct","Sun>=22",["2","0","0","s"],"60","D"],["1988","1990","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1991","1999","-","Oct","Sun>=1",["2","0","0","s"],"60","D"],["1991","2005","-","Mar","lastSun",["2","0","0","s"],"0","S"],["2000","only","-","Aug","lastSun",["2","0","0","s"],"60","D"],["2001","max","-","Oct","Sun>=1",["2","0","0","s"],"60","D"],["2006","only","-","Apr","Sun>=1",["2","0","0","s"],"0","S"],["2007","only","-","Mar","lastSun",["2","0","0","s"],"0","S"],["2008","max","-","Apr","Sun>=1",["2","0","0","s"],"0","S"]],"AV":[["1971","1985","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1972","only","-","Feb","lastSun",["2","0","0","s"],"0","S"],["1973","1985","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1986","1990","-","Mar","Sun>=15",["2","0","0","s"],"0","S"],["1986","1987","-","Oct","Sun>=15",["2","0","0","s"],"60","D"],["1988","1999","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1991","1994","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1995","2005","-","Mar","lastSun",["2","0","0","s"],"0","S"],["2000","only","-","Aug","lastSun",["2","0","0","s"],"60","D"],["2001","2007","-","Oct","lastSun",["2","0","0","s"],"60","D"],["2006","only","-","Apr","Sun>=1",["2","0","0","s"],"0","S"],["2007","only","-","Mar","lastSun",["2","0","0","s"],"0","S"],["2008","max","-","Apr","Sun>=1",["2","0","0","s"],"0","S"],["2008","max","-","Oct","Sun>=1",["2","0","0","s"],"60","D"]],"AN":[["1971","1985","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1972","only","-","Feb","27",["2","0","0","s"],"0","S"],["1973","1981","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1982","only","-","Apr","Sun>=1",["2","0","0","s"],"0","S"],["1983","1985","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1986","1989","-","Mar","Sun>=15",["2","0","0","s"],"0","S"],["1986","only","-","Oct","19",["2","0","0","s"],"60","D"],["1987","1999","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1990","1995","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1996","2005","-","Mar","lastSun",["2","0","0","s"],"0","S"],["2000","only","-","Aug","lastSun",["2","0","0","s"],"60","D"],["2001","2007","-","Oct","lastSun",["2","0","0","s"],"60","D"],["2006","only","-","Apr","Sun>=1",["2","0","0","s"],"0","S"],["2007","only","-","Mar","lastSun",["2","0","0","s"],"0","S"],["2008","max","-","Apr","Sun>=1",["2","0","0","s"],"0","S"],["2008","max","-","Oct","Sun>=1",["2","0","0","s"],"60","D"]],"LH":[["1981","1984","-","Oct","lastSun",["2","0","0",null],"60","-"],["1982","1985","-","Mar","Sun>=1",["2","0","0",null],"0","-"],["1985","only","-","Oct","lastSun",["2","0","0",null],"30","-"],["1986","1989","-","Mar","Sun>=15",["2","0","0",null],"0","-"],["1986","only","-","Oct","19",["2","0","0",null],"30","-"],["1987","1999","-","Oct","lastSun",["2","0","0",null],"30","-"],["1990","1995","-","Mar","Sun>=1",["2","0","0",null],"0","-"],["1996","2005","-","Mar","lastSun",["2","0","0",null],"0","-"],["2000","only","-","Aug","lastSun",["2","0","0",null],"30","-"],["2001","2007","-","Oct","lastSun",["2","0","0",null],"30","-"],["2006","only","-","Apr","Sun>=1",["2","0","0",null],"0","-"],["2007","only","-","Mar","lastSun",["2","0","0",null],"0","-"],["2008","max","-","Apr","Sun>=1",["2","0","0",null],"0","-"],["2008","max","-","Oct","Sun>=1",["2","0","0",null],"30","-"]],"Fiji":[["1998","1999","-","Nov","Sun>=1",["2","0","0",null],"60","-"],["1999","2000","-","Feb","lastSun",["3","0","0",null],"0","-"],["2009","only","-","Nov","29",["2","0","0",null],"60","-"],["2010","only","-","Mar","lastSun",["3","0","0",null],"0","-"],["2010","2013","-","Oct","Sun>=21",["2","0","0",null],"60","-"],["2011","only","-","Mar","Sun>=1",["3","0","0",null],"0","-"],["2012","2013","-","Jan","Sun>=18",["3","0","0",null],"0","-"],["2014","only","-","Jan","Sun>=18",["2","0","0",null],"0","-"],["2014","2018","-","Nov","Sun>=1",["2","0","0",null],"60","-"],["2015","2021","-","Jan","Sun>=12",["3","0","0",null],"0","-"],["2019","only","-","Nov","Sun>=8",["2","0","0",null],"60","-"],["2020","only","-","Dec","20",["2","0","0",null],"60","-"]],"Guam":[["1959","only","-","Jun","27",["2","0","0",null],"60","D"],["1961","only","-","Jan","29",["2","0","0",null],"0","S"],["1967","only","-","Sep","1",["2","0","0",null],"60","D"],["1969","only","-","Jan","26",["0","1","0",null],"0","S"],["1969","only","-","Jun","22",["2","0","0",null],"60","D"],["1969","only","-","Aug","31",["2","0","0",null],"0","S"],["1970","1971","-","Apr","lastSun",["2","0","0",null],"60","D"],["1970","1971","-","Sep","Sun>=1",["2","0","0",null],"0","S"],["1973","only","-","Dec","16",["2","0","0",null],"60","D"],["1974","only","-","Feb","24",["2","0","0",null],"0","S"],["1976","only","-","May","26",["2","0","0",null],"60","D"],["1976","only","-","Aug","22",["2","1","0",null],"0","S"],["1977","only","-","Apr","24",["2","0","0",null],"60","D"],["1977","only","-","Aug","28",["2","0","0",null],"0","S"]],"NC":[["1977","1978","-","Dec","Sun>=1",["0","0","0",null],"60","-"],["1978","1979","-","Feb","27",["0","0","0",null],"0","-"],["1996","only","-","Dec","1",["2","0","0","s"],"60","-"],["1997","only","-","Mar","2",["2","0","0","s"],"0","-"]],"NZ":[["1927","only","-","Nov","6",["2","0","0",null],"60","S"],["1928","only","-","Mar","4",["2","0","0",null],"0","M"],["1928","1933","-","Oct","Sun>=8",["2","0","0",null],"30","S"],["1929","1933","-","Mar","Sun>=15",["2","0","0",null],"0","M"],["1934","1940","-","Apr","lastSun",["2","0","0",null],"0","M"],["1934","1940","-","Sep","lastSun",["2","0","0",null],"30","S"],["1946","only","-","Jan","1",["0","0","0",null],"0","S"],["1974","only","-","Nov","Sun>=1",["2","0","0","s"],"60","D"],["1975","only","-","Feb","lastSun",["2","0","0","s"],"0","S"],["1975","1988","-","Oct","lastSun",["2","0","0","s"],"60","D"],["1976","1989","-","Mar","Sun>=1",["2","0","0","s"],"0","S"],["1989","only","-","Oct","Sun>=8",["2","0","0","s"],"60","D"],["1990","2006","-","Oct","Sun>=1",["2","0","0","s"],"60","D"],["1990","2007","-","Mar","Sun>=15",["2","0","0","s"],"0","S"],["2007","max","-","Sep","lastSun",["2","0","0","s"],"60","D"],["2008","max","-","Apr","Sun>=1",["2","0","0","s"],"0","S"]],"Chatham":[["1974","only","-","Nov","Sun>=1",["2","45","0","s"],"60","-"],["1975","only","-","Feb","lastSun",["2","45","0","s"],"0","-"],["1975","1988","-","Oct","lastSun",["2","45","0","s"],"60","-"],["1976","1989","-","Mar","Sun>=1",["2","45","0","s"],"0","-"],["1989","only","-","Oct","Sun>=8",["2","45","0","s"],"60","-"],["1990","2006","-","Oct","Sun>=1",["2","45","0","s"],"60","-"],["1990","2007","-","Mar","Sun>=15",["2","45","0","s"],"0","-"],["2007","max","-","Sep","lastSun",["2","45","0","s"],"60","-"],["2008","max","-","Apr","Sun>=1",["2","45","0","s"],"0","-"]],"Cook":[["1978","only","-","Nov","12",["0","0","0",null],"30","-"],["1979","1991","-","Mar","Sun>=1",["0","0","0",null],"0","-"],["1979","1990","-","Oct","lastSun",["0","0","0",null],"30","-"]],"WS":[["2010","only","-","Sep","lastSun",["0","0","0",null],"60","-"],["2011","only","-","Apr","Sat>=1",["4","0","0",null],"0","-"],["2011","only","-","Sep","lastSat",["3","0","0",null],"60","-"],["2012","2021","-","Apr","Sun>=1",["4","0","0",null],"0","-"],["2012","2020","-","Sep","lastSun",["3","0","0",null],"60","-"]],"Tonga":[["1999","only","-","Oct","7",["2","0","0","s"],"60","-"],["2000","only","-","Mar","19",["2","0","0","s"],"0","-"],["2000","2001","-","Nov","Sun>=1",["2","0","0",null],"60","-"],["2001","2002","-","Jan","lastSun",["2","0","0",null],"0","-"],["2016","only","-","Nov","Sun>=1",["2","0","0",null],"60","-"],["2017","only","-","Jan","Sun>=15",["3","0","0",null],"0","-"]],"Vanuatu":[["1973","only","-","Dec","22",["12","0","0","u"],"60","-"],["1974","only","-","Mar","30",["12","0","0","u"],"0","-"],["1983","1991","-","Sep","Sat>=22",["24","0","0",null],"60","-"],["1984","1991","-","Mar","Sat>=22",["24","0","0",null],"0","-"],["1992","1993","-","Jan","Sat>=22",["24","0","0",null],"0","-"],["1992","only","-","Oct","Sat>=22",["24","0","0",null],"60","-"]]},"version":"2022g"}
},{}]},{},[])("timezonecomplete")
});

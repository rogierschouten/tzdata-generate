(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tzdataAfrica = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"timezonecomplete":[function(require,module,exports){
module.exports={"zones":{"Africa/Algiers":[["-12.2","-","LMT","-2486592000000"],["-9.35","-","PMT","-1855958400000"],["0","Algeria","WE%sT","-942012000000"],["-60","Algeria","CE%sT","-733276800000"],["0","-","WET","-439430400000"],["-60","-","CET","-212025600000"],["0","Algeria","WE%sT","246240000000"],["-60","Algeria","CE%sT","309744000000"],["0","Algeria","WE%sT","357523200000"],["-60","-","CET",null]],"Atlantic/Cape_Verde":[["94.06666666666668","-","LMT","-1830376800000"],["120","-","-02","-862617600000"],["120","1:00","-01","-764121600000"],["120","-","-02","186112800000"],["60","-","-01",null]],"Africa/Ndjamena":[["-60.2","-","LMT","-1830384000000"],["-60","-","WAT","308707200000"],["-60","1:00","WAST","321321600000"],["-60","-","WAT",null]],"Africa/Abidjan":[["16.133333333333333","-","LMT","-1830384000000"],["0","-","GMT",null]],"Africa/Cairo":[["-125.15","-","LMT","-2185401600000"],["-120","Egypt","EE%sT",null]],"Africa/Bissau":[["62.333333333333336","-","LMT","-1830380400000"],["60","-","-01","189216000000"],["0","-","GMT",null]],"Africa/Nairobi":[["-147.26666666666665","-","LMT","-1946160000000"],["-150","-","+0230","-1309737600000"],["-180","-","EAT","-1261958400000"],["-150","-","+0230","-1041379200000"],["-165","-","+0245","-865296000000"],["-180","-","EAT",null]],"Africa/Monrovia":[["43.13333333333333","-","LMT","-2745532800000"],["43.13333333333333","-","MMT","-1604361600000"],["44.5","-","MMT","63590400000"],["0","-","GMT",null]],"Africa/Tripoli":[["-52.733333333333334","-","LMT","-1546387200000"],["-60","Libya","CE%sT","-315705600000"],["-120","-","EET","410140800000"],["-60","Libya","CE%sT","641779200000"],["-120","-","EET","844041600000"],["-60","Libya","CE%sT","875923200000"],["-120","-","EET","1352512800000"],["-60","Libya","CE%sT","1382666400000"],["-120","-","EET",null]],"Indian/Mauritius":[["-230","-","LMT","-1956700800000"],["-240","Mauritius","+04/+05",null]],"Africa/Casablanca":[["30.333333333333332","-","LMT","-1773014400000"],["0","Morocco","+00/+01","448243200000"],["-60","-","+01","536371200000"],["0","Morocco","+00/+01","1540695600000"],["-60","Morocco","+01/+00",null]],"Africa/El_Aaiun":[["52.8","-","LMT","-1136073600000"],["60","-","-01","198288000000"],["0","Morocco","+00/+01","1540695600000"],["-60","Morocco","+01/+00",null]],"Africa/Maputo":[["-130.33333333333331","-","LMT","-2109283200000"],["-120","-","CAT",null]],"Africa/Windhoek":[["-68.4","-","LMT","-2458166400000"],["-90","-","+0130","-2109283200000"],["-120","-","SAST","-860968800000"],["-120","1:00","SAST","-845244000000"],["-120","-","SAST","637977600000"],["-120","Namibia","%s",null]],"Africa/Lagos":[["-13.583333333333334","-","LMT","-2035584000000"],["0","-","GMT","-1940889600000"],["-13.583333333333334","-","LMT","-1767225600000"],["-30","-","+0030","-1588464000000"],["-60","-","WAT",null]],"Africa/Sao_Tome":[["-26.933333333333334","-","LMT","-2682374400000"],["36.75","-","LMT","-1830384000000"],["0","-","GMT","1514768400000"],["-60","-","WAT","1546308000000"],["0","-","GMT",null]],"Africa/Johannesburg":[["-112","-","LMT","-2458166400000"],["-90","-","SAST","-2109283200000"],["-120","SA","SAST",null]],"Africa/Khartoum":[["-130.13333333333333","-","LMT","-1199318400000"],["-120","Sudan","CA%sT","947937600000"],["-180","-","EAT","1509494400000"],["-120","-","CAT",null]],"Africa/Juba":[["-126.46666666666667","-","LMT","-1199318400000"],["-120","Sudan","CA%sT","947937600000"],["-180","-","EAT","1612137600000"],["-120","-","CAT",null]],"Africa/Tunis":[["-40.733333333333334","-","LMT","-2797200000000"],["-9.35","-","PMT","-1855958400000"],["-60","Tunisia","CE%sT",null]]},"rules":{"Algeria":[["1916","only","-","Jun","14",["23","0","0","s"],"60","S"],["1916","1919","-","Oct","Sun>=1",["23","0","0","s"],"0","-"],["1917","only","-","Mar","24",["23","0","0","s"],"60","S"],["1918","only","-","Mar","9",["23","0","0","s"],"60","S"],["1919","only","-","Mar","1",["23","0","0","s"],"60","S"],["1920","only","-","Feb","14",["23","0","0","s"],"60","S"],["1920","only","-","Oct","23",["23","0","0","s"],"0","-"],["1921","only","-","Mar","14",["23","0","0","s"],"60","S"],["1921","only","-","Jun","21",["23","0","0","s"],"0","-"],["1939","only","-","Sep","11",["23","0","0","s"],"60","S"],["1939","only","-","Nov","19",["1","0","0",null],"0","-"],["1944","1945","-","Apr","Mon>=1",["2","0","0",null],"60","S"],["1944","only","-","Oct","8",["2","0","0",null],"0","-"],["1945","only","-","Sep","16",["1","0","0",null],"0","-"],["1971","only","-","Apr","25",["23","0","0","s"],"60","S"],["1971","only","-","Sep","26",["23","0","0","s"],"0","-"],["1977","only","-","May","6",["0","0","0",null],"60","S"],["1977","only","-","Oct","21",["0","0","0",null],"0","-"],["1978","only","-","Mar","24",["1","0","0",null],"60","S"],["1978","only","-","Sep","22",["3","0","0",null],"0","-"],["1980","only","-","Apr","25",["0","0","0",null],"60","S"],["1980","only","-","Oct","31",["2","0","0",null],"0","-"]],"Egypt":[["1940","only","-","Jul","15",["0","0","0",null],"60","S"],["1940","only","-","Oct","1",["0","0","0",null],"0","-"],["1941","only","-","Apr","15",["0","0","0",null],"60","S"],["1941","only","-","Sep","16",["0","0","0",null],"0","-"],["1942","1944","-","Apr","1",["0","0","0",null],"60","S"],["1942","only","-","Oct","27",["0","0","0",null],"0","-"],["1943","1945","-","Nov","1",["0","0","0",null],"0","-"],["1945","only","-","Apr","16",["0","0","0",null],"60","S"],["1957","only","-","May","10",["0","0","0",null],"60","S"],["1957","1958","-","Oct","1",["0","0","0",null],"0","-"],["1958","only","-","May","1",["0","0","0",null],"60","S"],["1959","1981","-","May","1",["1","0","0",null],"60","S"],["1959","1965","-","Sep","30",["3","0","0",null],"0","-"],["1966","1994","-","Oct","1",["3","0","0",null],"0","-"],["1982","only","-","Jul","25",["1","0","0",null],"60","S"],["1983","only","-","Jul","12",["1","0","0",null],"60","S"],["1984","1988","-","May","1",["1","0","0",null],"60","S"],["1989","only","-","May","6",["1","0","0",null],"60","S"],["1990","1994","-","May","1",["1","0","0",null],"60","S"],["1995","2010","-","Apr","lastFri",["0","0","0","s"],"60","S"],["1995","2005","-","Sep","lastThu",["24","0","0",null],"0","-"],["2006","only","-","Sep","21",["24","0","0",null],"0","-"],["2007","only","-","Sep","Thu>=1",["24","0","0",null],"0","-"],["2008","only","-","Aug","lastThu",["24","0","0",null],"0","-"],["2009","only","-","Aug","20",["24","0","0",null],"0","-"],["2010","only","-","Aug","10",["24","0","0",null],"0","-"],["2010","only","-","Sep","9",["24","0","0",null],"60","S"],["2010","only","-","Sep","lastThu",["24","0","0",null],"0","-"],["2014","only","-","May","15",["24","0","0",null],"60","S"],["2014","only","-","Jun","26",["24","0","0",null],"0","-"],["2014","only","-","Jul","31",["24","0","0",null],"60","S"],["2014","only","-","Sep","lastThu",["24","0","0",null],"0","-"],["2023","max","-","Apr","lastFri",["0","0","0",null],"60","S"],["2023","max","-","Oct","lastThu",["24","0","0",null],"0","-"]],"Libya":[["1951","only","-","Oct","14",["2","0","0",null],"60","S"],["1952","only","-","Jan","1",["0","0","0",null],"0","-"],["1953","only","-","Oct","9",["2","0","0",null],"60","S"],["1954","only","-","Jan","1",["0","0","0",null],"0","-"],["1955","only","-","Sep","30",["0","0","0",null],"60","S"],["1956","only","-","Jan","1",["0","0","0",null],"0","-"],["1982","1984","-","Apr","1",["0","0","0",null],"60","S"],["1982","1985","-","Oct","1",["0","0","0",null],"0","-"],["1985","only","-","Apr","6",["0","0","0",null],"60","S"],["1986","only","-","Apr","4",["0","0","0",null],"60","S"],["1986","only","-","Oct","3",["0","0","0",null],"0","-"],["1987","1989","-","Apr","1",["0","0","0",null],"60","S"],["1987","1989","-","Oct","1",["0","0","0",null],"0","-"],["1997","only","-","Apr","4",["0","0","0",null],"60","S"],["1997","only","-","Oct","4",["0","0","0",null],"0","-"],["2013","only","-","Mar","lastFri",["1","0","0",null],"60","S"],["2013","only","-","Oct","lastFri",["2","0","0",null],"0","-"]],"Mauritius":[["1982","only","-","Oct","10",["0","0","0",null],"60","-"],["1983","only","-","Mar","21",["0","0","0",null],"0","-"],["2008","only","-","Oct","lastSun",["2","0","0",null],"60","-"],["2009","only","-","Mar","lastSun",["2","0","0",null],"0","-"]],"Morocco":[["1939","only","-","Sep","12",["0","0","0",null],"60","-"],["1939","only","-","Nov","19",["0","0","0",null],"0","-"],["1940","only","-","Feb","25",["0","0","0",null],"60","-"],["1945","only","-","Nov","18",["0","0","0",null],"0","-"],["1950","only","-","Jun","11",["0","0","0",null],"60","-"],["1950","only","-","Oct","29",["0","0","0",null],"0","-"],["1967","only","-","Jun","3",["12","0","0",null],"60","-"],["1967","only","-","Oct","1",["0","0","0",null],"0","-"],["1974","only","-","Jun","24",["0","0","0",null],"60","-"],["1974","only","-","Sep","1",["0","0","0",null],"0","-"],["1976","1977","-","May","1",["0","0","0",null],"60","-"],["1976","only","-","Aug","1",["0","0","0",null],"0","-"],["1977","only","-","Sep","28",["0","0","0",null],"0","-"],["1978","only","-","Jun","1",["0","0","0",null],"60","-"],["1978","only","-","Aug","4",["0","0","0",null],"0","-"],["2008","only","-","Jun","1",["0","0","0",null],"60","-"],["2008","only","-","Sep","1",["0","0","0",null],"0","-"],["2009","only","-","Jun","1",["0","0","0",null],"60","-"],["2009","only","-","Aug","21",["0","0","0",null],"0","-"],["2010","only","-","May","2",["0","0","0",null],"60","-"],["2010","only","-","Aug","8",["0","0","0",null],"0","-"],["2011","only","-","Apr","3",["0","0","0",null],"60","-"],["2011","only","-","Jul","31",["0","0","0",null],"0","-"],["2012","2013","-","Apr","lastSun",["2","0","0",null],"60","-"],["2012","only","-","Jul","20",["3","0","0",null],"0","-"],["2012","only","-","Aug","20",["2","0","0",null],"60","-"],["2012","only","-","Sep","30",["3","0","0",null],"0","-"],["2013","only","-","Jul","7",["3","0","0",null],"0","-"],["2013","only","-","Aug","10",["2","0","0",null],"60","-"],["2013","2018","-","Oct","lastSun",["3","0","0",null],"0","-"],["2014","2018","-","Mar","lastSun",["2","0","0",null],"60","-"],["2014","only","-","Jun","28",["3","0","0",null],"0","-"],["2014","only","-","Aug","2",["2","0","0",null],"60","-"],["2015","only","-","Jun","14",["3","0","0",null],"0","-"],["2015","only","-","Jul","19",["2","0","0",null],"60","-"],["2016","only","-","Jun","5",["3","0","0",null],"0","-"],["2016","only","-","Jul","10",["2","0","0",null],"60","-"],["2017","only","-","May","21",["3","0","0",null],"0","-"],["2017","only","-","Jul","2",["2","0","0",null],"60","-"],["2018","only","-","May","13",["3","0","0",null],"0","-"],["2018","only","-","Jun","17",["2","0","0",null],"60","-"],["2019","only","-","May","5",["3","0","0",null],"-60","-"],["2019","only","-","Jun","9",["2","0","0",null],"0","-"],["2020","only","-","Apr","19",["3","0","0",null],"-60","-"],["2020","only","-","May","31",["2","0","0",null],"0","-"],["2021","only","-","Apr","11",["3","0","0",null],"-60","-"],["2021","only","-","May","16",["2","0","0",null],"0","-"],["2022","only","-","Mar","27",["3","0","0",null],"-60","-"],["2022","only","-","May","8",["2","0","0",null],"0","-"],["2023","only","-","Mar","19",["3","0","0",null],"-60","-"],["2023","only","-","Apr","23",["2","0","0",null],"0","-"],["2024","only","-","Mar","10",["3","0","0",null],"-60","-"],["2024","only","-","Apr","14",["2","0","0",null],"0","-"],["2025","only","-","Feb","23",["3","0","0",null],"-60","-"],["2025","only","-","Apr","6",["2","0","0",null],"0","-"],["2026","only","-","Feb","15",["3","0","0",null],"-60","-"],["2026","only","-","Mar","22",["2","0","0",null],"0","-"],["2027","only","-","Feb","7",["3","0","0",null],"-60","-"],["2027","only","-","Mar","14",["2","0","0",null],"0","-"],["2028","only","-","Jan","23",["3","0","0",null],"-60","-"],["2028","only","-","Mar","5",["2","0","0",null],"0","-"],["2029","only","-","Jan","14",["3","0","0",null],"-60","-"],["2029","only","-","Feb","18",["2","0","0",null],"0","-"],["2029","only","-","Dec","30",["3","0","0",null],"-60","-"],["2030","only","-","Feb","10",["2","0","0",null],"0","-"],["2030","only","-","Dec","22",["3","0","0",null],"-60","-"],["2031","only","-","Jan","26",["2","0","0",null],"0","-"],["2031","only","-","Dec","14",["3","0","0",null],"-60","-"],["2032","only","-","Jan","18",["2","0","0",null],"0","-"],["2032","only","-","Nov","28",["3","0","0",null],"-60","-"],["2033","only","-","Jan","9",["2","0","0",null],"0","-"],["2033","only","-","Nov","20",["3","0","0",null],"-60","-"],["2033","only","-","Dec","25",["2","0","0",null],"0","-"],["2034","only","-","Nov","5",["3","0","0",null],"-60","-"],["2034","only","-","Dec","17",["2","0","0",null],"0","-"],["2035","only","-","Oct","28",["3","0","0",null],"-60","-"],["2035","only","-","Dec","9",["2","0","0",null],"0","-"],["2036","only","-","Oct","19",["3","0","0",null],"-60","-"],["2036","only","-","Nov","23",["2","0","0",null],"0","-"],["2037","only","-","Oct","4",["3","0","0",null],"-60","-"],["2037","only","-","Nov","15",["2","0","0",null],"0","-"],["2038","only","-","Sep","26",["3","0","0",null],"-60","-"],["2038","only","-","Oct","31",["2","0","0",null],"0","-"],["2039","only","-","Sep","18",["3","0","0",null],"-60","-"],["2039","only","-","Oct","23",["2","0","0",null],"0","-"],["2040","only","-","Sep","2",["3","0","0",null],"-60","-"],["2040","only","-","Oct","14",["2","0","0",null],"0","-"],["2041","only","-","Aug","25",["3","0","0",null],"-60","-"],["2041","only","-","Sep","29",["2","0","0",null],"0","-"],["2042","only","-","Aug","10",["3","0","0",null],"-60","-"],["2042","only","-","Sep","21",["2","0","0",null],"0","-"],["2043","only","-","Aug","2",["3","0","0",null],"-60","-"],["2043","only","-","Sep","13",["2","0","0",null],"0","-"],["2044","only","-","Jul","24",["3","0","0",null],"-60","-"],["2044","only","-","Aug","28",["2","0","0",null],"0","-"],["2045","only","-","Jul","9",["3","0","0",null],"-60","-"],["2045","only","-","Aug","20",["2","0","0",null],"0","-"],["2046","only","-","Jul","1",["3","0","0",null],"-60","-"],["2046","only","-","Aug","5",["2","0","0",null],"0","-"],["2047","only","-","Jun","23",["3","0","0",null],"-60","-"],["2047","only","-","Jul","28",["2","0","0",null],"0","-"],["2048","only","-","Jun","7",["3","0","0",null],"-60","-"],["2048","only","-","Jul","19",["2","0","0",null],"0","-"],["2049","only","-","May","30",["3","0","0",null],"-60","-"],["2049","only","-","Jul","4",["2","0","0",null],"0","-"],["2050","only","-","May","15",["3","0","0",null],"-60","-"],["2050","only","-","Jun","26",["2","0","0",null],"0","-"],["2051","only","-","May","7",["3","0","0",null],"-60","-"],["2051","only","-","Jun","18",["2","0","0",null],"0","-"],["2052","only","-","Apr","28",["3","0","0",null],"-60","-"],["2052","only","-","Jun","2",["2","0","0",null],"0","-"],["2053","only","-","Apr","13",["3","0","0",null],"-60","-"],["2053","only","-","May","25",["2","0","0",null],"0","-"],["2054","only","-","Apr","5",["3","0","0",null],"-60","-"],["2054","only","-","May","10",["2","0","0",null],"0","-"],["2055","only","-","Mar","28",["3","0","0",null],"-60","-"],["2055","only","-","May","2",["2","0","0",null],"0","-"],["2056","only","-","Mar","12",["3","0","0",null],"-60","-"],["2056","only","-","Apr","23",["2","0","0",null],"0","-"],["2057","only","-","Mar","4",["3","0","0",null],"-60","-"],["2057","only","-","Apr","8",["2","0","0",null],"0","-"],["2058","only","-","Feb","17",["3","0","0",null],"-60","-"],["2058","only","-","Mar","31",["2","0","0",null],"0","-"],["2059","only","-","Feb","9",["3","0","0",null],"-60","-"],["2059","only","-","Mar","23",["2","0","0",null],"0","-"],["2060","only","-","Feb","1",["3","0","0",null],"-60","-"],["2060","only","-","Mar","7",["2","0","0",null],"0","-"],["2061","only","-","Jan","16",["3","0","0",null],"-60","-"],["2061","only","-","Feb","27",["2","0","0",null],"0","-"],["2062","only","-","Jan","8",["3","0","0",null],"-60","-"],["2062","only","-","Feb","12",["2","0","0",null],"0","-"],["2062","only","-","Dec","31",["3","0","0",null],"-60","-"],["2063","only","-","Feb","4",["2","0","0",null],"0","-"],["2063","only","-","Dec","16",["3","0","0",null],"-60","-"],["2064","only","-","Jan","27",["2","0","0",null],"0","-"],["2064","only","-","Dec","7",["3","0","0",null],"-60","-"],["2065","only","-","Jan","11",["2","0","0",null],"0","-"],["2065","only","-","Nov","22",["3","0","0",null],"-60","-"],["2066","only","-","Jan","3",["2","0","0",null],"0","-"],["2066","only","-","Nov","14",["3","0","0",null],"-60","-"],["2066","only","-","Dec","26",["2","0","0",null],"0","-"],["2067","only","-","Nov","6",["3","0","0",null],"-60","-"],["2067","only","-","Dec","11",["2","0","0",null],"0","-"],["2068","only","-","Oct","21",["3","0","0",null],"-60","-"],["2068","only","-","Dec","2",["2","0","0",null],"0","-"],["2069","only","-","Oct","13",["3","0","0",null],"-60","-"],["2069","only","-","Nov","17",["2","0","0",null],"0","-"],["2070","only","-","Oct","5",["3","0","0",null],"-60","-"],["2070","only","-","Nov","9",["2","0","0",null],"0","-"],["2071","only","-","Sep","20",["3","0","0",null],"-60","-"],["2071","only","-","Nov","1",["2","0","0",null],"0","-"],["2072","only","-","Sep","11",["3","0","0",null],"-60","-"],["2072","only","-","Oct","16",["2","0","0",null],"0","-"],["2073","only","-","Aug","27",["3","0","0",null],"-60","-"],["2073","only","-","Oct","8",["2","0","0",null],"0","-"],["2074","only","-","Aug","19",["3","0","0",null],"-60","-"],["2074","only","-","Sep","30",["2","0","0",null],"0","-"],["2075","only","-","Aug","11",["3","0","0",null],"-60","-"],["2075","only","-","Sep","15",["2","0","0",null],"0","-"],["2076","only","-","Jul","26",["3","0","0",null],"-60","-"],["2076","only","-","Sep","6",["2","0","0",null],"0","-"],["2077","only","-","Jul","18",["3","0","0",null],"-60","-"],["2077","only","-","Aug","22",["2","0","0",null],"0","-"],["2078","only","-","Jul","10",["3","0","0",null],"-60","-"],["2078","only","-","Aug","14",["2","0","0",null],"0","-"],["2079","only","-","Jun","25",["3","0","0",null],"-60","-"],["2079","only","-","Aug","6",["2","0","0",null],"0","-"],["2080","only","-","Jun","16",["3","0","0",null],"-60","-"],["2080","only","-","Jul","21",["2","0","0",null],"0","-"],["2081","only","-","Jun","1",["3","0","0",null],"-60","-"],["2081","only","-","Jul","13",["2","0","0",null],"0","-"],["2082","only","-","May","24",["3","0","0",null],"-60","-"],["2082","only","-","Jun","28",["2","0","0",null],"0","-"],["2083","only","-","May","16",["3","0","0",null],"-60","-"],["2083","only","-","Jun","20",["2","0","0",null],"0","-"],["2084","only","-","Apr","30",["3","0","0",null],"-60","-"],["2084","only","-","Jun","11",["2","0","0",null],"0","-"],["2085","only","-","Apr","22",["3","0","0",null],"-60","-"],["2085","only","-","May","27",["2","0","0",null],"0","-"],["2086","only","-","Apr","14",["3","0","0",null],"-60","-"],["2086","only","-","May","19",["2","0","0",null],"0","-"],["2087","only","-","Mar","30",["3","0","0",null],"-60","-"],["2087","only","-","May","11",["2","0","0",null],"0","-"]],"Namibia":[["1994","only","-","Mar","21",["0","0","0",null],"-60","WAT"],["1994","2017","-","Sep","Sun>=1",["2","0","0",null],"0","CAT"],["1995","2017","-","Apr","Sun>=1",["2","0","0",null],"-60","WAT"]],"SA":[["1942","1943","-","Sep","Sun>=15",["2","0","0",null],"60","-"],["1943","1944","-","Mar","Sun>=15",["2","0","0",null],"0","-"]],"Sudan":[["1970","only","-","May","1",["0","0","0",null],"60","S"],["1970","1985","-","Oct","15",["0","0","0",null],"0","-"],["1971","only","-","Apr","30",["0","0","0",null],"60","S"],["1972","1985","-","Apr","lastSun",["0","0","0",null],"60","S"]],"Tunisia":[["1939","only","-","Apr","15",["23","0","0","s"],"60","S"],["1939","only","-","Nov","18",["23","0","0","s"],"0","-"],["1940","only","-","Feb","25",["23","0","0","s"],"60","S"],["1941","only","-","Oct","6",["0","0","0",null],"0","-"],["1942","only","-","Mar","9",["0","0","0",null],"60","S"],["1942","only","-","Nov","2",["3","0","0",null],"0","-"],["1943","only","-","Mar","29",["2","0","0",null],"60","S"],["1943","only","-","Apr","17",["2","0","0",null],"0","-"],["1943","only","-","Apr","25",["2","0","0",null],"60","S"],["1943","only","-","Oct","4",["2","0","0",null],"0","-"],["1944","1945","-","Apr","Mon>=1",["2","0","0",null],"60","S"],["1944","only","-","Oct","8",["0","0","0",null],"0","-"],["1945","only","-","Sep","16",["0","0","0",null],"0","-"],["1977","only","-","Apr","30",["0","0","0","s"],"60","S"],["1977","only","-","Sep","24",["0","0","0","s"],"0","-"],["1978","only","-","May","1",["0","0","0","s"],"60","S"],["1978","only","-","Oct","1",["0","0","0","s"],"0","-"],["1988","only","-","Jun","1",["0","0","0","s"],"60","S"],["1988","1990","-","Sep","lastSun",["0","0","0","s"],"0","-"],["1989","only","-","Mar","26",["0","0","0","s"],"60","S"],["1990","only","-","May","1",["0","0","0","s"],"60","S"],["2005","only","-","May","1",["0","0","0","s"],"60","S"],["2005","only","-","Sep","30",["1","0","0","s"],"0","-"],["2006","2008","-","Mar","lastSun",["2","0","0","s"],"60","S"],["2006","2008","-","Oct","lastSun",["2","0","0","s"],"0","-"]]},"version":"2024a"}
},{}]},{},[])("timezonecomplete")
});

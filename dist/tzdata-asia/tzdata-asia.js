(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tzdataAsia = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"timezonecomplete":[function(require,module,exports){
module.exports={"zones":{"Asia/Kabul":[["-276.8","-","LMT","-2493072000000"],["-240","-","+04","-757468800000"],["-270","-","+0430",null]],"Asia/Yerevan":[["-178","-","LMT","-1441152000000"],["-180","-","+03","-405129600000"],["-240","RussiaAsia","+04/+05","670384800000"],["-180","RussiaAsia","+03/+04","811908000000"],["-240","-","+04","883526400000"],["-240","RussiaAsia","+04/+05","1325289600000"],["-240","Armenia","+04/+05",null]],"Asia/Baku":[["-199.4","-","LMT","-1441152000000"],["-180","-","+03","-405129600000"],["-240","RussiaAsia","+04/+05","670384800000"],["-180","RussiaAsia","+03/+04","715312800000"],["-240","-","+04","851990400000"],["-240","EUAsia","+04/+05","883526400000"],["-240","Azer","+04/+05",null]],"Asia/Dhaka":[["-361.6666666666667","-","LMT","-2493072000000"],["-353.3333333333333","-","HMT","-891561600000"],["-390","-","+0630","-872035200000"],["-330","-","+0530","-862617600000"],["-390","-","+0630","-576115200000"],["-360","-","+06","1262217600000"],["-360","Dhaka","+06/+07",null]],"Asia/Thimphu":[["-358.6","-","LMT","-706320000000"],["-330","-","+0530","560044800000"],["-360","-","+06",null]],"Indian/Chagos":[["-289.6666666666667","-","LMT","-1956700800000"],["-300","-","+05","851990400000"],["-360","-","+06",null]],"Asia/Brunei":[["-459.6666666666667","-","LMT","-1383436800000"],["-450","-","+0730","-1136160000000"],["-480","-","+08",null]],"Asia/Yangon":[["-384.7833333333333","-","LMT","-2808604800000"],["-384.7833333333333","-","RMT","-1546387200000"],["-390","-","+0630","-873244800000"],["-540","-","+09","-778377600000"],["-390","-","+0630",null]],"Asia/Shanghai":[["-485.7166666666667","-","LMT","-2146003200000"],["-480","Shang","C%sT","-649987200000"],["-480","PRC","C%sT",null]],"Asia/Urumqi":[["-350.3333333333333","-","LMT","-1293926400000"],["-360","-","+06",null]],"Asia/Hong_Kong":[["-456.7","-","LMT","-2056665600000"],["-480","HK","HK%sT","-884217600000"],["-540","-","JST","-766713600000"],["-480","HK","HK%sT",null]],"Asia/Taipei":[["-486","-","LMT","-2335219200000"],["-480","-","CST","-1017792000000"],["-540","-","JST","-766191600000"],["-480","Taiwan","C%sT",null]],"Asia/Macau":[["-454.1666666666667","-","LMT","-2056665600000"],["-480","-","CST","-884480400000"],["-540","Macau","+09/+10","-765331200000"],["-480","Macau","C%sT",null]],"Asia/Nicosia":[["-133.46666666666667","-","LMT","-1518912000000"],["-120","Cyprus","EE%sT","904608000000"],["-120","EUAsia","EE%sT",null]],"Asia/Famagusta":[["-135.8","-","LMT","-1518912000000"],["-120","Cyprus","EE%sT","904608000000"],["-120","EUAsia","EE%sT","1473292800000"],["-180","-","+03","1509238800000"],["-120","EUAsia","EE%sT",null]],"Europe/Nicosia":"Asia/Nicosia","Asia/Tbilisi":[["-179.18333333333334","-","LMT","-2808604800000"],["-179.18333333333334","-","TBMT","-1441152000000"],["-180","-","+03","-405129600000"],["-240","RussiaAsia","+04/+05","670384800000"],["-180","RussiaAsia","+03/+04","725760000000"],["-180","E-EurAsia","+03/+04","778377600000"],["-240","E-EurAsia","+04/+05","844128000000"],["-240","1:00","+05","857174400000"],["-240","E-EurAsia","+04/+05","1088294400000"],["-180","RussiaAsia","+03/+04","1109642400000"],["-240","-","+04",null]],"Asia/Dili":[["-502.3333333333333","-","LMT","-1830384000000"],["-480","-","+08","-879123600000"],["-540","-","+09","199929600000"],["-480","-","+08","969148800000"],["-540","-","+09",null]],"Asia/Kolkata":[["-353.4666666666667","-","LMT","-3645216000000"],["-353.3333333333333","-","HMT","-3124224000000"],["-321.1666666666667","-","MMT","-2019686400000"],["-330","-","IST","-891561600000"],["-330","1:00","+0630","-872035200000"],["-330","-","IST","-862617600000"],["-330","1:00","+0630","-764121600000"],["-330","-","IST",null]],"Asia/Jakarta":[["-427.2","-","LMT","-3231273600000"],["-427.2","-","BMT","-1451693568000"],["-440","-","+0720","-1172880000000"],["-450","-","+0730","-876614400000"],["-540","-","+09","-766022400000"],["-450","-","+0730","-683856000000"],["-480","-","+08","-620784000000"],["-450","-","+0730","-157852800000"],["-420","-","WIB",null]],"Asia/Pontianak":[["-437.3333333333333","-","LMT","-1946160000000"],["-437.3333333333333","-","PMT","-1172880000000"],["-450","-","+0730","-881193600000"],["-540","-","+09","-766022400000"],["-450","-","+0730","-683856000000"],["-480","-","+08","-620784000000"],["-450","-","+0730","-157852800000"],["-480","-","WITA","567993600000"],["-420","-","WIB",null]],"Asia/Makassar":[["-477.6","-","LMT","-1546387200000"],["-477.6","-","MMT","-1172880000000"],["-480","-","+08","-880243200000"],["-540","-","+09","-766022400000"],["-480","-","WITA",null]],"Asia/Jayapura":[["-562.8","-","LMT","-1172880000000"],["-540","-","+09","-799459200000"],["-570","-","+0930","-157852800000"],["-540","-","WIT",null]],"Asia/Tehran":[["-205.73333333333335","-","LMT","-1672617600000"],["-205.73333333333335","-","TMT","-725932800000"],["-210","-","+0330","247190400000"],["-240","Iran","+04/+05","315446400000"],["-210","Iran","+0330/+0430",null]],"Asia/Baghdad":[["-177.66666666666666","-","LMT","-2493072000000"],["-177.6","-","BMT","-1609545600000"],["-180","-","+03","389059200000"],["-180","Iraq","+03/+04",null]],"Asia/Jerusalem":[["-140.9","-","LMT","-2808604800000"],["-140.66666666666666","-","JMT","-1609545600000"],["-120","Zion","I%sT",null]],"Asia/Tokyo":[["-558.9833333333333","-","LMT","-2587712400000"],["-540","Japan","J%sT",null]],"Asia/Amman":[["-143.73333333333335","-","LMT","-1199318400000"],["-120","Jordan","EE%sT",null]],"Asia/Almaty":[["-307.8","-","LMT","-1441152000000"],["-300","-","+05","-1247529600000"],["-360","RussiaAsia","+06/+07","670384800000"],["-300","RussiaAsia","+05/+06","695786400000"],["-360","RussiaAsia","+06/+07","1099188000000"],["-360","-","+06",null]],"Asia/Qyzylorda":[["-261.8666666666667","-","LMT","-1441152000000"],["-240","-","+04","-1247529600000"],["-300","-","+05","354931200000"],["-300","1:00","+06","370742400000"],["-360","-","+06","386467200000"],["-300","RussiaAsia","+05/+06","670384800000"],["-240","RussiaAsia","+04/+05","686109600000"],["-300","RussiaAsia","+05/+06","695786400000"],["-360","RussiaAsia","+06/+07","701834400000"],["-300","RussiaAsia","+05/+06","1099188000000"],["-360","-","+06",null]],"Asia/Aqtobe":[["-228.66666666666666","-","LMT","-1441152000000"],["-240","-","+04","-1247529600000"],["-300","-","+05","354931200000"],["-300","1:00","+06","370742400000"],["-360","-","+06","386467200000"],["-300","RussiaAsia","+05/+06","670384800000"],["-240","RussiaAsia","+04/+05","695786400000"],["-300","RussiaAsia","+05/+06","1099188000000"],["-300","-","+05",null]],"Asia/Aqtau":[["-201.06666666666666","-","LMT","-1441152000000"],["-240","-","+04","-1247529600000"],["-300","-","+05","370742400000"],["-360","-","+06","386467200000"],["-300","RussiaAsia","+05/+06","670384800000"],["-240","RussiaAsia","+04/+05","695786400000"],["-300","RussiaAsia","+05/+06","780458400000"],["-240","RussiaAsia","+04/+05","1099188000000"],["-300","-","+05",null]],"Asia/Atyrau":[["-207.73333333333335","-","LMT","-1441152000000"],["-180","-","+03","-1247529600000"],["-300","-","+05","370742400000"],["-360","-","+06","386467200000"],["-300","RussiaAsia","+05/+06","670384800000"],["-240","RussiaAsia","+04/+05","695786400000"],["-300","RussiaAsia","+05/+06","922586400000"],["-240","RussiaAsia","+04/+05","1099188000000"],["-300","-","+05",null]],"Asia/Oral":[["-205.4","-","LMT","-1441152000000"],["-180","-","+03","-1247529600000"],["-300","-","+05","354931200000"],["-300","1:00","+06","370742400000"],["-360","-","+06","386467200000"],["-300","RussiaAsia","+05/+06","606880800000"],["-240","RussiaAsia","+04/+05","695786400000"],["-300","RussiaAsia","+05/+06","701834400000"],["-240","RussiaAsia","+04/+05","1099188000000"],["-300","-","+05",null]],"Asia/Bishkek":[["-298.4","-","LMT","-1441152000000"],["-300","-","+05","-1247529600000"],["-360","RussiaAsia","+06/+07","670384800000"],["-300","RussiaAsia","+05/+06","683604000000"],["-300","Kyrgyz","+05/+06","1123804800000"],["-360","-","+06",null]],"Asia/Seoul":[["-507.8666666666667","-","LMT","-1948752000000"],["-510","-","KST","-1830384000000"],["-540","-","JST","-767318400000"],["-540","-","KST","-498096000000"],["-510","ROK","K%sT","-264902400000"],["-540","ROK","K%sT",null]],"Asia/Pyongyang":[["-503","-","LMT","-1948752000000"],["-510","-","KST","-1830384000000"],["-540","-","JST","-768614400000"],["-540","-","KST","1439596800000"],["-510","-","KST","1525476600000"],["-540","-","KST",null]],"Asia/Beirut":[["-142","-","LMT","-2808604800000"],["-120","Lebanon","EE%sT",null]],"Asia/Kuala_Lumpur":[["-406.7666666666667","-","LMT","-2177452800000"],["-415.4166666666667","-","SMT","-2038176000000"],["-420","-","+07","-1167609600000"],["-420","0:20","+0720","-1073001600000"],["-440","-","+0720","-894153600000"],["-450","-","+0730","-879638400000"],["-540","-","+09","-766972800000"],["-450","-","+0730","378691200000"],["-480","-","+08",null]],"Asia/Kuching":[["-441.3333333333333","-","LMT","-1383436800000"],["-450","-","+0730","-1136160000000"],["-480","NBorneo","+08/+0820","-879638400000"],["-540","-","+09","-766972800000"],["-480","-","+08",null]],"Indian/Maldives":[["-294","-","LMT","-2808604800000"],["-294","-","MMT","-284083200000"],["-300","-","+05",null]],"Asia/Hovd":[["-366.6","-","LMT","-2032905600000"],["-360","-","+06","283910400000"],["-420","Mongol","+07/+08",null]],"Asia/Ulaanbaatar":[["-427.5333333333333","-","LMT","-2032905600000"],["-420","-","+07","283910400000"],["-480","Mongol","+08/+09",null]],"Asia/Choibalsan":[["-458","-","LMT","-2032905600000"],["-420","-","+07","283910400000"],["-480","-","+08","418003200000"],["-540","Mongol","+09/+10","1206921600000"],["-480","Mongol","+08/+09",null]],"Asia/Kathmandu":[["-341.2666666666667","-","LMT","-1546387200000"],["-330","-","+0530","536371200000"],["-345","-","+0545",null]],"Asia/Karachi":[["-268.2","-","LMT","-1956700800000"],["-330","-","+0530","-862617600000"],["-330","1:00","+0630","-764121600000"],["-330","-","+0530","-576115200000"],["-300","-","+05","38793600000"],["-300","Pakistan","PK%sT",null]],"Asia/Gaza":[["-137.86666666666665","-","LMT","-2185401600000"],["-120","Zion","EET/EEST","-682646400000"],["-120","EgyptAsia","EE%sT","-81302400000"],["-120","Zion","I%sT","851990400000"],["-120","Jordan","EE%sT","946598400000"],["-120","Palestine","EE%sT","1219968000000"],["-120","-","EET","1220227200000"],["-120","Palestine","EE%sT","1293753600000"],["-120","-","EET","1269648060000"],["-120","Palestine","EE%sT","1312156800000"],["-120","-","EET","1356912000000"],["-120","Palestine","EE%sT",null]],"Asia/Hebron":[["-140.38333333333335","-","LMT","-2185401600000"],["-120","Zion","EET/EEST","-682646400000"],["-120","EgyptAsia","EE%sT","-81302400000"],["-120","Zion","I%sT","851990400000"],["-120","Jordan","EE%sT","946598400000"],["-120","Palestine","EE%sT",null]],"Asia/Manila":[["956","-","LMT","-3944678400000"],["-484","-","LMT","-2229292800000"],["-480","Phil","P%sT","-873244800000"],["-540","-","JST","-794188800000"],["-480","Phil","P%sT",null]],"Asia/Qatar":[["-206.13333333333335","-","LMT","-1546387200000"],["-240","-","+04","76204800000"],["-180","-","+03",null]],"Asia/Bahrain":"Asia/Qatar","Asia/Riyadh":[["-186.86666666666665","-","LMT","-719625600000"],["-180","-","+03",null]],"Asia/Aden":"Asia/Riyadh","Asia/Kuwait":"Asia/Riyadh","Asia/Singapore":[["-415.4166666666667","-","LMT","-2177452800000"],["-415.4166666666667","-","SMT","-2038176000000"],["-420","-","+07","-1167609600000"],["-420","0:20","+0720","-1073001600000"],["-440","-","+0720","-894153600000"],["-450","-","+0730","-879638400000"],["-540","-","+09","-766972800000"],["-450","-","+0730","378691200000"],["-480","-","+08",null]],"Asia/Colombo":[["-319.4","-","LMT","-2808604800000"],["-319.5333333333333","-","MMT","-1988236800000"],["-330","-","+0530","-883267200000"],["-330","0:30","+06","-862617600000"],["-330","1:00","+0630","-764028000000"],["-330","-","+0530","832982400000"],["-390","-","+0630","846289800000"],["-360","-","+06","1145061000000"],["-330","-","+0530",null]],"Asia/Damascus":[["-145.2","-","LMT","-1546387200000"],["-120","Syria","EE%sT",null]],"Asia/Dushanbe":[["-275.2","-","LMT","-1441152000000"],["-300","-","+05","-1247529600000"],["-360","RussiaAsia","+06/+07","670384800000"],["-300","1:00","+05/+06","684381600000"],["-300","-","+05",null]],"Asia/Bangkok":[["-402.06666666666666","-","LMT","-2808604800000"],["-402.06666666666666","-","BMT","-1570060800000"],["-420","-","+07",null]],"Asia/Phnom_Penh":"Asia/Bangkok","Asia/Vientiane":"Asia/Bangkok","Asia/Ashgabat":[["-233.53333333333333","-","LMT","-1441152000000"],["-240","-","+04","-1247529600000"],["-300","RussiaAsia","+05/+06","670384800000"],["-240","RussiaAsia","+04/+05","695786400000"],["-300","-","+05",null]],"Asia/Dubai":[["-221.2","-","LMT","-1546387200000"],["-240","-","+04",null]],"Asia/Muscat":"Asia/Dubai","Asia/Samarkand":[["-267.8833333333333","-","LMT","-1441152000000"],["-240","-","+04","-1247529600000"],["-300","-","+05","354931200000"],["-300","1:00","+06","370742400000"],["-360","-","+06","386467200000"],["-300","RussiaAsia","+05/+06","725760000000"],["-300","-","+05",null]],"Asia/Tashkent":[["-277.18333333333334","-","LMT","-1441152000000"],["-300","-","+05","-1247529600000"],["-360","RussiaAsia","+06/+07","670384800000"],["-300","RussiaAsia","+05/+06","725760000000"],["-300","-","+05",null]],"Asia/Ho_Chi_Minh":[["-426.6666666666667","-","LMT","-2004048000000"],["-426.5","-","PLMT","-1851552000000"],["-420","-","+07","-852080400000"],["-480","-","+08","-782614800000"],["-540","-","+09","-767836800000"],["-420","-","+07","-718070400000"],["-480","-","+08","-457747200000"],["-420","-","+07","-315622800000"],["-480","-","+08","171849600000"],["-420","-","+07",null]]},"rules":{"EUAsia":[["1981","max","-","Mar","lastSun",["1","0","0","u"],"60","S"],["1979","1995","-","Sep","lastSun",["1","0","0","u"],"0","-"],["1996","max","-","Oct","lastSun",["1","0","0","u"],"0","-"]],"E-EurAsia":[["1981","max","-","Mar","lastSun",["0","0","0",null],"60","-"],["1979","1995","-","Sep","lastSun",["0","0","0",null],"0","-"],["1996","max","-","Oct","lastSun",["0","0","0",null],"0","-"]],"RussiaAsia":[["1981","1984","-","Apr","1",["0","0","0",null],"60","-"],["1981","1983","-","Oct","1",["0","0","0",null],"0","-"],["1984","1995","-","Sep","lastSun",["2","0","0","s"],"0","-"],["1985","2010","-","Mar","lastSun",["2","0","0","s"],"60","-"],["1996","2010","-","Oct","lastSun",["2","0","0","s"],"0","-"]],"Armenia":[["2011","only","-","Mar","lastSun",["2","0","0","s"],"60","-"],["2011","only","-","Oct","lastSun",["2","0","0","s"],"0","-"]],"Azer":[["1997","2015","-","Mar","lastSun",["4","0","0",null],"60","-"],["1997","2015","-","Oct","lastSun",["5","0","0",null],"0","-"]],"Dhaka":[["2009","only","-","Jun","19",["23","0","0",null],"60","-"],["2009","only","-","Dec","31",["24","0","0",null],"0","-"]],"Shang":[["1940","only","-","Jun","1",["0","0","0",null],"60","D"],["1940","only","-","Oct","12",["24","0","0",null],"0","S"],["1941","only","-","Mar","15",["0","0","0",null],"60","D"],["1941","only","-","Nov","1",["24","0","0",null],"0","S"],["1942","only","-","Jan","31",["0","0","0",null],"60","D"],["1945","only","-","Sep","1",["24","0","0",null],"0","S"],["1946","only","-","May","15",["0","0","0",null],"60","D"],["1946","only","-","Sep","30",["24","0","0",null],"0","S"],["1947","only","-","Apr","15",["0","0","0",null],"60","D"],["1947","only","-","Oct","31",["24","0","0",null],"0","S"],["1948","1949","-","May","1",["0","0","0",null],"60","D"],["1948","1949","-","Sep","30",["24","0","0",null],"0","S",""]],"PRC":[["1986","only","-","May","4",["2","0","0",null],"60","D"],["1986","1991","-","Sep","Sun>=11",["2","0","0",null],"0","S"],["1987","1991","-","Apr","Sun>=11",["2","0","0",null],"60","D"]],"HK":[["1941","only","-","Apr","1",["3","30","0",null],"60","S"],["1941","only","-","Sep","30",["3","30","0",null],"0","-"],["1946","only","-","Apr","20",["3","30","0",null],"60","S"],["1946","only","-","Dec","1",["3","30","0",null],"0","-"],["1947","only","-","Apr","13",["3","30","0",null],"60","S"],["1947","only","-","Dec","30",["3","30","0",null],"0","-"],["1948","only","-","May","2",["3","30","0",null],"60","S"],["1948","1951","-","Oct","lastSun",["3","30","0",null],"0","-"],["1952","only","-","Oct","25",["3","30","0",null],"0","-"],["1949","1953","-","Apr","Sun>=1",["3","30","0",null],"60","S"],["1953","only","-","Nov","1",["3","30","0",null],"0","-"],["1954","1964","-","Mar","Sun>=18",["3","30","0",null],"60","S"],["1954","only","-","Oct","31",["3","30","0",null],"0","-"],["1955","1964","-","Nov","Sun>=1",["3","30","0",null],"0","-"],["1965","1976","-","Apr","Sun>=16",["3","30","0",null],"60","S"],["1965","1976","-","Oct","Sun>=16",["3","30","0",null],"0","-"],["1973","only","-","Dec","30",["3","30","0",null],"60","S"],["1979","only","-","May","Sun>=8",["3","30","0",null],"60","S"],["1979","only","-","Oct","Sun>=16",["3","30","0",null],"0","-"]],"Taiwan":[["1946","only","-","May","15",["0","0","0",null],"60","D"],["1946","only","-","Oct","1",["0","0","0",null],"0","S"],["1947","only","-","Apr","15",["0","0","0",null],"60","D"],["1947","only","-","Nov","1",["0","0","0",null],"0","S"],["1948","1951","-","May","1",["0","0","0",null],"60","D"],["1948","1951","-","Oct","1",["0","0","0",null],"0","S"],["1952","only","-","Mar","1",["0","0","0",null],"60","D"],["1952","1954","-","Nov","1",["0","0","0",null],"0","S"],["1953","1959","-","Apr","1",["0","0","0",null],"60","D"],["1955","1961","-","Oct","1",["0","0","0",null],"0","S"],["1960","1961","-","Jun","1",["0","0","0",null],"60","D"],["1974","1975","-","Apr","1",["0","0","0",null],"60","D"],["1974","1975","-","Oct","1",["0","0","0",null],"0","S"],["1979","only","-","Jul","1",["0","0","0",null],"60","D"],["1979","only","-","Oct","1",["0","0","0",null],"0","S"]],"Macau":[["1942","1943","-","Apr","30",["23","0","0",null],"60","-"],["1942","only","-","Nov","17",["23","0","0",null],"0","-"],["1943","only","-","Sep","30",["23","0","0",null],"0","S"],["1946","only","-","Apr","30",["23","0","0","s"],"60","D"],["1946","only","-","Sep","30",["23","0","0","s"],"0","S"],["1947","only","-","Apr","19",["23","0","0","s"],"60","D"],["1947","only","-","Nov","30",["23","0","0","s"],"0","S"],["1948","only","-","May","2",["23","0","0","s"],"60","D"],["1948","only","-","Oct","31",["23","0","0","s"],"0","S"],["1949","1950","-","Apr","Sat>=1",["23","0","0","s"],"60","D"],["1949","1950","-","Oct","lastSat",["23","0","0","s"],"0","S"],["1951","only","-","Mar","31",["23","0","0","s"],"60","D"],["1951","only","-","Oct","28",["23","0","0","s"],"0","S"],["1952","1953","-","Apr","Sat>=1",["23","0","0","s"],"60","D"],["1952","only","-","Nov","1",["23","0","0","s"],"0","S"],["1953","1954","-","Oct","lastSat",["23","0","0","s"],"0","S"],["1954","1956","-","Mar","Sat>=17",["23","0","0","s"],"60","D"],["1955","only","-","Nov","5",["23","0","0","s"],"0","S"],["1956","1964","-","Nov","Sun>=1",["3","30","0",null],"0","S"],["1957","1964","-","Mar","Sun>=18",["3","30","0",null],"60","D"],["1965","1973","-","Apr","Sun>=16",["3","30","0",null],"60","D"],["1965","1966","-","Oct","Sun>=16",["2","30","0",null],"0","S"],["1967","1976","-","Oct","Sun>=16",["3","30","0",null],"0","S"],["1973","only","-","Dec","30",["3","30","0",null],"60","D"],["1975","1976","-","Apr","Sun>=16",["3","30","0",null],"60","D"],["1979","only","-","May","13",["3","30","0",null],"60","D"],["1979","only","-","Oct","Sun>=16",["3","30","0",null],"0","S"]],"Cyprus":[["1975","only","-","Apr","13",["0","0","0",null],"60","S"],["1975","only","-","Oct","12",["0","0","0",null],"0","-"],["1976","only","-","May","15",["0","0","0",null],"60","S"],["1976","only","-","Oct","11",["0","0","0",null],"0","-"],["1977","1980","-","Apr","Sun>=1",["0","0","0",null],"60","S"],["1977","only","-","Sep","25",["0","0","0",null],"0","-"],["1978","only","-","Oct","2",["0","0","0",null],"0","-"],["1979","1997","-","Sep","lastSun",["0","0","0",null],"0","-"],["1981","1998","-","Mar","lastSun",["0","0","0",null],"60","S"]],"Iran":[["1978","1980","-","Mar","21",["0","0","0",null],"60","-"],["1978","only","-","Oct","21",["0","0","0",null],"0","-"],["1979","only","-","Sep","19",["0","0","0",null],"0","-"],["1980","only","-","Sep","23",["0","0","0",null],"0","-"],["1991","only","-","May","3",["0","0","0",null],"60","-"],["1992","1995","-","Mar","22",["0","0","0",null],"60","-"],["1991","1995","-","Sep","22",["0","0","0",null],"0","-"],["1996","only","-","Mar","21",["0","0","0",null],"60","-"],["1996","only","-","Sep","21",["0","0","0",null],"0","-"],["1997","1999","-","Mar","22",["0","0","0",null],"60","-"],["1997","1999","-","Sep","22",["0","0","0",null],"0","-"],["2000","only","-","Mar","21",["0","0","0",null],"60","-"],["2000","only","-","Sep","21",["0","0","0",null],"0","-"],["2001","2003","-","Mar","22",["0","0","0",null],"60","-"],["2001","2003","-","Sep","22",["0","0","0",null],"0","-"],["2004","only","-","Mar","21",["0","0","0",null],"60","-"],["2004","only","-","Sep","21",["0","0","0",null],"0","-"],["2005","only","-","Mar","22",["0","0","0",null],"60","-"],["2005","only","-","Sep","22",["0","0","0",null],"0","-"],["2008","only","-","Mar","21",["0","0","0",null],"60","-"],["2008","only","-","Sep","21",["0","0","0",null],"0","-"],["2009","2011","-","Mar","22",["0","0","0",null],"60","-"],["2009","2011","-","Sep","22",["0","0","0",null],"0","-"],["2012","only","-","Mar","21",["0","0","0",null],"60","-"],["2012","only","-","Sep","21",["0","0","0",null],"0","-"],["2013","2015","-","Mar","22",["0","0","0",null],"60","-"],["2013","2015","-","Sep","22",["0","0","0",null],"0","-"],["2016","only","-","Mar","21",["0","0","0",null],"60","-"],["2016","only","-","Sep","21",["0","0","0",null],"0","-"],["2017","2019","-","Mar","22",["0","0","0",null],"60","-"],["2017","2019","-","Sep","22",["0","0","0",null],"0","-"],["2020","only","-","Mar","21",["0","0","0",null],"60","-"],["2020","only","-","Sep","21",["0","0","0",null],"0","-"],["2021","2023","-","Mar","22",["0","0","0",null],"60","-"],["2021","2023","-","Sep","22",["0","0","0",null],"0","-"],["2024","only","-","Mar","21",["0","0","0",null],"60","-"],["2024","only","-","Sep","21",["0","0","0",null],"0","-"],["2025","2027","-","Mar","22",["0","0","0",null],"60","-"],["2025","2027","-","Sep","22",["0","0","0",null],"0","-"],["2028","2029","-","Mar","21",["0","0","0",null],"60","-"],["2028","2029","-","Sep","21",["0","0","0",null],"0","-"],["2030","2031","-","Mar","22",["0","0","0",null],"60","-"],["2030","2031","-","Sep","22",["0","0","0",null],"0","-"],["2032","2033","-","Mar","21",["0","0","0",null],"60","-"],["2032","2033","-","Sep","21",["0","0","0",null],"0","-"],["2034","2035","-","Mar","22",["0","0","0",null],"60","-"],["2034","2035","-","Sep","22",["0","0","0",null],"0","-"],["2036","max","-","Mar","21",["0","0","0",null],"60","-"],["2036","max","-","Sep","21",["0","0","0",null],"0","-"]],"Iraq":[["1982","only","-","May","1",["0","0","0",null],"60","-"],["1982","1984","-","Oct","1",["0","0","0",null],"0","-"],["1983","only","-","Mar","31",["0","0","0",null],"60","-"],["1984","1985","-","Apr","1",["0","0","0",null],"60","-"],["1985","1990","-","Sep","lastSun",["1","0","0","s"],"0","-"],["1986","1990","-","Mar","lastSun",["1","0","0","s"],"60","-"],["1991","2007","-","Apr","1",["3","0","0","s"],"60","-"],["1991","2007","-","Oct","1",["3","0","0","s"],"0","-"]],"Zion":[["1940","only","-","Jun","1",["0","0","0",null],"60","D"],["1942","1944","-","Nov","1",["0","0","0",null],"0","S"],["1943","only","-","Apr","1",["2","0","0",null],"60","D"],["1944","only","-","Apr","1",["0","0","0",null],"60","D"],["1945","only","-","Apr","16",["0","0","0",null],"60","D"],["1945","only","-","Nov","1",["2","0","0",null],"0","S"],["1946","only","-","Apr","16",["2","0","0",null],"60","D"],["1946","only","-","Nov","1",["0","0","0",null],"0","S"],["1948","only","-","May","23",["0","0","0",null],"120","DD"],["1948","only","-","Sep","1",["0","0","0",null],"60","D"],["1948","1949","-","Nov","1",["2","0","0",null],"0","S"],["1949","only","-","May","1",["0","0","0",null],"60","D"],["1950","only","-","Apr","16",["0","0","0",null],"60","D"],["1950","only","-","Sep","15",["3","0","0",null],"0","S"],["1951","only","-","Apr","1",["0","0","0",null],"60","D"],["1951","only","-","Nov","11",["3","0","0",null],"0","S"],["1952","only","-","Apr","20",["2","0","0",null],"60","D"],["1952","only","-","Oct","19",["3","0","0",null],"0","S"],["1953","only","-","Apr","12",["2","0","0",null],"60","D"],["1953","only","-","Sep","13",["3","0","0",null],"0","S"],["1954","only","-","Jun","13",["0","0","0",null],"60","D"],["1954","only","-","Sep","12",["0","0","0",null],"0","S"],["1955","only","-","Jun","11",["2","0","0",null],"60","D"],["1955","only","-","Sep","11",["0","0","0",null],"0","S"],["1956","only","-","Jun","3",["0","0","0",null],"60","D"],["1956","only","-","Sep","30",["3","0","0",null],"0","S"],["1957","only","-","Apr","29",["2","0","0",null],"60","D"],["1957","only","-","Sep","22",["0","0","0",null],"0","S"],["1974","only","-","Jul","7",["0","0","0",null],"60","D"],["1974","only","-","Oct","13",["0","0","0",null],"0","S"],["1975","only","-","Apr","20",["0","0","0",null],"60","D"],["1975","only","-","Aug","31",["0","0","0",null],"0","S"],["1985","only","-","Apr","14",["0","0","0",null],"60","D"],["1985","only","-","Sep","15",["0","0","0",null],"0","S"],["1986","only","-","May","18",["0","0","0",null],"60","D"],["1986","only","-","Sep","7",["0","0","0",null],"0","S"],["1987","only","-","Apr","15",["0","0","0",null],"60","D"],["1987","only","-","Sep","13",["0","0","0",null],"0","S"],["1988","only","-","Apr","10",["0","0","0",null],"60","D"],["1988","only","-","Sep","4",["0","0","0",null],"0","S"],["1989","only","-","Apr","30",["0","0","0",null],"60","D"],["1989","only","-","Sep","3",["0","0","0",null],"0","S"],["1990","only","-","Mar","25",["0","0","0",null],"60","D"],["1990","only","-","Aug","26",["0","0","0",null],"0","S"],["1991","only","-","Mar","24",["0","0","0",null],"60","D"],["1991","only","-","Sep","1",["0","0","0",null],"0","S"],["1992","only","-","Mar","29",["0","0","0",null],"60","D"],["1992","only","-","Sep","6",["0","0","0",null],"0","S"],["1993","only","-","Apr","2",["0","0","0",null],"60","D"],["1993","only","-","Sep","5",["0","0","0",null],"0","S"],["1994","only","-","Apr","1",["0","0","0",null],"60","D"],["1994","only","-","Aug","28",["0","0","0",null],"0","S"],["1995","only","-","Mar","31",["0","0","0",null],"60","D"],["1995","only","-","Sep","3",["0","0","0",null],"0","S"],["1996","only","-","Mar","15",["0","0","0",null],"60","D"],["1996","only","-","Sep","16",["0","0","0",null],"0","S"],["1997","only","-","Mar","21",["0","0","0",null],"60","D"],["1997","only","-","Sep","14",["0","0","0",null],"0","S"],["1998","only","-","Mar","20",["0","0","0",null],"60","D"],["1998","only","-","Sep","6",["0","0","0",null],"0","S"],["1999","only","-","Apr","2",["2","0","0",null],"60","D"],["1999","only","-","Sep","3",["2","0","0",null],"0","S"],["2000","only","-","Apr","14",["2","0","0",null],"60","D"],["2000","only","-","Oct","6",["1","0","0",null],"0","S"],["2001","only","-","Apr","9",["1","0","0",null],"60","D"],["2001","only","-","Sep","24",["1","0","0",null],"0","S"],["2002","only","-","Mar","29",["1","0","0",null],"60","D"],["2002","only","-","Oct","7",["1","0","0",null],"0","S"],["2003","only","-","Mar","28",["1","0","0",null],"60","D"],["2003","only","-","Oct","3",["1","0","0",null],"0","S"],["2004","only","-","Apr","7",["1","0","0",null],"60","D"],["2004","only","-","Sep","22",["1","0","0",null],"0","S"],["2005","only","-","Apr","1",["2","0","0",null],"60","D"],["2005","only","-","Oct","9",["2","0","0",null],"0","S"],["2006","2010","-","Mar","Fri>=26",["2","0","0",null],"60","D"],["2006","only","-","Oct","1",["2","0","0",null],"0","S"],["2007","only","-","Sep","16",["2","0","0",null],"0","S"],["2008","only","-","Oct","5",["2","0","0",null],"0","S"],["2009","only","-","Sep","27",["2","0","0",null],"0","S"],["2010","only","-","Sep","12",["2","0","0",null],"0","S"],["2011","only","-","Apr","1",["2","0","0",null],"60","D"],["2011","only","-","Oct","2",["2","0","0",null],"0","S"],["2012","only","-","Mar","Fri>=26",["2","0","0",null],"60","D"],["2012","only","-","Sep","23",["2","0","0",null],"0","S"],["2013","max","-","Mar","Fri>=23",["2","0","0",null],"60","D"],["2013","max","-","Oct","lastSun",["2","0","0",null],"0","S"]],"Japan":[["1948","only","-","May","Sat>=1",["24","0","0",null],"60","D"],["1948","1951","-","Sep","Sat>=8",["25","0","0",null],"0","S"],["1949","only","-","Apr","Sat>=1",["24","0","0",null],"60","D"],["1950","1951","-","May","Sat>=1",["24","0","0",null],"60","D"]],"Jordan":[["1973","only","-","Jun","6",["0","0","0",null],"60","S"],["1973","1975","-","Oct","1",["0","0","0",null],"0","-"],["1974","1977","-","May","1",["0","0","0",null],"60","S"],["1976","only","-","Nov","1",["0","0","0",null],"0","-"],["1977","only","-","Oct","1",["0","0","0",null],"0","-"],["1978","only","-","Apr","30",["0","0","0",null],"60","S"],["1978","only","-","Sep","30",["0","0","0",null],"0","-"],["1985","only","-","Apr","1",["0","0","0",null],"60","S"],["1985","only","-","Oct","1",["0","0","0",null],"0","-"],["1986","1988","-","Apr","Fri>=1",["0","0","0",null],"60","S"],["1986","1990","-","Oct","Fri>=1",["0","0","0",null],"0","-"],["1989","only","-","May","8",["0","0","0",null],"60","S"],["1990","only","-","Apr","27",["0","0","0",null],"60","S"],["1991","only","-","Apr","17",["0","0","0",null],"60","S"],["1991","only","-","Sep","27",["0","0","0",null],"0","-"],["1992","only","-","Apr","10",["0","0","0",null],"60","S"],["1992","1993","-","Oct","Fri>=1",["0","0","0",null],"0","-"],["1993","1998","-","Apr","Fri>=1",["0","0","0",null],"60","S"],["1994","only","-","Sep","Fri>=15",["0","0","0",null],"0","-"],["1995","1998","-","Sep","Fri>=15",["0","0","0","s"],"0","-"],["1999","only","-","Jul","1",["0","0","0","s"],"60","S"],["1999","2002","-","Sep","lastFri",["0","0","0","s"],"0","-"],["2000","2001","-","Mar","lastThu",["0","0","0","s"],"60","S"],["2002","2012","-","Mar","lastThu",["24","0","0",null],"60","S"],["2003","only","-","Oct","24",["0","0","0","s"],"0","-"],["2004","only","-","Oct","15",["0","0","0","s"],"0","-"],["2005","only","-","Sep","lastFri",["0","0","0","s"],"0","-"],["2006","2011","-","Oct","lastFri",["0","0","0","s"],"0","-"],["2013","only","-","Dec","20",["0","0","0",null],"0","-"],["2014","max","-","Mar","lastThu",["24","0","0",null],"60","S"],["2014","max","-","Oct","lastFri",["0","0","0","s"],"0","-"]],"Kyrgyz":[["1992","1996","-","Apr","Sun>=7",["0","0","0","s"],"60","-"],["1992","1996","-","Sep","lastSun",["0","0","0",null],"0","-"],["1997","2005","-","Mar","lastSun",["2","30","0",null],"60","-"],["1997","2004","-","Oct","lastSun",["2","30","0",null],"0","-"]],"ROK":[["1948","only","-","Jun","1",["0","0","0",null],"60","D"],["1948","only","-","Sep","13",["0","0","0",null],"0","S"],["1949","only","-","Apr","3",["0","0","0",null],"60","D"],["1949","1951","-","Sep","Sun>=8",["0","0","0",null],"0","S"],["1950","only","-","Apr","1",["0","0","0",null],"60","D"],["1951","only","-","May","6",["0","0","0",null],"60","D"],["1955","only","-","May","5",["0","0","0",null],"60","D"],["1955","only","-","Sep","9",["0","0","0",null],"0","S"],["1956","only","-","May","20",["0","0","0",null],"60","D"],["1956","only","-","Sep","30",["0","0","0",null],"0","S"],["1957","1960","-","May","Sun>=1",["0","0","0",null],"60","D"],["1957","1960","-","Sep","Sun>=18",["0","0","0",null],"0","S"],["1987","1988","-","May","Sun>=8",["2","0","0",null],"60","D"],["1987","1988","-","Oct","Sun>=8",["3","0","0",null],"0","S"]],"Lebanon":[["1920","only","-","Mar","28",["0","0","0",null],"60","S"],["1920","only","-","Oct","25",["0","0","0",null],"0","-"],["1921","only","-","Apr","3",["0","0","0",null],"60","S"],["1921","only","-","Oct","3",["0","0","0",null],"0","-"],["1922","only","-","Mar","26",["0","0","0",null],"60","S"],["1922","only","-","Oct","8",["0","0","0",null],"0","-"],["1923","only","-","Apr","22",["0","0","0",null],"60","S"],["1923","only","-","Sep","16",["0","0","0",null],"0","-"],["1957","1961","-","May","1",["0","0","0",null],"60","S"],["1957","1961","-","Oct","1",["0","0","0",null],"0","-"],["1972","only","-","Jun","22",["0","0","0",null],"60","S"],["1972","1977","-","Oct","1",["0","0","0",null],"0","-"],["1973","1977","-","May","1",["0","0","0",null],"60","S"],["1978","only","-","Apr","30",["0","0","0",null],"60","S"],["1978","only","-","Sep","30",["0","0","0",null],"0","-"],["1984","1987","-","May","1",["0","0","0",null],"60","S"],["1984","1991","-","Oct","16",["0","0","0",null],"0","-"],["1988","only","-","Jun","1",["0","0","0",null],"60","S"],["1989","only","-","May","10",["0","0","0",null],"60","S"],["1990","1992","-","May","1",["0","0","0",null],"60","S"],["1992","only","-","Oct","4",["0","0","0",null],"0","-"],["1993","max","-","Mar","lastSun",["0","0","0",null],"60","S"],["1993","1998","-","Sep","lastSun",["0","0","0",null],"0","-"],["1999","max","-","Oct","lastSun",["0","0","0",null],"0","-"]],"NBorneo":[["1935","1941","-","Sep","14",["0","0","0",null],"20","-"],["1935","1941","-","Dec","14",["0","0","0",null],"0","-"]],"Mongol":[["1983","1984","-","Apr","1",["0","0","0",null],"60","-"],["1983","only","-","Oct","1",["0","0","0",null],"0","-"],["1985","1998","-","Mar","lastSun",["0","0","0",null],"60","-"],["1984","1998","-","Sep","lastSun",["0","0","0",null],"0","-"],["2001","only","-","Apr","lastSat",["2","0","0",null],"60","-"],["2001","2006","-","Sep","lastSat",["2","0","0",null],"0","-"],["2002","2006","-","Mar","lastSat",["2","0","0",null],"60","-"],["2015","2016","-","Mar","lastSat",["2","0","0",null],"60","-"],["2015","2016","-","Sep","lastSat",["0","0","0",null],"0","-"]],"Pakistan":[["2002","only","-","Apr","Sun>=2",["0","0","0",null],"60","S"],["2002","only","-","Oct","Sun>=2",["0","0","0",null],"0","-"],["2008","only","-","Jun","1",["0","0","0",null],"60","S"],["2008","2009","-","Nov","1",["0","0","0",null],"0","-"],["2009","only","-","Apr","15",["0","0","0",null],"60","S"]],"EgyptAsia":[["1957","only","-","May","10",["0","0","0",null],"60","S"],["1957","1958","-","Oct","1",["0","0","0",null],"0","-"],["1958","only","-","May","1",["0","0","0",null],"60","S"],["1959","1967","-","May","1",["1","0","0",null],"60","S"],["1959","1965","-","Sep","30",["3","0","0",null],"0","-"],["1966","only","-","Oct","1",["3","0","0",null],"0","-"]],"Palestine":[["1999","2005","-","Apr","Fri>=15",["0","0","0",null],"60","S"],["1999","2003","-","Oct","Fri>=15",["0","0","0",null],"0","-"],["2004","only","-","Oct","1",["1","0","0",null],"0","-"],["2005","only","-","Oct","4",["2","0","0",null],"0","-"],["2006","2007","-","Apr","1",["0","0","0",null],"60","S"],["2006","only","-","Sep","22",["0","0","0",null],"0","-"],["2007","only","-","Sep","Thu>=8",["2","0","0",null],"0","-"],["2008","2009","-","Mar","lastFri",["0","0","0",null],"60","S"],["2008","only","-","Sep","1",["0","0","0",null],"0","-"],["2009","only","-","Sep","Fri>=1",["1","0","0",null],"0","-"],["2010","only","-","Mar","26",["0","0","0",null],"60","S"],["2010","only","-","Aug","11",["0","0","0",null],"0","-"],["2011","only","-","Apr","1",["0","1","0",null],"60","S"],["2011","only","-","Aug","1",["0","0","0",null],"0","-"],["2011","only","-","Aug","30",["0","0","0",null],"60","S"],["2011","only","-","Sep","30",["0","0","0",null],"0","-"],["2012","2014","-","Mar","lastThu",["24","0","0",null],"60","S"],["2012","only","-","Sep","21",["1","0","0",null],"0","-"],["2013","only","-","Sep","Fri>=21",["0","0","0",null],"0","-"],["2014","2015","-","Oct","Fri>=21",["0","0","0",null],"0","-"],["2015","only","-","Mar","lastFri",["24","0","0",null],"60","S"],["2016","max","-","Mar","Sat>=22",["1","0","0",null],"60","S"],["2016","max","-","Oct","lastSat",["1","0","0",null],"0","-"]],"Phil":[["1936","only","-","Nov","1",["0","0","0",null],"60","D"],["1937","only","-","Feb","1",["0","0","0",null],"0","S"],["1954","only","-","Apr","12",["0","0","0",null],"60","D"],["1954","only","-","Jul","1",["0","0","0",null],"0","S"],["1978","only","-","Mar","22",["0","0","0",null],"60","D"],["1978","only","-","Sep","21",["0","0","0",null],"0","S"]],"Syria":[["1920","1923","-","Apr","Sun>=15",["2","0","0",null],"60","S"],["1920","1923","-","Oct","Sun>=1",["2","0","0",null],"0","-"],["1962","only","-","Apr","29",["2","0","0",null],"60","S"],["1962","only","-","Oct","1",["2","0","0",null],"0","-"],["1963","1965","-","May","1",["2","0","0",null],"60","S"],["1963","only","-","Sep","30",["2","0","0",null],"0","-"],["1964","only","-","Oct","1",["2","0","0",null],"0","-"],["1965","only","-","Sep","30",["2","0","0",null],"0","-"],["1966","only","-","Apr","24",["2","0","0",null],"60","S"],["1966","1976","-","Oct","1",["2","0","0",null],"0","-"],["1967","1978","-","May","1",["2","0","0",null],"60","S"],["1977","1978","-","Sep","1",["2","0","0",null],"0","-"],["1983","1984","-","Apr","9",["2","0","0",null],"60","S"],["1983","1984","-","Oct","1",["2","0","0",null],"0","-"],["1986","only","-","Feb","16",["2","0","0",null],"60","S"],["1986","only","-","Oct","9",["2","0","0",null],"0","-"],["1987","only","-","Mar","1",["2","0","0",null],"60","S"],["1987","1988","-","Oct","31",["2","0","0",null],"0","-"],["1988","only","-","Mar","15",["2","0","0",null],"60","S"],["1989","only","-","Mar","31",["2","0","0",null],"60","S"],["1989","only","-","Oct","1",["2","0","0",null],"0","-"],["1990","only","-","Apr","1",["2","0","0",null],"60","S"],["1990","only","-","Sep","30",["2","0","0",null],"0","-"],["1991","only","-","Apr","1",["0","0","0",null],"60","S"],["1991","1992","-","Oct","1",["0","0","0",null],"0","-"],["1992","only","-","Apr","8",["0","0","0",null],"60","S"],["1993","only","-","Mar","26",["0","0","0",null],"60","S"],["1993","only","-","Sep","25",["0","0","0",null],"0","-"],["1994","1996","-","Apr","1",["0","0","0",null],"60","S"],["1994","2005","-","Oct","1",["0","0","0",null],"0","-"],["1997","1998","-","Mar","lastMon",["0","0","0",null],"60","S"],["1999","2006","-","Apr","1",["0","0","0",null],"60","S"],["2006","only","-","Sep","22",["0","0","0",null],"0","-"],["2007","only","-","Mar","lastFri",["0","0","0",null],"60","S"],["2007","only","-","Nov","Fri>=1",["0","0","0",null],"0","-"],["2008","only","-","Apr","Fri>=1",["0","0","0",null],"60","S"],["2008","only","-","Nov","1",["0","0","0",null],"0","-"],["2009","only","-","Mar","lastFri",["0","0","0",null],"60","S"],["2010","2011","-","Apr","Fri>=1",["0","0","0",null],"60","S"],["2012","max","-","Mar","lastFri",["0","0","0",null],"60","S"],["2009","max","-","Oct","lastFri",["0","0","0",null],"0","-"]]},"version":"2018f"}
},{}]},{},[])("timezonecomplete")
});

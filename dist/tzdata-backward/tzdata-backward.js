(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tzdataBackward = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"timezonecomplete":[function(require,module,exports){
module.exports={"zones":{"Australia/ACT":"Australia/Sydney","Australia/LHI":"Australia/Lord_Howe","Australia/NSW":"Australia/Sydney","Australia/North":"Australia/Darwin","Australia/Queensland":"Australia/Brisbane","Australia/South":"Australia/Adelaide","Australia/Tasmania":"Australia/Hobart","Australia/Victoria":"Australia/Melbourne","Australia/West":"Australia/Perth","Australia/Yancowinna":"Australia/Broken_Hill","Brazil/Acre":"America/Rio_Branco","Brazil/DeNoronha":"America/Noronha","Brazil/East":"America/Sao_Paulo","Brazil/West":"America/Manaus","Canada/Atlantic":"America/Halifax","Canada/Central":"America/Winnipeg","Canada/Eastern":"America/Toronto","Canada/Mountain":"America/Edmonton","Canada/Newfoundland":"America/St_Johns","Canada/Pacific":"America/Vancouver","Canada/Saskatchewan":"America/Regina","Canada/Yukon":"America/Whitehorse","Chile/Continental":"America/Santiago","Chile/EasterIsland":"Pacific/Easter","Cuba":"America/Havana","Egypt":"Africa/Cairo","Eire":"Europe/Dublin","Etc/GMT+0":"Etc/GMT","Etc/GMT-0":"Etc/GMT","Etc/GMT0":"Etc/GMT","Etc/Greenwich":"Etc/GMT","Etc/UCT":"Etc/UTC","Etc/Universal":"Etc/UTC","Etc/Zulu":"Etc/UTC","GB":"Europe/London","GB-Eire":"Europe/London","GMT+0":"Etc/GMT","GMT-0":"Etc/GMT","GMT0":"Etc/GMT","Greenwich":"Etc/GMT","Hongkong":"Asia/Hong_Kong","Iceland":"Africa/Abidjan","Iran":"Asia/Tehran","Israel":"Asia/Jerusalem","Jamaica":"America/Jamaica","Japan":"Asia/Tokyo","Kwajalein":"Pacific/Kwajalein","Libya":"Africa/Tripoli","Mexico/BajaNorte":"America/Tijuana","Mexico/BajaSur":"America/Mazatlan","Mexico/General":"America/Mexico_City","NZ":"Pacific/Auckland","NZ-CHAT":"Pacific/Chatham","Navajo":"America/Denver","PRC":"Asia/Shanghai","Poland":"Europe/Warsaw","Portugal":"Europe/Lisbon","ROC":"Asia/Taipei","ROK":"Asia/Seoul","Singapore":"Asia/Singapore","Turkey":"Europe/Istanbul","UCT":"Etc/UTC","US/Alaska":"America/Anchorage","US/Aleutian":"America/Adak","US/Arizona":"America/Phoenix","US/Central":"America/Chicago","US/East-Indiana":"America/Indiana/Indianapolis","US/Eastern":"America/New_York","US/Hawaii":"Pacific/Honolulu","US/Indiana-Starke":"America/Indiana/Knox","US/Michigan":"America/Detroit","US/Mountain":"America/Denver","US/Pacific":"America/Los_Angeles","US/Samoa":"Pacific/Pago_Pago","UTC":"Etc/UTC","Universal":"Etc/UTC","W-SU":"Europe/Moscow","Zulu":"Etc/UTC","America/Buenos_Aires":"America/Argentina/Buenos_Aires","America/Catamarca":"America/Argentina/Catamarca","America/Cordoba":"America/Argentina/Cordoba","America/Indianapolis":"America/Indiana/Indianapolis","America/Jujuy":"America/Argentina/Jujuy","America/Knox_IN":"America/Indiana/Knox","America/Louisville":"America/Kentucky/Louisville","America/Mendoza":"America/Argentina/Mendoza","America/Virgin":"America/Puerto_Rico","Pacific/Samoa":"Pacific/Pago_Pago","Africa/Accra":"Africa/Abidjan","Africa/Addis_Ababa":"Africa/Nairobi","Africa/Asmara":"Africa/Nairobi","Africa/Bamako":"Africa/Abidjan","Africa/Bangui":"Africa/Lagos","Africa/Banjul":"Africa/Abidjan","Africa/Blantyre":"Africa/Maputo","Africa/Brazzaville":"Africa/Lagos","Africa/Bujumbura":"Africa/Maputo","Africa/Conakry":"Africa/Abidjan","Africa/Dakar":"Africa/Abidjan","Africa/Dar_es_Salaam":"Africa/Nairobi","Africa/Djibouti":"Africa/Nairobi","Africa/Douala":"Africa/Lagos","Africa/Freetown":"Africa/Abidjan","Africa/Gaborone":"Africa/Maputo","Africa/Harare":"Africa/Maputo","Africa/Kampala":"Africa/Nairobi","Africa/Kigali":"Africa/Maputo","Africa/Kinshasa":"Africa/Lagos","Africa/Libreville":"Africa/Lagos","Africa/Lome":"Africa/Abidjan","Africa/Luanda":"Africa/Lagos","Africa/Lubumbashi":"Africa/Maputo","Africa/Lusaka":"Africa/Maputo","Africa/Malabo":"Africa/Lagos","Africa/Maseru":"Africa/Johannesburg","Africa/Mbabane":"Africa/Johannesburg","Africa/Mogadishu":"Africa/Nairobi","Africa/Niamey":"Africa/Lagos","Africa/Nouakchott":"Africa/Abidjan","Africa/Ouagadougou":"Africa/Abidjan","Africa/Porto-Novo":"Africa/Lagos","America/Anguilla":"America/Puerto_Rico","America/Antigua":"America/Puerto_Rico","America/Aruba":"America/Puerto_Rico","America/Atikokan":"America/Panama","America/Blanc-Sablon":"America/Puerto_Rico","America/Cayman":"America/Panama","America/Creston":"America/Phoenix","America/Curacao":"America/Puerto_Rico","America/Dominica":"America/Puerto_Rico","America/Grenada":"America/Puerto_Rico","America/Guadeloupe":"America/Puerto_Rico","America/Kralendijk":"America/Puerto_Rico","America/Lower_Princes":"America/Puerto_Rico","America/Marigot":"America/Puerto_Rico","America/Montserrat":"America/Puerto_Rico","America/Nassau":"America/Toronto","America/Port_of_Spain":"America/Puerto_Rico","America/St_Barthelemy":"America/Puerto_Rico","America/St_Kitts":"America/Puerto_Rico","America/St_Lucia":"America/Puerto_Rico","America/St_Thomas":"America/Puerto_Rico","America/St_Vincent":"America/Puerto_Rico","America/Tortola":"America/Puerto_Rico","Antarctica/DumontDUrville":"Pacific/Port_Moresby","Antarctica/McMurdo":"Pacific/Auckland","Antarctica/Syowa":"Asia/Riyadh","Antarctica/Vostok":"Asia/Urumqi","Arctic/Longyearbyen":"Europe/Berlin","Asia/Aden":"Asia/Riyadh","Asia/Bahrain":"Asia/Qatar","Asia/Brunei":"Asia/Kuching","Asia/Kuala_Lumpur":"Asia/Singapore","Asia/Kuwait":"Asia/Riyadh","Asia/Muscat":"Asia/Dubai","Asia/Phnom_Penh":"Asia/Bangkok","Asia/Vientiane":"Asia/Bangkok","Atlantic/Reykjavik":"Africa/Abidjan","Atlantic/St_Helena":"Africa/Abidjan","Europe/Amsterdam":"Europe/Brussels","Europe/Bratislava":"Europe/Prague","Europe/Busingen":"Europe/Zurich","Europe/Copenhagen":"Europe/Berlin","Europe/Guernsey":"Europe/London","Europe/Isle_of_Man":"Europe/London","Europe/Jersey":"Europe/London","Europe/Ljubljana":"Europe/Belgrade","Europe/Luxembourg":"Europe/Brussels","Europe/Mariehamn":"Europe/Helsinki","Europe/Monaco":"Europe/Paris","Europe/Oslo":"Europe/Berlin","Europe/Podgorica":"Europe/Belgrade","Europe/San_Marino":"Europe/Rome","Europe/Sarajevo":"Europe/Belgrade","Europe/Skopje":"Europe/Belgrade","Europe/Stockholm":"Europe/Berlin","Europe/Vaduz":"Europe/Zurich","Europe/Vatican":"Europe/Rome","Europe/Zagreb":"Europe/Belgrade","Indian/Antananarivo":"Africa/Nairobi","Indian/Christmas":"Asia/Bangkok","Indian/Cocos":"Asia/Yangon","Indian/Comoro":"Africa/Nairobi","Indian/Kerguelen":"Indian/Maldives","Indian/Mahe":"Asia/Dubai","Indian/Mayotte":"Africa/Nairobi","Indian/Reunion":"Asia/Dubai","Pacific/Chuuk":"Pacific/Port_Moresby","Pacific/Funafuti":"Pacific/Tarawa","Pacific/Majuro":"Pacific/Tarawa","Pacific/Midway":"Pacific/Pago_Pago","Pacific/Pohnpei":"Pacific/Guadalcanal","Pacific/Saipan":"Pacific/Guam","Pacific/Wake":"Pacific/Tarawa","Pacific/Wallis":"Pacific/Tarawa","Africa/Timbuktu":"Africa/Abidjan","America/Argentina/ComodRivadavia":"America/Argentina/Catamarca","America/Atka":"America/Adak","America/Coral_Harbour":"America/Panama","America/Ensenada":"America/Tijuana","America/Fort_Wayne":"America/Indiana/Indianapolis","America/Montreal":"America/Toronto","America/Nipigon":"America/Toronto","America/Porto_Acre":"America/Rio_Branco","America/Rainy_River":"America/Winnipeg","America/Rosario":"America/Argentina/Cordoba","America/Santa_Isabel":"America/Tijuana","America/Shiprock":"America/Denver","America/Thunder_Bay":"America/Toronto","Antarctica/South_Pole":"Pacific/Auckland","Asia/Chongqing":"Asia/Shanghai","Asia/Harbin":"Asia/Shanghai","Asia/Kashgar":"Asia/Urumqi","Asia/Tel_Aviv":"Asia/Jerusalem","Atlantic/Jan_Mayen":"Europe/Berlin","Australia/Canberra":"Australia/Sydney","Australia/Currie":"Australia/Hobart","Europe/Belfast":"Europe/London","Europe/Tiraspol":"Europe/Chisinau","Europe/Uzhgorod":"Europe/Kyiv","Europe/Zaporozhye":"Europe/Kyiv","Pacific/Enderbury":"Pacific/Kanton","Pacific/Johnston":"Pacific/Honolulu","Pacific/Yap":"Pacific/Port_Moresby","Africa/Asmera":"Africa/Nairobi","America/Godthab":"America/Nuuk","Asia/Ashkhabad":"Asia/Ashgabat","Asia/Calcutta":"Asia/Kolkata","Asia/Chungking":"Asia/Shanghai","Asia/Dacca":"Asia/Dhaka","Asia/Istanbul":"Europe/Istanbul","Asia/Katmandu":"Asia/Kathmandu","Asia/Macao":"Asia/Macau","Asia/Rangoon":"Asia/Yangon","Asia/Saigon":"Asia/Ho_Chi_Minh","Asia/Thimbu":"Asia/Thimphu","Asia/Ujung_Pandang":"Asia/Makassar","Asia/Ulan_Bator":"Asia/Ulaanbaatar","Atlantic/Faeroe":"Atlantic/Faroe","Europe/Kiev":"Europe/Kyiv","Europe/Nicosia":"Asia/Nicosia","Pacific/Ponape":"Pacific/Guadalcanal","Pacific/Truk":"Pacific/Port_Moresby"},"rules":{},"version":"2022f"}
},{}]},{},[])("timezonecomplete")
});

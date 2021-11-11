
/* Afrika */
var af08 : number = 1028;
var af18 : number = 1235.5;

var AfWelt : number = af18/welt*100;
var Af08Af18pr : number = (af18/af08-1)*100;
var Af08Af18kg  : number = af18-af08;

/* Süd Amerika */
var sa08 : number = 1132.6;
var sa18 : number = 1261.5;

var SaWelt : number = sa18/welt*100;
var Sa08Sa18pr : number = (sa18/sa08-1)*100;
var Sa08Sa18kg  : number = sa18-sa08;

/* Europa */

var eu08 : number = 4965.7;
var eu18 : number = 4209.3;

var EuWelt : number = eu18/welt*100;
var Eu08Eu18pr : number = (eu18/eu08-1)*100;
var Eu08Eu18kg  : number = eu18-eu08;

/* Nord Amerika */

var na08 : number = 6600.4;
var na18 : number = 6035.6;

var NaWelt : number = na18/welt*100;
var Na08Na18pr : number = (na18/na08-1)*100;
var Na08Na18kg  : number = na18-na08;

/* Asien */

var as08 : number = 12954.7;
var as18 : number = 16274.1;

var AsWelt : number = as18/welt*100;
var As08As18pr : number = (as18/as08-1)*100;
var As08As18kg  : number = as18-as08;

/* Australien */

var au08 : number = 1993;
var au18 : number = 2100.5;

var AuWelt : number = au18/welt*100;
var Au08Au18pr : number = (au18/au08-1)*100;
var Au08Au18kg  : number = au18-au08;

/* Gesamte Welt */

var welt : number = af18+sa18+eu18+na18+as18+au18;


/* Console */ 
console.log ('Die Emission von Afrika ist:' +af18+ 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+AfWelt+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+Af08Af18pr+'% verändert.');
console.log('2018 im Vergleich zu 2008 sind das'+Af08Af18kg+'kg CO2');

console.log ('Die Emission von Süd Amerika ist:' +sa18+ 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+SaWelt+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+Sa08Sa18pr+'% verändert.');
console.log('2018 im Vergleich zu 2008 sind das'+Sa08Sa18kg+'kg CO2');

console.log ('Die Emission von Europa ist:' +eu18+ 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+EuWelt+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+Eu08Eu18pr+'% verändert.');
console.log('2018 im Vergleich zu 2008 sind das'+Eu08Eu18kg+'kg CO2');

console.log ('Die Emission von Nord Amerika ist:' +na18+ 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+NaWelt+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+Na08Na18pr+'% verändert.');
console.log('2018 im Vergleich zu 2008 sind das'+Na08Na18kg+'kg CO2');

console.log ('Die Emission von Asien ist:' +as18+ 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+AsWelt+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+As08As18pr+'% verändert.');
console.log('2018 im Vergleich zu 2008 sind das'+As08As18kg+'kg CO2');

console.log ('Die Emission von Austarlien ist:' +au18+ 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit'+AuWelt+'%');
console.log('Fuer Afrika hat sich 2018 im Vergleich zu 2008 die Emission um'+Au08Au18pr+'% verändert.');
console.log('2018 im Vergleich zu 2008 sind das'+Au08Au18kg+'kg CO2');







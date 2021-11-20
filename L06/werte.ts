window.addEventListener("load", function(){

    /* Länder Variablen */
    var au : string = "Australia" ;
    var as : string = "Asia" ;
    var na : string = "North-Amerika" ;
    var eu : string = "Europe" ;
    var sa : string = "South-Amerika" ;
    var af : string = "Africa" ;

    /*Afrika*/
    var af08=1028;
    var af18=1235.5;

    /*Süd Amerika*/
    var sa08=1132.6;
    var sa18=1261.5;

    /*Europa*/
    var eu08=4965.7;
    var eu18=4209.3;

    /*Nord Amerika*/
    var na08=6600.4;
    var na18=6035.6;

    /*Asien*/
    var as08=12954.7;
    var as18=16274.1;

    /*Australien*/
    var au08=1993;
    var au18=2100.5;



    /* ------- Berechnung ------- */

    /*Welt*/
    var welt=af18+sa18+eu18+na18+as18+au18;

    /* Afrika Rechnung */
    var AfWelt : number =Math.round (af18/welt*100);
    var Af08Af18pr : number =Math.round ((af18/af08-1)*100);
    var Af08Af18kg  : number =Math.round (af18-af08);

    /* Süd Amerika Rechnung */
    var SaWelt : number =Math.round (sa18/welt*100);
    var Sa08Sa18pr : number =Math.round ((sa18/sa08-1)*100);
    var Sa08Sa18kg  : number =Math.round (sa18-sa08);

    /* Europa Rechnung */
    var EuWelt : number =Math.round (eu18/welt*100);
    var Eu08Eu18pr : number =Math.round ((eu18/eu08-1)*100);
    var Eu08Eu18kg  : number =Math.round (eu18-eu08);

    /* Nord Amerika Rechnung*/
    var NaWelt : number =Math.round (na18/welt*100);
    var Na08Na18pr : number =Math.round ((na18/na08-1)*100);
    var Na08Na18kg  : number =Math.round (na18-na08);

    /* Asien Rechnung */
    var AsWelt : number =Math.round (as18/welt*100);
    var As08As18pr : number =Math.round ((as18/as08-1)*100);
    var As08As18kg  : number =Math.round (as18-as08);

    /* Australien Rechnung */
    var AuWelt : number =Math.round (au18/welt*100);
    var Au08Au18pr : number =Math.round ((au18/au08-1)*100);
    var Au08Au18kg  : number =Math.round (au18-au08);

    
    /* ------- Funktion ------- */

function mycontinent (kontinent, kontinent18, KonWelt, KonzuKontPR, KontzuKontKG){
    document.querySelector(".continent").innerHTML = kontinent;
    document.querySelector(".EmAbs").innerHTML = kontinent18;
    document.querySelector(".subcontinent").innerHTML = kontinent;
    document.querySelector(".EmRel").innerHTML = KonWelt + "%";
    document.querySelector(".GroP").innerHTML = KonzuKontPR + "%";
    document.querySelector(".GroAbs").innerHTML = KontzuKontKG;
    document.querySelector(".chart").setAttribute("style", "height:" + (kontinent18 / welt) * 100 + "%");
}

document.querySelector(".afrika").addEventListener("click", function () {mycontinent(af, af18, AfWelt, Af08Af18pr, Af08Af18kg);});
document.querySelector(".europa").addEventListener("click", function () {mycontinent(eu, eu18, EuWelt, Eu08Eu18pr, Eu08Eu18kg);});
document.querySelector(".suedamerika").addEventListener("click", function () {mycontinent(sa, sa18, SaWelt, Sa08Sa18pr, Sa08Sa18kg);});
document.querySelector(".nordamerika").addEventListener("click", function () {mycontinent(na, na18, NaWelt, Na08Na18pr, Na08Na18kg);});
document.querySelector(".asien").addEventListener("click", function () {mycontinent(as, as18, AsWelt, As08As18pr, As08As18kg);});
document.querySelector(".australien").addEventListener("click", function () {mycontinent(au, au18, AuWelt, Au08Au18pr, Au08Au18kg);});

});

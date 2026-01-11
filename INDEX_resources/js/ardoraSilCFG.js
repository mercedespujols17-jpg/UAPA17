//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades"; messageTime=""; messageError="Sigue repasando"; messageErrorG="Sigue repasando"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wGame=["-¿De qué palabra francesa proviene el término emprendimiento?","-¿Qué factor clave impulsó el surgimiento de nuevos emprendedores en el siglo XIX?","-En los siglos XVII y XVIII, ¿qué significado se le daba al término “entrepreneur”?","-¿Quién fue el economista que asoció el emprendimiento con la asunción de riesgos en la economía?","-Característica clave de un emprendedor"];
var wIma=["","","","",""];
var audio=["","","","",""];
var wAlt=["","","","",""];
var w0=["4oCcZW50cmVwcmVuZXVy4oCdLA==","QXZhbmNlIHRlY25vbMOzZ2ljbw==","RU1QUkVOREVET1I=","RC4gUmljaGFyZCBDYW50aWxsb24=","Q29tdW5pY2Fkb3I="];
var w1=["RU1QUkVOREVEVVJJU01P","TGEgZWxlY3RyaWNpZGFk","b3JnYW5pemFiYSB5IGRpcmlnw61hIHByb3llY3Rvcw==","RkVMSVBFIFY=","Q29tdW5pY2Fkb3I="];
var w2=["4oCcZW50cmVwcmVuZXVy4oCdLA==","TGFzIG3DoXF1aW5hcw==","RU1QUkVOREVS","Qy4gRlJBTkNJU0NPIFY=","VMOtbWlkbw=="];
var w3=["QUdFTlRFIEVDT07Dk01JQ08=","QXZhbmNlIHRlY25vbMOzZ2ljbw==","RU1QUkVOREVET1I=","RC4gUmljaGFyZCBDYW50aWxsb24=","QWJ1cnJpZG8="];
var c=[15,18,11,20,11];
var wW=["","","","",""];
var dirMedia="INDEX_resources/media/";
var wordsGame="SU5ERVg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;

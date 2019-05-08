//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#0000FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Respuesta correcta "; messageTime=""; messageError="Respueta Incorrecta "; messageErrorG="Respueta Incorrecta "; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5SZWwyODA0MjAxOTE5MjIxNw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Alemania</p>","<p>Argentina</p>","<p>Brasil</p>","<p>Colombia</p>","<p>España</p>"];
var iL=["","","","",""];
var order=["","","","",""]; orderR=["","","","",""];indexR=0; indexL=0;
var cR=["","","","",""]; ansRL=["MQ","MA","Mw","Mg","NA"];
var iR=["<div  align='center'><img src='Contenido/media/Argentina.png'></div>","<div  align='center'><img src='Contenido/media/Alemania.png'></div>","<div  align='center'><img src='Contenido/media/Colombia.png'></div>","<div  align='center'><img src='Contenido/media/Brasil.png'></div>","<div  align='center'><img src='Contenido/media/Espa__a.jpg'></div>"];
